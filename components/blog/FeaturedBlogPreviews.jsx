import PropTypes from 'prop-types';

import styles from '@/styles/components/blog/FeaturedBlogPreviews.module.scss'
import layoutStyles from '@/styles/layout/Layout.module.scss';
import PostPreview from './PostPreview';
import Button from '../utilities/Button';

const FeaturedBlogPreviews = props => {
    const {
        title,
        previews
    } = props;

    return (
        <div className={ [layoutStyles.section, styles.container].join(' ') }>
            <div className={ layoutStyles.gsw }>
                <div className={ layoutStyles.columns }>
                    <div className={ styles.content }>
                        <h2 className={ [layoutStyles.sectionTitle, styles.title].join(' ') }>{ title }</h2>
                        <div className={ styles.previews }>
                            {
                                previews.map(({ title, date, slug, blog_categories, id }) => (
                                    <PostPreview
                                        title={title}
                                        date={date}
                                        slug={slug}
                                        tags={blog_categories}
                                        key={id}
                                    />
                                ))
                            }
                        </div>
                        <div className={ layoutStyles.sectionActions }>
                            <Button label="Read the rest" hasArrow={true} colour="secondary" href='/blog' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

FeaturedBlogPreviews.propTypes = {
    title: PropTypes.string,
    previews: PropTypes.array
};

FeaturedBlogPreviews.defaultProps = {
    title: "Some thoughts from my head",
    previews: []
};

export default FeaturedBlogPreviews;
