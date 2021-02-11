import styles from '@/styles/components/pages/content/ContentContainer.module.scss';

import OpinionatedContaner from "../../layout/OpinionatedContainer";

const ContentContainer = ({ children }) => (
    <OpinionatedContaner>
         <div className={styles.container}>
            { children }
        </div>
    </OpinionatedContaner>
);

export default ContentContainer;
