# Meal Finder App

## Overview
The **Meal Finder App** is a React-based web application that allows users to search for meal recipes and view detailed information about them, including ingredients, preparation instructions, and video tutorials. The app fetches data from the [TheMealDB API](https://www.themealdb.com/).

## Features
- Search for meals by name
- View detailed meal information (ingredients, category, area, instructions, and images)
- Watch video tutorials for meal preparation
- Responsive design for a seamless user experience

## Technologies Used
- **React** (Frontend framework)
- **TypeScript** (For type safety)
- **Axios** (For API requests)
- **React Router** (For navigation)
- **Material UI** (For styling)

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/meal-finder-app.git
   cd meal-finder-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```
   The app will be available at `http://localhost:3000`.

## Project Structure
```
meal-finder-app/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Loader.tsx
│   │   ├── MealDetails.tsx
│   ├── App.tsx
│   ├── index.tsx
├── public/
│   ├── index.html
├── package.json
├── README.md
```

## API Usage
This app uses the [TheMealDB API](https://www.themealdb.com/api.php) to fetch meal details.

- **Fetch meal details by ID:**
  ```sh
  GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal_id}
  ```

## How to Use
1. Search for a meal using the search bar.
2. Click on a meal to view its details.
3. Explore the ingredients and cooking instructions.
4. Watch the YouTube tutorial for step-by-step preparation.

## Future Enhancements
- Add a search bar for meals
- Implement a favorite meals feature
- Enhance UI with more animations and styling

## Contributing
Feel free to fork this repository and contribute to improving the app. Submit a pull request with your changes!

## License
This project is licensed under the **MIT License**.

## Contact
For any questions or suggestions, feel free to reach out:
- GitHub: [Adarsh Rajan](https://github.com/adarshrajan11/)
- Email: rajadarshpk@gmail.com


