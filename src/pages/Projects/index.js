import './Project.scss';

function Projects() {
    return (
        <div className="projects__body">
            <div className="projects__body__header">
                <h1>My Projects </h1>
            </div>
            <div className="projects__content">
                <div className="projects__content__item">
                    <h3 className="projects__content__item__title">Web Dark Film</h3>
                    <div className="projects__content__item__content">
                        <li>- Number of member: 4</li>
                        <li>- My position: FE Developer</li>
                        <li>- Technical in use: </li>
                        <li>+ Frontend: HTML, CSS, JavaScript, Bootstrap 5 </li>
                        <li>+ Backend: NodeJS, ExpressJS</li>
                        <li>+ Database: NoSQL (MongoDB)</li>
                        <li className="projects__content__item__has__link">
                            <a
                                className="projects__content__item__link"
                                href="https://github.com/hoanganhnhan/web-film"
                            >
                                Click here
                            </a>
                        </li>
                    </div>
                </div>
                <div className="projects__content__item">
                    <h3 className="projects__content__item__title">Web The Band</h3>
                    <div className="projects__content__item__content">
                        <li>- Personal project</li>
                        <li>- My position: FE Developer</li>
                        <li>- Technical in use: HTML, CSS, JavaScript</li>
                        <li className="projects__content__item__has__link">
                            <a className="projects__content__item__link" href="https://the-band-web.herokuapp.com/">
                                Click here
                            </a>
                        </li>
                    </div>
                </div>
                <div className="projects__content__item projects__content__item__mycv">
                    <h3 className="projects__content__item__title">My CV</h3>
                    <div className="projects__content__item__content">
                        <li>- Personal project</li>
                        <li>- My position: FE Developer</li>
                        <li>- Technical in use: HTML, CSS, JavaScript, ReactJS</li>
                        <li className="projects__content__item__has__link">
                            <a
                                className="projects__content__item__link"
                                href="https://github.com/hoanganhnhan/web-film"
                            >
                                Click here
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
