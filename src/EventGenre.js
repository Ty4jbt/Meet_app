import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {

    const [data, setData] = useState([]);

    const genres = [ 'React', 'JavaScript', 'Node', 'jQuery', 'AngularJS' ];
    const COLORS = ['#71D5D5', '#3789B1', '#5EA6A4', '#5B8FC6', '#383DB1'];


    const getData = () => {
        const data = genres.map(genre => {
            const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
            return {
                name: genre,
                value: value
            };
        });
        return data;
    };

    useEffect(() => { setData(() => getData()) }, [events] );

    return (
        <ResponsiveContainer height={400} >
            <PieChart width='100%' height={400} >
                <Pie
                    data={data}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default EventGenre;