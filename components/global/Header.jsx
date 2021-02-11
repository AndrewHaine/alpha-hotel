import Nav from './Nav';
import layoutStyles from '@/styles/layout/Layout.module.scss';
import styles from '@/styles/components/Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <div className={layoutStyles.gsw}>
            <div className={styles.inner}>
                <figure className={styles.logo}>
                    <a href="/" className={styles.link}>Andrew Haine</a>
                </figure>
                <div className={styles.nav}>
                    <Nav />
                </div>
            </div>
        </div>
    </header>
);

export default Header;
