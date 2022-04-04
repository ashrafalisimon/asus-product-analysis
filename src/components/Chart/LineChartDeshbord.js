import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hook/useChart';

const LineChartDeshbord = () => {
    const [chardata, setChartdata] = useChart();
    return (
        <div className='md:flex justify-between'>
            <div className='px-4 lg:ml-16 py-12'>
                <LineChart width={600} height={400} data={chardata}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                 <YAxis />
                 <Tooltip />
                 <Legend />
                 <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                 <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className='px-4 py-12'>
            <BarChart width={600} height={400} data={chardata}>
            <Bar dataKey="revenue" fill="#82ca9d" />
            <Bar dataKey="investment" fill="#8884d8" />
            <XAxis dataKey="month"></XAxis>
            <Tooltip />
            <Legend />
            <YAxis></YAxis>
        </BarChart>
            </div>
            
        </div>
    );
};

export default LineChartDeshbord;