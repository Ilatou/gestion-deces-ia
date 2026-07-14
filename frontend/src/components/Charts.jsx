import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

import {
    Bar,
    Pie
} from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);


export function BarChart({ title, labels, data }) {

    const chartData = {
        labels,
        datasets: [
            {
                label: title,
                data,
                backgroundColor: "#1976d2",
            },
        ],
    };


    return (
        <Bar data={chartData}/>
    );
}


export function PieChart({ title, labels, data }) {

    const chartData = {
        labels,
        datasets: [
            {
                label: title,
                data,
                backgroundColor: [
                    "#1976d2",
                    "#dc004e",
                    "#2e7d32",
                    "#ed6c02"
                ],
            },
        ],
    };


    return (
        <Pie data={chartData}/>
    );
}
