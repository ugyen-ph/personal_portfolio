import React from 'react';
import { Link } from 'react-router-dom';
import aboutMePhoto from '../../assets/pictures/about-me.jpg';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>About Me</h1>
            <h3>I'm Ugyen Phuntsho</h3>
            <br />
            <div className="text-block">
                <p>
                    I am a final-year Diploma student in Computer Systems and
                    Networking at Jigme Namgyel Engineering College (Royal
                    University of Bhutan), based in Thimphu, Bhutan.
                </p>
                <br />
                <p>
                    I have a strong passion for exploring computer networks,
                    Linux server administration, and building full-stack web
                    applications that solve practical real-world problems. My
                    experience spans enterprise routing and switching, Linux
                    systems, and modern web technologies including JavaScript,
                    Python, React, Node.js with Express, PHP/Laravel, and MySQL.
                </p>
            </div>

            <div className="text-block">
                <div>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>What I Do</h3>
                        <br />
                        <p>
                            Whether configuring routers and switches, deploying
                            backend services on Linux servers, or designing
                            user-friendly frontend interfaces, I love
                            understanding how systems work end-to-end — from
                            the physical layer of networking all the way to
                            interactive web interfaces.
                        </p>
                        <br />
                        <p>
                            I am constantly learning, competing in
                            cybersecurity challenges like Capture The Flag
                            (CTF), and building practical software solutions.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img
                            src={aboutMePhoto}
                            style={styles.image}
                            alt="Me, Ugyen Phuntsho"
                        />
                        <p style={{ marginTop: 8 }}>
                            <sub>
                                <b>Figure 1:</b> Me, Ugyen Phuntsho
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer.
                </p>
                <br />
                <p>
                    If you have any questions or comments, I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an
                    email at{' '}
                    <a href="mailto:pugyen82@gmail.com">pugyen82@gmail.com</a>.
                </p>
            </div>

            <div style={styles.buttonRow}>
                <Link
                    to="/skills"
                    className="site-button"
                    style={styles.actionBtn}
                >
                    Technical Skills
                </Link>
                <Link
                    to="/education"
                    className="site-button"
                    style={styles.actionBtn}
                >
                    Education & Certs
                </Link>
                <Link
                    to="/projects"
                    className="site-button"
                    style={styles.actionBtn}
                >
                    Projects
                </Link>
                <Link
                    to="/contact"
                    className="site-button"
                    style={styles.actionBtnPrimary}
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        height: 'auto',
        width: '100%',
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        maxWidth: 240,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
    buttonRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 8,
        marginBottom: 32,
    },
    actionBtn: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: '6px 16px',
        color: '#000',
    },
    actionBtnPrimary: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: '6px 16px',
        color: '#fff',
        backgroundColor: '#4598ff',
    },
};

export default About;
