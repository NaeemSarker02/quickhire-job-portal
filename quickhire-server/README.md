# QuickHire - Job Board Application

A full-stack job board application built with React.js, Node.js/Express, and MySQL.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MySQL

## Getting Started

### Prerequisites
- Node.js v18+
- MySQL 8.0+

### Backend Setup

1. Clone the repository
   git clone https://github.com/yourusername/quickhire.git

2. Go to server folder
   cd quickhire/server

3. Install dependencies
   npm install

4. Create .env file (copy from .env.example)
   cp .env.example .env

5. Update .env with your MySQL credentials

6. Create the database
   Run the SQL from /server/database.sql in your MySQL client

7. Start the server
   npm run dev

Server runs on: http://localhost:5000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/jobs | Get all jobs |
| GET | /api/jobs/:id | Get job by ID |
| POST | /api/jobs | Create job (Admin) |
| DELETE | /api/jobs/:id | Delete job (Admin) |
| GET | /api/jobs/:id/applications | Get job applications |
| POST | /api/applications | Submit application |

## Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server port (default: 5000) |
| DB_HOST | MySQL host |
| DB_USER | MySQL username |
| DB_PASSWORD | MySQL password |
| DB_NAME | Database name |