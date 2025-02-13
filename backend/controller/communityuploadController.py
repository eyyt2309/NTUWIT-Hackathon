import mysql.connector
from mysql.connector import Error

def communityUpload(userId, title, problem_statement, sample_input, sample_output, further_details, model_answer, lang_name):
    try:
        connection = mysql.connector.connect(
            host='REMOVED',
            port=23680,
            user='REMOVED',
            password='REMOVED',
            database='REMOVED'
        )
        
        if connection.is_connected():
            print("Connection to MySQL successful!")

            cursor = connection.cursor()

            query = """
            INSERT INTO Projects (userId, title, problem_statement, sample_input, sample_output, further_details, model_answer, lang_name) 
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
            """
            
            values = (userId, title, problem_statement, sample_input, sample_output, further_details, model_answer, lang_name)

            cursor.execute(query, values)
            connection.commit()  # Save changes

            print("New project successfully inserted into Projects table.")
            cursor.close()
            connection.close()
        
        return True  

    except Error as e:
        print(f"Error: {e}")
        return None  
