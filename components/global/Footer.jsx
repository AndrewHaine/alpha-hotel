import { format } from 'date-fns';
import Link from 'next/link';

import layoutStyles from '@/styles/layout/Layout.module.scss';
import styles from '@/styles/components/Footer.module.scss';
import SocialIcons from './SocialIcons';

const Footer = () => {

    return (
        <footer className={ styles.footer }>
            <div className={ layoutStyles.gsw }>
                <div className={ styles.inner }>
                    <SocialIcons />
                    <div className={ styles.copyright }>
                        <p>&copy; Andrew Haine 1998-{format(new Date(), 'Y')} | <Link href="/privacy">Privacy</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
