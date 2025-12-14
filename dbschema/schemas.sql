CREATE DATABASE task_tracker;
USE task_tracker;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  role ENUM('admin','employee') DEFAULT 'employee'
);

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200),
  description TEXT,
  assigned_to INT,
  status ENUM('pending','in_progress','completed') DEFAULT 'pending',
  due_date DATE,
  FOREIGN KEY (assigned_to) REFERENCES users(id)
);