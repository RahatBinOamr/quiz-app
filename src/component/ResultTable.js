import React from 'react';

const ResultTable = ({attempts,earnPoints,flag}) => {
    return (
        <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attemps</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Daily Test</td>
                    <td>{attempts || 0}</td>
                    <td>{earnPoints || 0}</td>
                    <td style={{ color : `${flag ? "black" : "#ff2a66" }` }} className='bold font-bold text-3xl'>{flag ? "Passed" : "Failed"}</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default ResultTable;