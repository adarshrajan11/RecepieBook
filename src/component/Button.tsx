
// import React from 'react';

// interface ButtonProps {
//     children: string;
//     onClick?: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
//     return (
//         <button
//             className="button"
//             onClick={onClick}
//         >
//             {children}
//         </button>
//     );
// };

// export default Button;

interface ButtonProps {
    content: string | null;
    icon?: string | null;
    type?: "button" | "submit" | "reset";
    severity?: "primary" | "secondary" | "danger";
}

function Button(props: ButtonProps) {

    return (
        <button
            type={props.type ? "button" : props.type}
            className="bg-blue-500 p-2 rounded text-white">
            {props.content}
        </button>
    )
}

export default Button;