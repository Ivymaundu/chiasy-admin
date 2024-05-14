import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import CreateAcount from './pages/CreateAccount';
import Layout from './components/layout';
import Home from './pages/home';
import 'datatables.net-dt/css/dataTables.dataTables.min.css';
import PrivateRoutes from './ProtectedRoutes';
import LineAndBar from './pages/chartsjs';
import SalesTable from './pages/Sales';
import Customer from './pages/Customers';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CreateAcount />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/layout' element={<Layout />}></Route>
        <Route path='/dashboard' element={<Home />}></Route>
        <Route path='/sales' element={ <SalesTable />}/>
        <Route path='/customer' element={ <Customer />}/>

      </Route>
      <Route path='/linebar' element={ <LineAndBar />}/>
    </Routes>
  )

}
export default App