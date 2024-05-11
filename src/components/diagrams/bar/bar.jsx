import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,//x axis
    LinearScale, // y axis
    Tooltip,
    Legend
} from "chart.js"

import {Bar} from "react-chartjs-2"

ChartJS.register(
    BarElement,
    CategoryScale,//x axis
    LinearScale, // y axis
    Tooltip,
    Legend
);
const BarDiagram = ( {dataSet}) => {
    // const data = {
    //     labels: ["active", "closed", "processing"],
    //     datasets: [
    //         {
    //             data: [1, 2, 3],
    //             backgroundColor: ["green", "blue", "purple"]
    //         }
    //     ]
    // }

    const data = dataSet

    const options = {}

    return (
        <div style={
            {
                "padding": "20px",
                // "width": "50%"
            }
        }>

            <Bar
                data={data}
                options={options}
            ></Bar>
        </div>
    );
};

export default BarDiagram;