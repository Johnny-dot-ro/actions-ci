import { BarChart } from '@mui/x-charts/BarChart';
import React from "react";

const MyBar = () => {
    return (
        <BarChart
            xAxis={[
                {
                    id: 'barCategories',
                    data: ['bar A', 'bar B', 'bar C'],
                },
            ]}
            series={[
                {
                    data: [2, 5, 3],
                },
            ]}
            height={300}
        />
    );
}

export default MyBar;