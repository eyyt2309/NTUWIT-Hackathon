import mysql.connector
from mysql.connector import Error

def get_project_ids_by_user(user_id):
    try:
        connection = mysql.connector.connect(
            host='REMOVED',
            port=23680,
            user='REMOVED',
            password='REMOVED',
            database='REMOVED'
        )
        
        if connection.is_connected():
            cursor = connection.cursor()
            query = "SELECT projectId FROM SubmittedProjects WHERE userId = %s"
            cursor.execute(query, (user_id,))
            projectinfo = []
            # Fetch all project IDs
            project_ids = cursor.fetchall()  # Returns list of tuples
            if project_ids:
                for project in project_ids:
                    query = "SELECT * FROM SubmittedProjects WHERE projectId = %s"
                    cursor.execute(query, (user_id,))
                    project_ids.append
                    result = cursor.fetchone()
            cursor.close()
            connection.close()
            
            return [pid[0] for pid in project_ids]  # Extracts projectId values from tuples
    
    except Error as e:
        print(f"Error: {e}")
        return None

# Example usage
user_id = 1  # Replace with actual userId
projects = get_project_ids_by_user(user_id)
print("Project IDs:", projects)
