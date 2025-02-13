from sqlalchemy import create_engine, Column, Integer, String, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
import os

# Define the base class for models
Base = declarative_base()

# Define the Users table
class User(Base):
    __tablename__ = "users"

    userId = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255), nullable=False, unique=True)
    username = Column(String(255))
    password_hash = Column(String(255), nullable=False)

    projects = relationship("Project", back_populates="user", cascade="all, delete")
    submissions = relationship("SubmittedProject", back_populates="user", cascade="all, delete")

# Define the Projects table
class Project(Base):
    __tablename__ = "projects"

    projectId = Column(Integer, primary_key=True, autoincrement=True)
    userId = Column(Integer, ForeignKey("users.userId", ondelete="CASCADE"), nullable=False)
    title = Column(String(255), nullable=False)
    problem_statement = Column(Text, nullable=False)
    constraints = Column(Text, nullable=False)
    time_limit = Column(Integer)
    sample_input = Column(Text, nullable=False)
    sample_output = Column(Text, nullable=False)
    further_details = Column(Text, nullable=False)
    model_answer = Column(Text, nullable=False)

    user = relationship("User", back_populates="projects")
    submissions = relationship("SubmittedProject", back_populates="project", cascade="all, delete")

# Define the SubmittedProjects table
class SubmittedProject(Base):
    __tablename__ = "submitted_projects"

    projectId = Column(Integer, ForeignKey("projects.projectId", ondelete="CASCADE"), primary_key=True)
    userId = Column(Integer, ForeignKey("users.userId", ondelete="CASCADE"), primary_key=True)
    project_code = Column(Text, nullable=False)

    user = relationship("User", back_populates="submissions")
    project = relationship("Project", back_populates="submissions")

# Choose database (SQLite for local, MySQL for production)
db_type = os.getenv("DB_TYPE", "sqlite")  # Default to SQLite

if db_type == "mysql":
    DATABASE_URL = "mysql+pymysql://root:password@localhost/ntuwit"
else:
    DATABASE_URL = "sqlite:///ntuwit.db"

# Create database engine
engine = create_engine(DATABASE_URL, echo=True)

# Create tables in the database
Base.metadata.create_all(engine)

# Create a session
SessionLocal = sessionmaker(bind=engine)
session = SessionLocal()

print("Database and tables created successfully!")
