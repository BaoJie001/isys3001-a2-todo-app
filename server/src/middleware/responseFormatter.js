/**
 * Standardized API Response Formatter
 * Ensures consistent response structure across all endpoints
 */

const responseFormatter = (req, res, next) => {
  // Store original json method
  const originalJson = res.json;
  
  // Override json method to wrap responses
  res.json = function(data) {
    // If response already has success property, use as-is
    if (data && typeof data === 'object' && 'success' in data) {
      return originalJson.call(this, data);
    }
    
    // Wrap successful responses
    const wrappedData = {
      success: true,
      data: data,
      timestamp: new Date().toISOString(),
      path: req.originalUrl
    };
    
    return originalJson.call(this, wrappedData);
  };
  
  next();
};

module.exports = responseFormatter;