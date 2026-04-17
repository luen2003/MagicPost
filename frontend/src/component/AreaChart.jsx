import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tháng 1', uv: 4000, pv: 2400 },
  { name: 'Tháng 2', uv: 3000, pv: 1398 },
  { name: 'Tháng 3', uv: 2000, pv: 9800 },
  { name: 'Tháng 4', uv: 2780, pv: 3908 },
  { name: 'Tháng 5', uv: 1890, pv: 4800 },
  { name: 'Tháng 6', uv: 2390, pv: 3800 },
];

const AreaChartComponent = () => {
  return (
    <div style={{ width: '100%', height: 400, marginTop: '20px' }}>
      <h3>Thống kê lưu lượng</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartComponent;