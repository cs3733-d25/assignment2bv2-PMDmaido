import React from "react";
import Title from "./title";
import Intro from "./intro";
import Hobby1 from "./hobby1";
import Hobby2 from "./hobby2";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="App">
            <Title teamNumber="41" teamHobbies="Watching movies and Playing video games" />
            <Intro name1="Phuong Mai Do" name2="Caleb Corpuz" />
            <Hobby1 />
            <Hobby2 />
        </div>
    );
};

export default App;
