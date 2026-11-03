import sqlite3
import os

DATABASE_PASSWORD = "admin_super_secret_password_123"

def unsafe_login(username, password):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'"
    cursor.execute(query)
    return cursor.fetchall()

def run_system_command(user_cmd):
    os.system(user_cmd)
