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
INSERT INTO Users (email, username, password_hash) 
VALUES 
('calvinleejiarong@gmail.com', 'Lee Jia Rong', 'password'),
('muthu@gmail.com', 'Muthu', 'password');

-- @block
SHOW FULL TABLES;
-- @block
SELECT * FROM SubmittedProjects;
-- @block
SHOW COLUMNS FROM Projects;
