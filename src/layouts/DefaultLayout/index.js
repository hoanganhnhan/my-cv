import Sidebar from '../../components/Sidebar';
import Stars from '../../components/Stars';

import './DefaultLayout.scss';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="container">
                    <Stars />
                    {children}
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
