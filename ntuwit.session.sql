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
CREATE USER 'ntu_user'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
GRANT ALL PRIVILEGES ON *.* TO 'ntu_user'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
