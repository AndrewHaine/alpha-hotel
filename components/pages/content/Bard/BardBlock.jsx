import TextBlock from './components/TextBlock';
import CodeBlock from './components/CodeBlock';

import styles from '@/styles/components/pages/content/Bard.module.scss';

const BardBlock = ({ block }) => {

    let child = <></>;

    switch(block.type) {
        case "text":
            child = <TextBlock content={block.text} />
            break;
        case "code_block":
            child = <CodeBlock code={block.code} language={block.language_format} />
            break;
        default:
            child = <TextBlock content={block.text} />
    }

    return (
        <div className={styles.block}>
            { child }
        </div>
    )
};

export default BardBlock;
