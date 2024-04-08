from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load user data from the CSV file into a pandas DataFrame
users_df = pd.read_csv('C:\Users\ashfa\Downloads\HnCC Fam.csv')

@app.route('/login', methods=['POST'])
def login():
    req_data = request.get_json()
    email = req_data.get('email')
    password = req_data.get('password')
    
    user = users_df[(users_df['email'] == email) & (users_df['password'] == password)]

    if not user.empty:
        return jsonify({'message': 'Login successful'}),
    else:
        return jsonify({'message': 'Invalid email or password'})

if __name__ == '__main__':
    app.run(debug=True)