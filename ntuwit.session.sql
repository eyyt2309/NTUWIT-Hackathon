CREATE TABLE Users (
    userId INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255),
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE Projects (
    projectId INT PRIMARY KEY AUTO_INCREMENT,
    userId INT,
    title VARCHAR(255) NOT NULL,
    problem_statement TEXT NOT NULL,
    constraints TEXT NOT NULL,
    time_limit INT,
    sample_input TEXT NOT NULL,
    sample_output TEXT NOT NULL,
    further_details TEXT NOT NULL,
    model_answer TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(userId) ON DELETE CASCADE
);

CREATE TABLE SubmittedProjects (
    projectId INT,
    userId INT,
    project_code TEXT NOT NULL,
    PRIMARY KEY (projectId, userId),
    FOREIGN KEY (projectId) REFERENCES Projects(projectId) ON DELETE CASCADE,
    FOREIGN KEY (userId) REFERENCES Users(userId) ON DELETE CASCADE
);

-- @block
SELECT * FROM Projects;
INSERT INTO Projects (userId, title, problem_statement, sample_input, sample_output, further_details, model_answer, lang_name)
VALUES 
(1, 'Database Project', 
 'Design and implement a MySQL relational database for an employee management system. The system must allow employee records to be stored, updated, and queried efficiently.',
 'CREATE TABLE Employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT, 
    first_name VARCHAR(100) NOT NULL, 
    last_name VARCHAR(100) NOT NULL, 
    department VARCHAR(100), 
    salary DECIMAL(10,2), 
    hire_date DATE NOT NULL
);', 
 'Successfully created an `Employees` table with `employee_id`, `first_name`, `last_name`, `department`, `salary`, and `hire_date`.', 
 'The system should allow HR managers to add employees, retrieve employee details based on department, and update salaries. Queries should be optimized using indexing.',
 'CREATE INDEX idx_department ON Employees(department); 
 CREATE INDEX idx_salary ON Employees(salary);', 
 'SQL');


-- @block
SELECT * FROM Users;
-- INSERT INTO Users (email, username, password_hash)
-- VALUES ('john@example.com', 'John Doe', 'hashedpassword123');
-- @block
SELECT p.projectId, p.title, p.problem_statement, u.username, u.email
FROM Projects p
JOIN Users u ON p.userId = u.userId;
-- @block
INSERT INTO Projects (userId, title, problem_statement, sample_input, sample_output, further_details, model_answer)
VALUES
-- 🌟 Project 1: SQL Database Project
(1, 'SQL Database Project',
 'Design and implement a MySQL database for a student management system.',
 'CREATE TABLE students (id INT PRIMARY KEY, name VARCHAR(255), age INT);',
 'Successfully created a table called `students` with the specified fields.',
 'Use foreign keys to connect students with courses and grades.',
 'Normalize the database using 3NF and use proper indexing for performance.'),

-- 🌟 Project 2: Object-Oriented Programming in Java
(1, 'Object-Oriented Programming',
 'Implement a Student Management System using Object-Oriented Programming principles.',
 'class Student { String name; int age; Student(String name, int age) { this.name = name; this.age = age; } }',
 'A Java class named `Student` with encapsulation and constructors.',
 'Use inheritance to extend `Person` and include polymorphism for different types of students.',
 'Use getters and setters for encapsulation and override `toString()` method.'),

-- 🌟 Project 3: Frontend Development with React
(1, 'Frontend Development',
 'Create a React-based UI for a course learning platform.',
 '<input type="text" placeholder="Enter your name" />',
 'An input field where users can enter their names.',
 'Use state management (React Context or Redux) to handle user login sessions.',
 'Use functional components and hooks (useState, useEffect) for dynamic UI updates.'),

-- 🌟 Project 4: Azure AI Fundamentals
(1, 'Azure AI Fundamentals',
 'Integrate an AI-powered chatbot using Azure Cognitive Services.',
 'User: "What is the weather today?"',
 'Chatbot: "It is 28°C and sunny."',
 'Use Azure AI for NLP processing and Microsoft Bot Framework for chatbot integration.',
 'Use LUIS (Language Understanding) API for improved user interaction.');

--@block
ALTER TABLE SubmittedProjects ADD COLUMN Lang_Name VARCHAR(255);

--@block 
DELETE FROM Projects WHERE projectId BETWEEN 3 AND 4;

--@block 
UPDATE Users 
SET password_hash = 1234 
WHERE userId = 1;

-- @block
SELECT * FROM Users

-- @block
INSERT INTO SubmittedProjects (projectId, userId, project_code, Progress_Column)
VALUES 
(2, 1,  
 'CREATE TABLE Employee (
    employee_ID INT NOT NULL,  
    first_name STRING NOT NULL,
    last_name STRING NOT NULL,  
    department TEXT NOT NULL,  
    salary FLOAT(10,2),  
    hire_date DATE DEFAULT CURRENT_TIMESTAMP,  
    PRIMARY KEY(employee_ID)  
)', 30);

-- @block
ALTER TABLE SubmittedProjects DROP COLUMN Lang_Name;

-- @block
ALTER TABLE Projects MODIFY sample_output VARCHAR(255) NULL;





