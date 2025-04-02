import React from "react";

interface TitleProps {
    teamNumber: string;
    teamHobbies: string;
}

const Title: React.FC<TitleProps> = ({ teamNumber, teamHobbies }) => {
    return (
        <header className="title">
            <h1>Team {teamNumber}: {teamHobbies}</h1>
        </header>
    );
};

export default Title;
