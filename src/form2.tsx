function Form2(){

    return (
        <form>
            <label htmlFor="firstname">Enter your first name:</label>
            <input type="text" id="firstname"/>
            <br/>
            <label htmlFor="lastname">Enter your last name:</label>
            <input type="text" id="lastname"/>
            <br/>
            <br/>
            <label htmlFor="bg3">Like Baldur's Gate 3?:</label>
            <input type="checkbox" id="bg3"/>

            <br/>

            <label htmlFor="gt">Like Ghost Trick?:</label>
            <input type="checkbox" id="gt"/>

            <br/>

            <label htmlFor="tf2">Like Team Fortress 2?:</label>
            <input type="checkbox" id="tf2"/>

            <br/>
            <br/>

            <label>Have you played all these games?</label><br/>
            <input type="radio" id="yes" name="played_game" value="yes"/>
            <label htmlFor="yes">Yes</label><br/>
            <input type="radio" id="some" name="played_game" value="some"/>
            <label htmlFor="some">Some</label><br/>
            <input type="radio" id="no" name="played_game" value="no"/>
            <label htmlFor="no">No</label><br/>
            <br/>
            <label htmlFor="comments">Comments:</label><br/>
            <textarea id="comments" rows={4} cols={50}></textarea>

            <br/>
            <br/>

            <label htmlFor="scale">On a scale from 1-5, how did you enjoy this form?:</label>
            <select name="scale" id="scale">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>


            <br/>
            <input type="submit" value="Submit"/>

        </form>
    );
};

export default Form2;
