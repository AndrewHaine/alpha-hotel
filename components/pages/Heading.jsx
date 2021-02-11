import PropTypes from 'prop-types';
import OpinionatedContaner from '../layout/OpinionatedContainer';

import styles from '@/styles/components/pages/Heading.module.scss';

const Heading = props => {
    const {
        breadcrumbs,
        title
    } = props;

    return (
        <OpinionatedContaner>
            <div className={styles.container}>
                <ul className={styles.breadcrumbs}>
                    {
                        breadcrumbs.map(({ label, href }) => (
                            <li className={styles.crumb} key={href}>
                                <a href={href}>{label}</a>
                            </li>
                        ))
                    }
                </ul>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </OpinionatedContaner>
    );
};

Heading.propTypes = {
    breadcrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            href: PropTypes.string
        })
    ).isRequired,
    title: PropTypes.string.isRequired
}

export default Heading;
