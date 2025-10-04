# Todo Full-Stack Application

## Development Workflow & Branch Strategy

### Branch Structure
- **main**: Production-ready, stable releases
- **develop**: Integration branch for features
- **feature/***: New functionality development
- **hotfix/***: Critical production fixes

### Commit Convention
- `feat`: New features
- `fix`: Bug fixes  
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Testing related
- `chore`: Maintenance tasks

### Quality Assurance
- ESLint for code quality
- Jest for unit testing
- GitHub Actions CI/CD
- Security vulnerability scanning
- Automated build verification

### Local Development
```bash
# Frontend (Port 5173)
cd client && npm run dev

# Backend (Port 3000) 
cd server && npm run dev

# Database
mongod --dbpath /usr/local/var/mongodb