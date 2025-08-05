import { Outlet } from 'react-router-dom';
import Topnav from 'components/common/Topnav';
import Footer from 'components/common/Footer';

function BoardPage() {
  return (
    <>
      <Topnav />
      <Outlet />
      <Footer />
    </>
  )
}

export default BoardPage;
