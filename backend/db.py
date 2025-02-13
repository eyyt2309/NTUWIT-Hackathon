import mysql.connector
from mysql.connector import Error

def connect_to_mysql():
    try:
        connection = mysql.connector.connect(
            host='REMOVED',
            port=23680,
            user='REMOVED',
            password='REMOVED',
            database='REMOVED'
        )
        
        if connection.is_connected():
            print("Connected to MySQL database")
            return connection
    except Error as e:
        print(f"Error: {e}")
        return None
    
    return None

if __name__ == "__main__":
    conn = connect_to_mysql()
    if conn:
        conn.close()
        print("Connection closed.")
