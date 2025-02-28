import React from 'react';

interface Props {
    num1: number,
    num2: number
}
const TestComponent = (props: Props) => {
    const fruits = ["apple", "pine", "Sweet corn", "Coco"];

    const clickme = () => {
        console.log("you clicked");
    };
    console.log(props.num1 + props.num2)

    return (
        <div>
            <button onClick={clickme}>click me</button>
            {fruits.length > 0 ? (
                <ul>
                    {fruits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Nothing in the list</p>
            )}
        </div>
    );
};

export default TestComponent;