import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./common/Loader";
import axios from "axios";

interface MealDetails {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube: string;
    strTags: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;
    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
}

const MealDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [meal, setMeal] = useState<MealDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((response) => {
                if (response.data.meals) {
                    setMeal(response.data.meals[0]);
                } else {
                    setMeal(null);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching meal details:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div style={styles.loaderContainer}>
                <Loader />
            </div>
        );
    }

    if (!meal) return <p>Meal not found.</p>;

    // Extract ingredients and measurements dynamically
    const ingredients = Array.from({ length: 9 }, (_, i) => ({
        ingredient: meal[`strIngredient${i + 1}` as keyof MealDetails],
        measure: meal[`strMeasure${i + 1}` as keyof MealDetails],
    })).filter((item) => item.ingredient && item.measure);

    return (
        <div style={styles.container}>
            {/* Meal Image and Title */}
            <div style={styles.header}>
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    style={styles.image}
                />
                <h1 style={styles.title}>{meal.strMeal}</h1>
                <p style={styles.subtitle}>
                    <strong>Category:</strong> {meal.strCategory} | <strong>Area:</strong> {meal.strArea}
                </p>
                {meal.strTags && (
                    <p style={styles.tags}>
                        <strong>Tags:</strong> {meal.strTags}
                    </p>
                )}
            </div>

            {/* Ingredients Section */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Ingredients</h2>
                <ul style={styles.ingredientList}>
                    {ingredients.map((item, index) => (
                        <li key={index} style={styles.ingredientItem}>
                            <span style={styles.measure}>{item.measure}</span> {item.ingredient}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Instructions Section */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Instructions</h2>
                <p style={styles.instructions}>{meal.strInstructions}</p>
            </div>

            {/* YouTube Link */}
            {meal.strYoutube && (
                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>Video Tutorial</h2>
                    <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.youtubeLink}
                    >
                        Watch on YouTube
                    </a>
                </div>
            )}
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    loaderContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
    },
    header: {
        textAlign: "center",
        marginBottom: "30px",
    },
    image: {
        margin: 'auto',
        width: "60%",
        height: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "bold",
        color: "#333",
        margin: "20px 0 10px",
    },
    subtitle: {
        fontSize: "1.2rem",
        color: "#555",
        margin: "5px 0",
    },
    tags: {
        fontSize: "1rem",
        color: "#777",
        fontStyle: "italic",
    },
    section: {
        marginBottom: "30px",
    },
    sectionTitle: {
        fontSize: "1.8rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "15px",
        borderBottom: "2px solid #ff6f61",
        paddingBottom: "5px",
    },
    ingredientList: {
        listStyleType: "none",
        padding: 0,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "10px",
    },
    ingredientItem: {
        background: "#fff",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        fontSize: "1rem",
        color: "#555",
    },
    measure: {
        fontWeight: "bold",
        color: "#ff6f61",
    },
    instructions: {
        fontSize: "1rem",
        lineHeight: "1.6",
        color: "#555",
        whiteSpace: "pre-line",
    },
    youtubeLink: {
        display: "inline-block",
        padding: "10px 20px",
        background: "rgb(221 53 36)",
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
        transition: "background 0.3s ease",
    },
};

export default MealDetails;
