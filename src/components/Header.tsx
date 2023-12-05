import styles from './Header.module.css'
import todoLogo from '../assets/Logo.svg'

function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt='to do logo' />
    </header>
  );
}

export default Header;