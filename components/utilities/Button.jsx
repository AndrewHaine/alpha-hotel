import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from '@/styles/components/utilities/Button.module.scss';

const WithButton = ({ useButton, children, classNames, href }) => (
    useButton ? <button className={classNames} href={href}>{ children }</button> : <a href={href} className={classNames}>{ children }</a>
)

const Button = props => {
    const {
        solid,
        colour,
        hasArrow,
        useButton,
        label,
        href
    } = props;

    const classNames = classnames(
        styles.btn,
        styles[colour],
        {
            [styles.solid]: solid,
            [styles.hasArrow]: hasArrow
        }
    )

    return (
        <WithButton { ...{classNames, useButton, href} }>
            <span className={styles.label}>{ label }</span>
            {
                hasArrow ? <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 11"><path d="M0 6h22m.043-.056l-5-5m5 5.055l-5 5" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round"/></svg> : null
            }
        </WithButton>
    )
};

Button.propTypes = {
    solid: PropTypes.bool,
    colour: PropTypes.string,
    hasArrow: PropTypes.bool,
    useButton: PropTypes.bool,
    label: PropTypes.string,
    href: PropTypes.string
};

Button.defaultProps = {
    solid: false,
    colour: 'secondary',
    hasArrow: false,
    useButton: false,
    label: '',
    href: ''
};

export default Button;
