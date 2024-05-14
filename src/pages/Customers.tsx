import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';
import React, { useState, useEffect, useRef } from 'react';

interface Customer {
  id: number;
  user_name: string;
  user_email: number;
  user_contact: number;
}

const Customer: React.FC = () => {
  const [customers, setCustomer] = useState<Customer[]>([]);
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Customer[]>('http://127.0.0.1:8000/customer');
        setCustomer(response.data);
        $(tableRef.current!).DataTable(); 
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container3">
      <h2 className="mt-3">Products</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered" ref={tableRef} style={{height:'auto'}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>email</th>
              <th>phone number</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.user_name}</td>
                <td>{customer.user_email}</td>
                <td>{customer.user_contact}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;