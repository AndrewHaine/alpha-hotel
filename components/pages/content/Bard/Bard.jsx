import BardBlock from "./BardBlock";

import styles from '@/styles/components/pages/content/Bard.module.scss';

const Bard = ({ content }) => (
    <div className={styles.bard}>
        {
            content.map((block, i) => (
                <BardBlock block={block} key={i} />
            ))
        }
    </div>
);

export default Bard;
