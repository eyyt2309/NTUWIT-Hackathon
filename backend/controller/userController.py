import mysql.connector
from mysql.connector import Error

def authenticate_user(email,userPassword):
    try:
        connection = mysql.connector.connect(
            host='REMOVED',
            port=23680,
            user='REMOVED',
            password='REMOVED',
            database='REMOVED'
        )
        
        if connection.is_connected():
            print("connection works")
            cursor = connection.cursor()
            query = "SELECT password_hash FROM Users WHERE email = %s"
            cursor.execute(query, (email,))
            result = cursor.fetchone()
            cursor.close()
            connection.close()
            if result[0] == userPassword:
                return True  # Return hashed password
            else:
                return False  # Email not found
    except Error as e:
        print(f"Error: {e}")
        return None  # Return None in case of failure
