import { useState } from 'react'
import '../style/Navbar.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Dashboard />
    </div>
  )
}

export default Home