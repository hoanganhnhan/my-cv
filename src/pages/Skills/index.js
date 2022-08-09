import './Skills.scss';

function Skills() {
    return (
        <div className="skills__body">
            <div className="skills__body__header">
                <h1>Skills </h1>
            </div>
            <div className="skills__content">
                <div className="skills__content__list">
                    <h3>Technical Skills</h3>
                    <div className="skills__content__list__items">
                        <ul className="skills__content__list__items__main">
                            <span>Main</span>
                            <li className="skills__content__item__list">
                                <i className="icon__check fa-solid fa-circle-check"></i> HTML, CSS, JavaScript
                            </li>
                            <li className="skills__content__item__list">
                                <i className="icon__check fa-solid fa-circle-check"></i> ReactJS
                            </li>
                            <li className="skills__content__item__list">
                                <i className="icon__check fa-solid fa-circle-check"></i> GIT
                            </li>
                            <li className="skills__content__item__list">
                                <i className="icon__check fa-solid fa-circle-check"></i> Linux (Ubuntu, Kali, CentOS 7)
                            </li>
                            <li className="skills__content__item__list">
                                <i className="icon__check fa-solid fa-circle-check"></i> Windows
                            </li>
                        </ul>
                        <ul className="skills__content__list__items__main">
                            <span>Other</span>
                            <li className="skills__content__item__list">
                                <i className="icon__check fa-solid fa-circle-check"></i> Python, Java, C/C++
                            </li>
                            <li className="skills__content__item__list">
                                <i className="icon__check fa-solid fa-circle-check"></i> SQL Server, NoSQL, JSON, API
                            </li>
                            <li className="skills__content__item__list">
                                <i className="icon__check fa-solid fa-circle-check"></i> Server (Ngrok, Nginx, Apache)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="skills__content__list">
                    <h3>Soft skills</h3>
                    <ul className="skills__content__list__items soft__skills">
                        <li className="skills__content__item__list">
                            <i className="icon__check fa-solid fa-circle-check"></i> Time management
                        </li>
                        <li className="skills__content__item__list">
                            <i className="icon__check fa-solid fa-circle-check"></i> Attention to details
                        </li>
                        <li className="skills__content__item__list">
                            <i className="icon__check fa-solid fa-circle-check"></i> Problem solving
                        </li>
                        <li className="skills__content__item__list">
                            <i className="icon__check fa-solid fa-circle-check"></i> Teamwork
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Skills;
