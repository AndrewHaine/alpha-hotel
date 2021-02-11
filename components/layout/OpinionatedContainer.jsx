import classnames from 'classnames';

import layoutStyles from '@/styles/layout/Layout.module.scss';

const OpinionatedContaner = ({ children }) => (
    <div className={ layoutStyles.gsw }>
        <div className={ layoutStyles.columns }>
            { children }
        </div>
    </div>
);

export default OpinionatedContaner;
