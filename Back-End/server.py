from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

@app.route('/pour_drink', methods=['POST'])
def pour_drink():
    # Get the JSON payload from the request
    data = request.get_json()
    
    # Log the received data to the console
    print("Received data:", data)
    
    # Validate payload
    if not data or not all(key in data for key in ['name', 'shots', 'mixer']):
        return jsonify({"error": "Invalid payload"}), 400

    # Respond with a success message
    return jsonify({"message": f"Drink for {data['name']} is being prepared with {data['shots']} shot(s) and {data['mixer']}!"}), 200

if __name__ == '__main__':
    # Run the server on http://localhost:5000
    app.run(debug=True)
