import React from "react";
import List2 from "./list2";
import Table2 from "./table2";
import Form2 from "./form2";

const Hobby2: React.FC = () => {
    return (
        <section className="hobby2">
            <h2>Hobby 2: Cello</h2>
            <img src="cello-image.jpg" alt="Cello" />
            <List2 />
            <Table2 />
            <Form2 />
        </section>
    );
};

export default Hobby2;
