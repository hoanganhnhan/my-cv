import './Home.scss';
function About() {
    return (
        <div className="about">
            <h1 className="about__name">
                <span>Hi! I'm </span>
                <span className="fullname">Hoang Anh Nhan</span>
            </h1>
            <p className="about__intro">
                An enthusiastic and passionate individual with basic technology knowledge seeking an entry-level
                position focusing in the IT that my skills, abilities and knowledge can be utilized for the company, as
                well as giving me opportunities to develop professionally.
            </p>
            <div className="info">
                <ul className="info__list">
                    <li>
                        <span className="info1__title">Age: </span>
                        <span>21</span>
                    </li>
                    <li>
                        <span className="info1__title">Gender: </span>
                        <span>Female</span>
                    </li>
                    <li>
                        <span className="info1__title">Work: </span>
                        <span>Front-End Developer</span>
                    </li>
                </ul>
                <ul className="info__list">
                    <li>
                        <span className="info1__title">Phone: </span>
                        <span>0385 147 872</span>
                    </li>
                    <li>
                        <span className="info1__title">Email: </span>
                        <span>nhananhhg@gmail.com</span>
                    </li>
                    <li>
                        <span className="info1__title">Address: </span>
                        <span>Ho Chi Minh City, Viet Nam</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
