import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, } from 'recharts';
const Statistics = () => {

    const totalDonation = useLoaderData()
    const myDonationData = JSON.parse(localStorage.getItem('donated'));
    // setMyDonation(myDonationData)
    const myDonationNumber = myDonationData?.length;
    const totalDonationNumber = totalDonation.length;
    console.log(myDonationNumber + totalDonationNumber)
    const data = [
        { name: 'Total Donation', value: totalDonationNumber },
        { name: 'Your Donation', value: myDonationNumber },
    ];
    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className='flex mt-8 text-center lg:h-screen justify-center items-center'>
            <div className='text-xl font-medium'>
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={200}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className='mt-8 flex justify-center items-center gap-8'>
                    <div className='flex gap-2 justify-center items-center'>
                        <p>Total Donation:</p>
                        <p className='border h-4 w-24 bg-[#FF444A]'></p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                        <p>Your Donation:</p>
                        <p className='border h-4 w-24 bg-[#00C49F]'></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Statistics;