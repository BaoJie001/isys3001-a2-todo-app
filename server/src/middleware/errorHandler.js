/**
 * Global Error Handling Middleware
 * Provides consistent error responses across the API
 */

const errorHandler = (err, req, res, next) => {
  console.error('[Error Handler]:', err.message);
  
  // MongoDB Validation Errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation Failed',
      errors: Object.values(err.errors).map(error => ({
        field: error.path,
        message: error.message
      }))
    });
  }
  
  // MongoDB Duplicate Key Errors
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({
      success: false,
      message: 'Resource already exists',
      field: field,
      value: err.keyValue[field]
    });
  }
  
  // Custom API Errors
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  }
  
  // Generic Server Error (hide details in production)
  const response = {
    success: false,
    message: 'Internal Server Error'
  };
  
  // Include stack trace in development
  if (process.env.NODE_ENV === 'development') {
    response.stack = err.stack;
    response.details = err.message;
  }
  
  res.status(500).json(response);
};

module.exports = errorHandler;