import { useNavigate } from 'react-router-dom';
import logo from 'assets/logo.png'; // 이미지 경로에 맞게 수정
import styles from './Footer.module.scss';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles['footer__content--logo']}>
          <img onClick={() => navigate('/')} src={logo} alt="bcadlab logo" />
        </div>
        <div className={styles['footer__content--copyright']}>COPYRIGHT © {new Date().getFullYear()} BCSD LAB. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  );
}

export default Footer;
