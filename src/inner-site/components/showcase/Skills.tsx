import React from 'react';
import { Link } from 'react-router-dom';

export interface SkillsProps {}

const Skills: React.FC<SkillsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Technical Skills</h1>
            <br />

            <div className="text-block">
                <h3>Languages</h3>
                <br />
                <p>Python, JavaScript, PHP, HTML, CSS</p>
            </div>

            <div className="text-block">
                <h3>Frameworks & Libraries</h3>
                <br />
                <p>React, Node.js with Express (MVC pattern), Laravel</p>
            </div>

            <div className="text-block">
                <h3>Databases & Tools</h3>
                <br />
                <p>MySQL, Git, GitHub</p>
            </div>

            <div className="text-block">
                <h3>Systems & Networking</h3>
                <br />
                <p>Linux server administration, Computer Networking fundamentals (CCNA coursework), Routing & Switching</p>
            </div>

            <div className="text-block">
                <h3>Core Concepts</h3>
                <br />
                <p>MVC architecture, full-stack web development, GUI development with Python Tkinter, REST APIs</p>
            </div>

            <br />
            <Link to="/projects" className="big-button-container" style={styles.actionLink}>
                View My Projects
            </Link>
        </div>
    );
};

const styles: StyleSheetCSS = {
    actionLink: {
        display: 'inline-block',
        marginTop: 24,
        padding: '12px 24px',
        backgroundColor: '#4598ff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: 4,
        cursor: 'pointer',
    },
};

export default Skills;
