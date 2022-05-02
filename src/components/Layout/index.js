import { Outlet } from 'react-router-dom';
import Header from '../Header/';
import Footer from '../Footer/';
import './index.scss';

const Layout = () => {
  return (
      <div className='container-app'>
        <Header />
        <Outlet/>
        <Footer />
      </div>
  )
}

export default Layout;