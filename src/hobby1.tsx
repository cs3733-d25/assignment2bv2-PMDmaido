import React from "react";
import List1 from "./list1";
import Table1 from "./table1";
import Form1 from "./form1";

const Hobby1: React.FC = () => {
    return (
        <section className="hobby1">
            <h2>Hobby 1: Watching movies</h2>
            <img src="/assets/movie.jpg" alt="Watching movies" width={640} />
            <List1 />
            <Table1 />
            <Form1 />
        </section>
    );
};

export default Hobby1;
