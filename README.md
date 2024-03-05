
# Tip Calculator App
This React application provides a simple and user-friendly interface for calculating tips based on the bill amount and user satisfaction levels. Users can input the bill amount, select their satisfaction level, and optionally provide a satisfaction level for a friend. The app then calculates the tip amount and displays the total bill, including the tip.

## Features
Bill Input: Users can input the total bill amount.

Satisfaction Levels: Users can select their satisfaction level and, optionally, their friend's satisfaction level from a dropdown menu.

Tip Calculation: The app calculates the tip based on the average of the selected satisfaction levels.

Output Display: Displays the total amount to be paid, including the original bill and the calculated tip.

Reset Functionality: Allows users to reset the inputs and start over.

### Components
App Component
The main component rendering the TipCalculator.

TipCalculator Component
Manages the state for bill amount and satisfaction percentages, calculates the tip, and renders various sub-components.

BillInput Component
Handles the input for the bill amount.

SelectPercentage Component
A reusable component for selecting satisfaction levels.

Output Component
Displays the calculated total amount to be paid.

Reset Component
Provides a button to reset all input fields.

### Instructions for Running the App
Clone the repository.

bash
Copy code
git clone <repository-url>
Navigate to the project directory.

bash
Copy code
cd <project-directory>
Install dependencies.

bash
Copy code
npm install
Start the development server.

bash
Copy code
npm start
Open the app in your web browser at http://localhost:3000.

### Usage
Enter the bill amount in the designated input field.

Select your satisfaction level from the first dropdown.

Optionally, select your friend's satisfaction level from the second dropdown.

The app will automatically calculate the tip and display the total amount to be paid.

To start over, click the "Reset" button.

### Technologies Used
React
useState Hook
JSX
CSS
