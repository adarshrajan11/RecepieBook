import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./common/Loader";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

interface MealCategory {
    strCategory: string;
}

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}

const ApiRender: React.FC = () => {
    const [categories, setCategories] = useState<MealCategory[]>([]);
    const [meals, setMeals] = useState<Meal[]>([]);
    const [searcMeals, setSearchMeals] = useState<Meal[]>([]);

    const [selectedCategory, setSelectedCategory] = useState<string | null>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then((response) => {
                setCategories(response.data.meals);
                setLoading(false);
                fetchMeals("Beef");
            })
            .catch((error) => {
                console.error("Error fetching meal categories:", error);
                setLoading(false);
            });
    }, []);

    const fetchMeals = (category: string) => {
        setSelectedCategory(category);
        setLoading(true);
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((response) => {
                setMeals(response.data.meals);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching meals:", error);
                setLoading(false);
            });
    };

    const handleSearch = async (query: string) => {
        if (query.trim() === '') {
            setSearchMeals([]);
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
            );
            setSearchMeals(response.data.meals || []); // Set meals or an empty array if no results
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setLoading(false);
        }
    };
    console.log("search object", searcMeals)

    return (
        <>
            <Navbar onSearch={handleSearch} />
            {searcMeals.length ? (<div style={styles.container}>
                <h1 style={styles.title}>Search Results</h1>
                {loading && <p>Loading...</p>}

                {/* Meals Grid */}
                <div style={styles.mealsGrid}>
                    {searcMeals.map((meal) => (
                        <Link key={meal.idMeal} to={`meal/${meal.idMeal}`} style={{ textDecoration: "none", margin: "10px" }}>
                            <div key={meal.idMeal} style={styles.mealCard}>
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    style={styles.mealImage}
                                />
                                <h3 style={styles.mealName}>{meal.strMeal}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>) : ""
            }
            <div style={styles.container}>
                <h1 style={styles.title}>Meal Categories</h1>
                {loading && <Loader />}

                {/* Categories List */}
                <ul style={styles.categoryList}>
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            style={{
                                ...styles.categoryItem,
                                ...(selectedCategory === category.strCategory ? styles.activeCategory : {}),
                            }}
                            onClick={() => fetchMeals(category.strCategory)}
                        >
                            {category.strCategory}
                        </li>
                    ))}
                </ul>

                {/* Meals Grid */}
                {selectedCategory && (
                    <div style={styles.mealsContainer}>
                        <h2 style={styles.subtitle}>{selectedCategory} Recipes</h2>
                        {loading && <Loader />}
                        <div style={styles.mealsGrid}>
                            {meals.map((meal) => (
                                <Link key={meal.idMeal} to={`meal/${meal.idMeal}`} style={{ textDecoration: "none", margin: "10px" }}>
                                    <div key={meal.idMeal} style={styles.mealCard}>
                                        <img
                                            src={meal.strMealThumb}
                                            alt={meal.strMeal}
                                            style={styles.mealImage}
                                        />
                                        <h3 style={styles.mealName}>{meal.strMeal}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

// Inline styles
const styles = {
    container: {
        padding: "20px",
        textAlign: "center",
        // fontFamily: "'Sigmar', sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
    },
    categoryList: {
        listStyleType: "none",
        padding: 0,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
    },
    categoryItem: {
        background: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontSize: "1.1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.3s ease",
    },
    activeCategory: {
        background: "#ff6f61",
        color: "#fff",
        transform: "scale(1.05)",
    },
    mealsContainer: {
        marginTop: "30px",
    },
    subtitle: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
    },
    mealsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "0 20px",
    },
    mealCard: {
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "transform 0.3s ease",
    },
    mealImage: {
        width: "100%",
        height: "200px",
        objectFit: "cover",
    },
    mealName: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: "#333",
        padding: "10px",
        margin: 0,
    },
};


export default ApiRender;