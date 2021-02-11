import { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from '@/styles/components/Nav.module.scss';

const Nav = ({ items }) => {
    const [ ocOpen, setOcOpen ] = useState(false);

    const handleTriggerClicked = e => {
        e.preventDefault();
        setOcOpen(!ocOpen);
    };

    return (
        <>
            <nav className={classnames(styles.nav, { [styles['nav--open']]: ocOpen })}>
                <ul className={styles.menu}>
                    {
                        items.map(({ href, label }) => (
                            <li key={href} className={styles.item}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <button className={classnames(styles.trigger, { [styles['trigger--open']]: ocOpen })} onClick={handleTriggerClicked}>
                <span></span>
            </button>
        </>
    )
};

Nav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            label: PropTypes.string
        })
    )
};

Nav.defaultProps = {
    items: [
        {
            href: '/work',
            label: 'Work',
        },
        {
            href: '/about',
            label: 'About',
        },
        {
            href: '/blog',
            label: 'Blog',
        },
        {
            href: '/uses',
            label: 'Uses'
        },
        {
            href: '/contact',
            label: 'Contact',
        },
    ]
}

export default Nav;
