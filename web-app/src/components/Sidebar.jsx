/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const data1 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold text-white">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                    </svg>
                                    <span className="text-gray-100">Home</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                                    </svg>
                                    <span className="text-gray-100">Add Transaction</span>
                                </a>
                            </li>
                            <li className="rounded-sm absolute bottom-0">
                                <a href="/" className="flex items-center p-2 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                    </svg>
                                    <span className="text-gray-100">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate text-center">
                            Monthly Salary
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 text-center">
                            $ 12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate text-center">
                            Total Invested
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 text-center">
                            $ 12,00
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate text-center">
                            Total Spent
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 text-center">
                            $ 12,00
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Line options={options} data={data} />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Doughnut data={data1} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
        </div>
    );
}