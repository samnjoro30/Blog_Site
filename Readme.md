# BLOG Site

## Project Overview
This is a modern blog website 

## Features
 
### Frontend(Next.js)
 - Server-side rendering for better SEO
 - Comment system

### Backend (laravel)

- RESTful API endpoints
- JWT authentication
- CRUD operations
- Comment system
- Database migrations and seeding

## Prerequisites

Before you begin, ensure you have met the following requirements
- **Node.js (v20 or later) for Next.js**
- **PHP for laravel**
- **Composer for laravel dependencies**
- **MySQL or Postgre**
- **npm or yarn**

## Installation

1. Clone the respository
```bash
 git clone https://github.com/samnjoro30/Blog_Site.git
 cd Blog_Site/backend
```

2. Install PHP dependencies
``` bash
 composure install
```
3. Navigate to frontend

```bash
  cd frontend
```
4. Install js dependencies
```bash
  npm install
```

5. Start dev server
```bash
  npm run dev
```

## Scripts Available

### laravel
- php artisan serve - Start the development server
- php artisan migrate - Run database migrations
- php artisan db:seed - Seed the database with sample data
- php artisan test - Run PHPUnit tests

### Next.js
- npm run dev - Start the development server
- npm run build - Create an optimized production build
- npm run lint - Run ESLint

## Deployment
for production deployment, you will need to:
1. Configure a production database(not a local database)
2. set up proper enviroment variables
3. Build the Next.js application
4. Configure a wen server for laravel
5. set Up a Node.js server/Vercel


## Contributing

1. Fork the project
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

# Contact
