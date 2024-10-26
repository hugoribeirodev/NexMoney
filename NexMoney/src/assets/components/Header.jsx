import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import Logo from '../img/Logo.svg';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Logo NexMoney" className={styles.logo} />
                </div>
                <ul className={styles.navLinks}>
                    <li><Link to="/" className={styles.link}>Página Inicial</Link></li>
                    <li><Link to="/para-voce" className={styles.link}>Para você</Link></li>
                    <li><Link to="/para-seu-negocio" className={styles.link}>Para seu negócio</Link></li>
                    <li><Link to="/nexmoney" className={styles.link}>NexMoney</Link></li>
                </ul>
                <div className={styles.authButtons}>
                    <Link to="/login" className={`${styles.button} ${styles.login}`}>Entrar</Link>
                    <Link to="/cadastro" className={`${styles.button} ${styles.signup}`}>Cadastre-se</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;