import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,//x axis
    LinearScale, // y axis
    PointElement
} from "chart.js"

import {Pie} from "react-chartjs-2"

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,//x axis
    LinearScale, // y axis
    PointElement
);

const PieDiagram = ({labels, dataSet}) => {
    const data = {
        labels: labels,
        datasets: dataSet
    }

    const options = {}

    return (
        <div style={
            {
                "padding": "20px",
                "width": "70%"
            }
        }>
            <Pie
                data={data}
                options={options}
            ></Pie>
        </div>

    );
};

export default PieDiagram;