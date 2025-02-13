import os
import mysql.connector
from mysql.connector import Error

# Load credentials from environment variables

try:
# Connect to MySQL
    sql_connection = mysql.connector.connect(
        host='mysql.shared-services.svc.cluster.local',
        port=3306,
        user='team5_user',
        password='YnzKuGxqYikz',
        database='team5_db' 
    )
    if sql_connection.is_connected():
        print("Connected to MySQL successfully!")

        # Example query
        cursor = sql_connection.cursor()
        cursor.execute("SHOW TABLES;")  # List all tables in the database
        tables = cursor.fetchall()
        print("Tables:", tables)

except Error as e:
    print("Error while connecting to MySQL:", e)

finally:
    if 'connection' in locals() and sql_connection.is_connected():
        cursor.close()
        sql_connection.close()
        print("MySQL connection closed.")
