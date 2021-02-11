import Link from 'next/link';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import styles from '@/styles/components/blog/PostPreview.module.scss';

const PostPreview = props => {
    const {
        date,
        title,
        slug,
        tags
    } = props;

    const realDate = new Date(date);

    return (
        <div className={styles.container}>
            <time dateTime={format(realDate, 'c')} className={styles.time}>
                { format(realDate, 'do LLLL y') }
            </time>
            <h3 className={styles.title}>
                <Link href={`/blog/${slug}`}>{ title }</Link>
            </h3>
            <ul className={styles.tags}>
                {
                    tags.map(({ title, slug }) => ( <li key={slug}>{ title }</li> ))
                }
            </ul>
        </div>
    )
};

PostPreview.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
    tags: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            slug: PropTypes.string
        })
    )
};

PostPreview.defaultProps = {
    date: 0,
    title: "",
    slug: "",
    tags: []
}

export default PostPreview;
