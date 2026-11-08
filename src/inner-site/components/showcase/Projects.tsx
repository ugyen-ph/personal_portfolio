import React from 'react';

export interface ProjectsProps {}

interface ProjectItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    githubUrl: string;
    liveUrl?: string;
}

const PROJECTS: ProjectItem[] = [
    {
        id: 'ev-hub',
        title: 'EV-Hub (Electric Vehicle Charging Platform)',
        subtitle: 'Full-Stack MERN & Real-Time Station Management System',
        description:
            'A full-stack web application designed for electric vehicle owners and charging station operators. Features interactive Leaflet maps for discovering nearby charging stations, slot reservation & booking, live session status monitoring via WebSockets (Socket.io), and an administrative dashboard to manage station infrastructure and charging logs.',
        tech: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'Socket.io',
            'Leaflet.js',
            'REST API',
        ],
        githubUrl: 'https://github.com/ugyen-ph/ev-hub',
    },
];

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Projects</h1>
            <br />
            <p>
                Here are some of the full-stack and networking projects I have
                built. Click on the GitHub link to inspect the source code and
                architecture.
            </p>
            <br />
            <div style={styles.projectList}>
                {PROJECTS.map((project) => (
                    <div key={project.id} style={styles.projectCard}>
                        <div style={styles.headerRow}>
                            <h2 style={styles.projectTitle}>{project.title}</h2>
                            <span style={styles.categoryBadge}>
                                {project.subtitle}
                            </span>
                        </div>

                        <p style={styles.description}>
                            {project.description}
                        </p>

                        <div style={styles.techRow}>
                            <strong
                                style={{
                                    alignSelf: 'center',
                                    marginRight: 8,
                                    fontSize: 14,
                                }}
                            >
                                Tech:
                            </strong>
                            {project.tech.map((t) => (
                                <span key={t} style={styles.techBadge}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={styles.actionRow}>
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={styles.btnPrimary}
                            >
                                💻 View on GitHub
                            </a>
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={styles.btnSecondary}
                                >
                                    🚀 Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    projectList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        width: '100%',
    },
    projectCard: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        border: '2px solid #ccc',
        borderRadius: 8,
        padding: 24,
        boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
        marginBottom: 16,
    },
    headerRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 12,
        gap: 6,
    },
    projectTitle: {
        fontSize: 26,
        color: '#111',
        margin: 0,
    },
    categoryBadge: {
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#551a8b',
        backgroundColor: '#f0e6ff',
        padding: '3px 10px',
        borderRadius: 4,
    },
    description: {
        fontSize: 16,
        lineHeight: 1.5,
        color: '#333',
        marginBottom: 16,
        textAlign: 'justify',
    },
    techRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 6,
        marginBottom: 20,
    },
    techBadge: {
        display: 'inline-block',
        fontSize: 12,
        backgroundColor: '#eee',
        color: '#333',
        padding: '3px 8px',
        borderRadius: 3,
        border: '1px solid #ddd',
    },
    actionRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
    },
    btnPrimary: {
        display: 'inline-block',
        backgroundColor: '#4598ff',
        color: '#fff',
        padding: '8px 18px',
        borderRadius: 4,
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    btnSecondary: {
        display: 'inline-block',
        backgroundColor: '#eee',
        color: '#222',
        border: '1px solid #aaa',
        padding: '8px 18px',
        borderRadius: 4,
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 'bold',
        cursor: 'pointer',
    },
};

export default Projects;
