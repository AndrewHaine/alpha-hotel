import styles from '@/styles/components/pages/content/Bard.module.scss';
import ReactMarkdown from 'react-markdown';

const TextBlock = ({ content }) => (
    <div className={styles.textContainer}>
        <ReactMarkdown source={content} escapeHtml={false} />
    </div>
)

export default TextBlock;
