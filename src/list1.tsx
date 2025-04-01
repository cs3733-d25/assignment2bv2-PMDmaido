import React from "react";
import "./list.css";

const List1: React.FC = () => {
    return (
        <ul className="hobby-list">
            <li className="highlight">Animated Films</li>
            <li>Psychological Thriller</li>
            <li>Sci Fi</li>
            <li>Action</li>
            <li>Slice of Life</li>
        </ul>
    );
};

export default List1;
