import axios from 'axios';
import { useEffect, useState } from 'react';
import {BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill, BsFillBellFill} from 'react-icons/bs';
import { BarChart, Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,LineChart,Line} from 'recharts';

interface Customer {
  id: number;
}
interface Product{
  id: number;
}
function Dashboard() {

  const [customerCount, setCustomerCount] = useState<number>(0);
  const[productCount,setProductCount] = useState<number>(0)
  useEffect(() => {
    const fetchCustomerCount = async () => {
      try {
        const response = await axios.get<Customer[]>('http://127.0.0.1:8000/customer');
        setCustomerCount(response.data.length);
      } catch (error) {
        console.error('Error fetching customer count:', error);
      }
    };

    fetchCustomerCount();
  }, []);

  // product count
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://127.0.0.1:8000/products');
        setProductCount(response.data.length);
    
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{productCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{customerCount}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' fill='#8884d8' />
            <Bar dataKey='uv' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </main>
  );
}

export default Dashboard;
