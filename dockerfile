# Use Python 3.9 as the base image
FROM python:3.9

# Set working directory inside the container
WORKDIR /app

# Copy all project files into the container
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# Expose port 5000 for Flask
EXPOSE 5000

# Start Flask when the container runs
CMD ["python", "app.py"]
