import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"

import {Pie} from "react-chartjs-2"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const PieDiagram = ({labels, dataSet}) => {
    // const data = {
    //     labels: ["active", "closed", "processing"],
    //     datasets: [
    //         {
    //             data: [1, 2, 3],
    //             backgroundColor: ["green", "blue", "purple"]
    //         }
    //     ]
    // }

    const data = {
        labels: labels,
        datasets:dataSet
    }

    const options = {

    }

    return (
        <div style={
            {
                "padding": "20px",
                // "width": "50%"
            }
        }>
            <Pie
            data = {data}
            options = {options}
            ></Pie>
        </div>

    );
};

export default PieDiagram;