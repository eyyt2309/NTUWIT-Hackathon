import mysql.connector
from mysql.connector import Error
import controller.projectController
def retrieveInfo(userId):
    try:
        connection = mysql.connector.connect(
            host='mysql-d178ad0-ntuwit.h.aivencloud.com',
            port=23680,
            user='avnadmin',
            password='AVNS_4sby-XOIcfSbT4ToAGs',
            database='defaultdb'
        )
        
        if connection.is_connected():
            print("connection works")
            cursor = connection.cursor()
            query = "SELECT projectid FROM SubmittedProjects WHERE userId = %s"
            cursor.execute(query, (userId,))
            results = cursor.fetchall()
            cursor.close()
            connection.close()
            
            if results:
                for projectId in results:
                    controller.projectController.retrieveprojectInfo(projectId)
            else:
                return False
    except Error as e:
        print(f"Error: {e}")
        return None  # Return None in case of failure
