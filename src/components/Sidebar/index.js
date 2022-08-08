import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { publicRouters } from '../../routes';

const cx = classNames.bind(styles);

function Siderbar() {
    const [type, setType] = useState('About');
    return (
        <div className={cx('navbar')}>
            <ul className={cx('navbar__list')}>
                {publicRouters.map((route, index) => {
                    return (
                        <li key={index} className={cx('navbar__item')}>
                            <Link
                                to={route.path}
                                style={type === route.component.name ? { backgroundColor: 'var(--primary-color)' } : {}}
                                onClick={() => setType(route.component.name)}
                            >
                                {route.component.name}
                            </Link>
                        </li>
                    );
                })}
                {/* <li className={cx('navbar__item')}>
                    <Link to={'/'}>About </Link>
                </li>
                <li className={cx('navbar__item')}>
                    <Link to={'/education'}>Education</Link>
                </li>
                <li className={cx('navbar__item')}>
                    <Link to={'/skills'}>Skills</Link>
                </li>
                <li className={cx('navbar__item')}>
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li className={cx('navbar__item')}>
                    <Link to={'/contact'}>Contact</Link>
                </li> */}
            </ul>
        </div>
    );
}

export default Siderbar;
