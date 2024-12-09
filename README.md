# DrinkMixer

**DrinkMixer** is a collaborative project aimed at developing a simple automated system for dispensing custom mixed drinks based on user input. The system interfaces with both a web-based interface and hardware components to create the perfect drink based on the user's preferences.

### Project Overview

The user interacts with an online website to input their desired drink name and parameters. Upon submission, a POST request is sent to a Flask-based Python server, which processes the data, stores it in a MongoDB database, and communicates with the hardware to mix and dispense the drink according to the user's specifications.

### Features

- **User Input Interface**: A simple, intuitive web interface for users to specify their drink preferences.
- **Custom Drink Creation**: Allows users to specify ingredients and quantities, with flexibility for various combinations.
- **Automated Dispensing**: The system processes the user input and sends the necessary commands to the hardware to prepare the drink.
- **Flask Server**: The backend is powered by a Python Flask server, which receives and processes the user input.
- **MongoDB Database**: Drink data is stored and managed in a MongoDB database, ensuring data persistence and easy retrieval.

### Work Contributions

- **Software Development**: Ryan Di Cioccio
- **Hardware Development**: Ryan Di Cioccio, Ashton Mongeon, Adam Strelec
