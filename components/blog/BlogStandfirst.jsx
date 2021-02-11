import Image from 'next/image';
import classnames from 'classnames';
import { format } from 'date-fns';

import styles from '@/styles/components/pages/content/Standfirst.module.scss';
import PostPreviewStyles from '@/styles/components/blog/PostPreview.module.scss';
import BlogStandfirstStyles from '@/styles/components/blog/BlogStandfirst.module.scss';
import ReactMarkdown from 'react-markdown';

const BlogStandfirst = props => {
    const {
        date,
        tags,
        image,
        standfirst
    } = props;

    return (
        <div className={styles.container}>
            <div className={classnames(styles.content, BlogStandfirstStyles.content)}>
                <div className={BlogStandfirstStyles.top}>
                    <figure className={BlogStandfirstStyles.headshot}>
                        <a href="/">
                            <img src="/graphics/andrew-cutout.png" alt="Andrew Haine"/>
                        </a>
                    </figure>
                    <div className={BlogStandfirstStyles.postInfo}>
                        <time dateTime={format(new Date(date), 'c')} className={BlogStandfirstStyles.date}>
                            { format(new Date(date), 'EEEE do LLLL y') }
                        </time>
                        <span className={BlogStandfirstStyles.byline}>Andrew Haine</span>
                        <ul className={classnames(PostPreviewStyles.tags, BlogStandfirstStyles.tags)}>
                            {
                                tags.map(({ title, slug }) => ( <li key={slug}>{ title }</li> ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={styles.standfirst}>
                    <ReactMarkdown source={standfirst} escapeHtml={false} />
                </div>
            </div>
            {
                image ? <Image src={image.permalink} width={330} height={330} /> : null
            }
        </div>
    )
};

export default BlogStandfirst;
