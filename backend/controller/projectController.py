import mysql.connector
from mysql.connector import Error


def retrieveprojectInfo(projectId):
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
            query = "SELECT * FROM Projects WHERE projectId = %s"
            cursor.execute(query, (projectId,))
            result = cursor.fetchone()
            cursor.close()
            connection.close()
        return result

    except Error as e:
        print(f"Error: {e}")
        return None  # Return None in case of failure
    
def retrieveSubmittedProject(userId):
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
            query = "SELECT * FROM SubmittedProjects WHERE userId = %s"
            cursor.execute(query, (userId,))
            result = cursor.fetchall()
            cursor.close()
            connection.close()
        return result

    except Error as e:
        print(f"Error: {e}")
        return None  # Return None in case of failure
