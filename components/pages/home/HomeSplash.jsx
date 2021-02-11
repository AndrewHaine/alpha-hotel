import ReactHtmlParser from 'react-html-parser';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

import layoutStyles from '@/styles/layout/Layout.module.scss';
import styles from '@/styles/components/pages/home/HomeSplash.module.scss';

const HomeDots = dynamic(
    () => import('./HomeDots'),
    { ssr: false }
);

const HomeSplash = (props) => {
    const {
        title,
        content,
        image
    } = props;

    return (
        <div className={styles.container}>
            <HomeDots />
            <div className={layoutStyles.gsw}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h1>{ ReactHtmlParser(title) }</h1>
                        <div className={styles.intro}>
                            { ReactHtmlParser(content) }
                        </div>
                    </div>
                    <div className={styles.right}>
                        <figure className={styles.head}>
                            <img src={image} alt="Me"/>
                            <figcaption className={styles.headcap}>Look, it's my face!</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
};

HomeSplash.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string
};

HomeSplash.defaultProps = {
    title: "",
    content: "",
    image: "/graphics/andrew-cutout.png"
}

export default HomeSplash;
