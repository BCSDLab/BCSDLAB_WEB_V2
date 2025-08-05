import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import styles from './Topnav.module.scss';

function Topnav() {
  const navigate = useNavigate();
  const navMenus = [
    { name: 'About', link: '/about' },
    { name: 'Tracks', link: '/track' },
    { name: 'Activity', link: '/activity' },
    { name: 'Blog', link: '/blog' },
    { name: 'Recruit', link: '/recruit' }
  ]
  const clickMenu = (link: string) => {
    navigate(link);
  }
  return (
    <div className={styles.topnav}>
      <div className={styles.topnav__logo}>
        <img 
          onClick={() => navigate('/') } 
          className={styles['topnav__logo--image']}
          src={logo} 
          alt="bcsdlab logo" />
      </div>
    
      <div className={styles.topnav__menu}>
        {navMenus.map((menu, index) => (
          <div
            key={index}
            className={styles['topnav__menu--item']}
            onClick={() => clickMenu(menu.link)}
          >
            {menu.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Topnav;