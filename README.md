# Country Info App

This is a simple React application that allows users to search for information about countries. It fetches data from the [REST Countries API](https://restcountries.com/) and displays various details about the selected country, such as its name, capital, region, population, currency, languages, timezones, and flag.

## Features

-   **Search by Country Name**: Enter the name of a country and retrieve detailed information about it.
-   **Displays Information**: Country name, capital, region, population, currency, languages, timezones, and flag.
-   **Responsive Design**: The application is designed to be responsive and user-friendly.
-   **Glassmorphism UI**: The app uses a modern glassmorphism design for a sleek and polished look.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **Axios**: A promise-based HTTP client for the browser and Node.js, used for making API requests.

## Installation

To run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/country-info-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd country-info-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage

-   Enter the name of a country in the input box.
-   Click the "Search" button or press `Enter`.
-   If the country is found, detailed information about the country will be displayed.
-   If the country is not found, an error message will be shown.

## Project Structure

-   `src/`: Contains the source code for the application.
    -   `App.js`: Main component of the application.
    -   `App.css`: Styles for the application, including the glassmorphism effect.
-   `public/`: Contains static assets and the `index.html` file.
-   `README.md`: This file, which provides an overview of the project.

## Customization

You can customize the look and feel of the application by modifying the `App.css` file. For example, you can adjust the glassmorphism effect by changing the `backdrop-filter`, `background-color`, or `border` properties.

## API Used

Special thanks to the [REST Countries API](https://restcountries.com/) for providing the country data used in this application.
