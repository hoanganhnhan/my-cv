// import classNames from 'classnames/bind';
import Sidebar from '../../components/Sidebar';

import './DefaultLayout.scss';
// const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
