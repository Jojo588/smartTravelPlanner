import { Outlet, Navigate } from 'react-router-dom';
import Header2 from '../components/Header2.js';
import Footer from '../components/Footer.js';

const Layout = ({ handleLogOut, activeNav, subMenu, setSubMenu, isLoggedIn }) => {
  return (
    <div>
      <header>
        <Header2
          handleLogOut={handleLogOut}
          activeNav={activeNav}
          subMenu={subMenu}
          setSubMenu={setSubMenu}
          isLoggedIn={isLoggedIn}
        />
      </header>
      {/* Protect all nested routes inside Layout */}
      {isLoggedIn ? <Outlet /> : <Navigate to="/" replace />}
      <footer>
        <Footer activeNav={activeNav} />
      </footer>
    </div>
  );
};

export default Layout;
