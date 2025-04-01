import React, { useState } from "react";

const Form1: React.FC = () => {
    const [formData, setFormData] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Form submitted with data: ${formData}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <br/><br/>
            <label htmlFor="hobby1-input">Share your favorite movie:</label><br/><br/>

            <label htmlFor="name">Your Name: </label>
            <input
                type="text"
                id="hobby1-input"
                name="name"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            /><br/><br/>

            <label htmlFor="email">Your Email: </label>
            <input
                type="text"
                id="hobby1-input"
                name="email"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            /><br/><br/>

            <p>What genres do you like?</p>
            <input
                type="checkbox"
                id="hobby1-input"
                name="romance"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="romance">Romance</label>
            <br/><br/>

            <input
                type="checkbox"
                id="hobby1-input"
                name="fantasy"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="fantasy">Fantasy</label>
            <br/><br/>

            <input
                type="checkbox"
                id="hobby1-input"
                name="horror"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="horror">Horror</label>
            <br/><br/>

            <input
                type="checkbox"
                id="hobby1-input"
                name="comedy"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="comedy">Comedy</label>
            <br/><br/>

            <input
                type="checkbox"
                id="hobby1-input"
                name="sci-fi"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="sci-fi">Sci-Fi</label>
            <br/><br/>

            <input
                type="checkbox"
                id="hobby1-input"
                name="drama"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="drama">Drama</label>
            <br/><br/>

            <p>How do you usually watch movies?</p>
            <input
                type="radio"
                id="theater"
                name="watchstyle"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="theater">In Theaters</label><br/>

            <input
                type="radio"
                id="streaming"
                name="watchstyle"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="streaming">Streaming Services</label><br/>

            <input
                type="radio"
                id="dvd"
                name="watchstyle"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <label htmlFor="dvd">DVD / Blu-ray</label><br/><br/>

            {/* Textarea for comments */}
            <label htmlFor="comments">What’s your favorite movie and why?</label>
            <br />
            <textarea
                id="comments"
                name="comments"
                rows={4}
                cols={50}
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            />
            <br />
            <br />

            {/* Dropdown for movie frequency */}
            <label htmlFor="frequency">How often do you watch movies?</label>
            <select
                id="frequency"
                name="frequency"
                value={formData}
                onChange={(e) => setFormData(e.target.value)}
            >
                <option value="daily">Every day</option>
                <option value="weekly">A few times a week</option>
                <option value="monthly">Occasionally</option>
                <option value="never">What's a movie?</option>
            </select>
            <br />
            <br />

        <button type="submit">Submit</button>
        </form>
    );
};

export default Form1;
