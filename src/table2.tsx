import React from "react";

const Table2: React.FC = () => {
    return (
        <table className="hobby-table">
            <thead>
            <tr>
                <th>Activity</th>
                <th>Time Spent</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Classical Music</td>
                <td>3 hours</td>
            </tr>
            <tr>
                <td>Orchestra Performances</td>
                <td>5 hours</td>
            </tr>
            <tr>
                <td>Cello Technique Practice</td>
                <td>4 hours</td>
            </tr>
            </tbody>
        </table>
    );
};

export default Table2;
