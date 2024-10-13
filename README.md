# COMP 3123 - Assignment One - Full Stack Development I

**Student Name**: Mo Harry Bandukda  
**Student ID**: 101451857  

## 🚀 Project Overview

This project is a simple full-stack application built with **Express.js** and **MongoDB**. It provides RESTful API routes for user and employee management, allowing operations such as creating, reading, updating, and deleting (CRUD) users and employees.

## 📋 Prerequisites

To run this project on your local machine, you'll need:

- **Node.js** 
- **npm** 
- **MongoDB** 

## 🛠️ Installation Guide

### Step 1: Clone the repository

Start by cloning the project repository to your local machine:

```bash
git clone https://github.com/Harrybandukda/101451857_comp3123_assignment1.git
cd 101451857_comp3123_assignment1
```

### Step 2: Install dependencies

Install all required packages by running:

```bash
npm install
```

### Step 3: Set up environment variables

Create a `.env` file in the root directory of the project. This file should contain the following environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

> **Note**: Replace `your_mongodb_connection_string` with the actual MongoDB URI. If you're using **MongoDB Atlas**, make sure to include the full connection string provided by the Atlas cluster.

> You can change the `PORT` if necessary, but the default is set to 5000.

### Step 4: Run the application

To start the server locally, use the following command:

```bash
npm start
```

The application should now be running on `http://localhost:5000`.

## 🔗 API Endpoints

The application provides the following API endpoints:

### User Routes (`/users`)

| Method | Endpoint      | Description           |
|--------|---------------|-----------------------|
| GET    | `/users`      | Fetch all users       |
| POST   | `/users`      | Create a new user     |

### Employee Routes (`/emp`)

| Method | Endpoint    | Description              |
|--------|-------------|--------------------------|
| GET    | `/emp`      | Fetch all employees      |
| POST   | `/emp`      | Create a new employee    |
| GET    | `/emp/:id`  | Fetch an employee by ID  |
| PUT    | `/emp/:id`  | Update an employee by ID |
| DELETE | `/emp/:id`  | Delete an employee by ID |

---

📝 **Created by Mo Harry Bandukda**
