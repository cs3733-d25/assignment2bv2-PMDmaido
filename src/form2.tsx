import React, { useState } from "react";

const Form2: React.FC = () => {
    const [formData, setFormData] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Form submitted with data: ${formData}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="hobby2-input">Share your favorite cello piece:</label>
            <input
                type="text"
                id="hobby2-input"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form2;
