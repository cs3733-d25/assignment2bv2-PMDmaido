import React from "react";

const Form1: React.FC = () => {
        return (
            <form>
                    <br />
                    <br />
                    <label className="label" htmlFor="hobby1-input">Share your favorite movie:</label><br /><br />

                    <label htmlFor="name">Your Name: </label>
                    <input type="text" id="hobby1-input" name="name" className="input" />
                    <br /><br />

                    <label htmlFor="email">Your Email: </label>
                    <input type="text" id="hobby1-input" name="email" className="input" />
                    <br /><br />

                    <p>What genres do you like?</p>
                    <input type="checkbox" id="romance" name="romance" className="checkbox" />
                    <label htmlFor="romance">Romance</label>
                    <br /><br />

                    <input type="checkbox" id="fantasy" name="fantasy" className="checkbox" />
                    <label htmlFor="fantasy">Fantasy</label>
                    <br /><br />

                    <input type="checkbox" id="horror" name="horror" className="checkbox" />
                    <label htmlFor="horror">Horror</label>
                    <br /><br />

                    <input type="checkbox" id="comedy" name="comedy" className="checkbox" />
                    <label htmlFor="comedy">Comedy</label>
                    <br /><br />

                    <input type="checkbox" id="sci-fi" name="sci-fi" className="checkbox" />
                    <label htmlFor="sci-fi">Sci-Fi</label>
                    <br /><br />

                    <input type="checkbox" id="drama" name="drama" className="checkbox" />
                    <label htmlFor="drama">Drama</label>
                    <br /><br />

                    <p>How do you usually watch movies?</p>
                    <input type="radio" id="theater" name="watchstyle" value="theater" className="radio" />
                    <label htmlFor="theater">In Theaters</label><br />

                    <input type="radio" id="streaming" name="watchstyle" value="streaming" className="radio" />
                    <label htmlFor="streaming">Streaming Services</label><br />

                    <input type="radio" id="dvd" name="watchstyle" value="dvd" className="radio" />
                    <label htmlFor="dvd">DVD / Blu-ray</label><br /><br />

                    {/* Textarea for comments */}
                    <label htmlFor="comments">What’s your favorite movie and why?</label>
                    <br />
                    <textarea id="comments" name="comments" rows={4} cols={50} className="textarea" />
                    <br />
                    <br />

                    {/* Dropdown for movie frequency */}
                    <label htmlFor="frequency">How often do you watch movies?</label>
                    <select id="frequency" name="frequency" className="select">
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
