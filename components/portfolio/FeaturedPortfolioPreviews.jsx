import PropTypes from 'prop-types';

import styles from '@/styles/components/portfolio/FeaturedPortfolioPreviews.module.scss'
import layoutStyles from '@/styles/layout/Layout.module.scss';

const FeaturedPortfolioPreviews = props => {
    const {
        title
    } = props;

    return (
        <div className={ [layoutStyles.section, styles.container].join(' ') }>
            <div className={ layoutStyles.gsw }>
                <div className={ layoutStyles.columns }>
                    <div className={ styles.content }>
                    <h2 className={ [layoutStyles.sectionTitle, styles.title].join(' ') }>{ title }</h2>
                        <div className={ styles.previews }>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

FeaturedPortfolioPreviews.propTypes = {
    title: PropTypes.string
};

FeaturedPortfolioPreviews.defaultProps = {
    title: "A selection of portfolio items"
};

export default FeaturedPortfolioPreviews;
