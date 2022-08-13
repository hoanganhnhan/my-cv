import './Sidebar.scss';
// import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { publicRouters } from '../../routes';
import pic from '../../assets/images/chandung.jpg';

// const cx = classNames.bind(styles);

function Siderbar() {
    const [type, setType] = useState('About');
    return (
        <>
            <div className="navbar">
                <ul className="navbar__list">
                    {publicRouters.map((route, index) => {
                        return (
                            <>
                                <li key={index} className="navbar__item">
                                    <Link
                                        to={route.path}
                                        style={
                                            type === route.component.name
                                                ? { backgroundColor: 'var(--primary-color)' }
                                                : {}
                                        }
                                        onClick={() => setType(route.component.name)}
                                    >
                                        {route.component.name}
                                    </Link>
                                </li>
                                {/* <li key={index} className="navbar__item__mobile"></li> */}
                            </>
                        );
                    })}
                </ul>
            </div>
            <label htmlFor="navbar__mobile__input" className="navbar__btn__mobile">
                <i className="navbar__btn__mobile__icon fa-solid fa-bars"></i>
            </label>

            <input type="checkbox" className="navbar__input" id="navbar__mobile__input" />
            <label htmlFor="navbar__mobile__input" className="navbar__overlay"></label>

            <ul className="navbar__list__mobile">
                <label htmlFor="navbar__mobile__input" className="navbar__list__mobile__btn__close">
                    <i className="navbar__list__mobile__btn__close__icon fa-solid fa-xmark"></i>
                </label>
                <div className={'navbar__img__mobile'}>
                    <img src={pic} alt="chandung" />
                </div>
                <li className="navbar__item">
                    <Link to={'/'}>About</Link>
                </li>
                <li className="navbar__item">
                    <Link to={'/education'}>Education</Link>
                </li>
                <li className="navbar__item">
                    <Link to={'/skills'}>Skills</Link>
                </li>
                <li className="navbar__item">
                    <Link to={'/projects'}>Projects</Link>
                </li>
                <li className="navbar__item">
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default Siderbar;
