import PropTypes from 'prop-types';
import styles from '@/styles/components/SocialIcons.module.scss';

const SocialIcons = ({ socials }) => (
    <ul className={styles.icons}>
        {
            socials.map(({ icon, label, href }) => (
                <li key={icon} className={styles.icon}>
                    <figure>
                        <a href={href} title={label} target="_blank" rel="noopener" className={styles.link}>
                            <img src={`/icons/socials/${icon}.svg`} alt={label} width={20} height={20} />
                        </a>
                    </figure>
                </li>
            ))
        }
    </ul>
);

SocialIcons.propTypes = {
    socials: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            label: PropTypes.string,
            href: PropTypes.string
        })
    )
}

SocialIcons.defaultProps = {
    socials: [
        {
            icon: "twitter",
            label: "Follow me on Twitter",
            href: "https://twitter.com/andrew_haine",
        },
        {
            icon: "github",
            label: "Take a look at my GitHub page",
            href: "https://github.com/andrewhaine",
        },
        {
            icon: "instagram",
            label: "Follow me on Instagram",
            href: "https://www.instagram.com/andrew_haine"
        },
        {
            icon: "codepen",
            label: "Occasionally I have a play on Codepen",
            href: "https://codepen.io/Andrew_Haine"
        },
        {
            icon: "linkedin",
            label: "Let's connect on LinkedIn",
            href: "https://www.linkedin.com/in/andrew-haine"
        }
    ]
}

export default SocialIcons;
