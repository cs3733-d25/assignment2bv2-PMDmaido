import React from "react";

const Table1: React.FC = () => {
    return (
        <table className="collapse">
            <thead>
            <tr>
                <th>Title</th>
                <th>Studio / Director</th>
                <th>Genre</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Medalist</td>
                <td>Studio ENGI</td>
                <td>Drama, Sport</td>
            </tr>
            <tr>
                <td>Frieren: Beyond Journey's End</td>
                <td>Studio Madhouse</td>
                <td>Adventure, Fantasy</td>
            </tr>
            <tr>
                <td>Sister Act</td>
                <td>Emile Ardolino</td>
                <td>Music, Comedy</td>
            </tr>
            <tr>
                <td>The Good Place</td>
                <td>Michael Herbert Schur</td>
                <td>Fantasy, Comedy</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table1;
