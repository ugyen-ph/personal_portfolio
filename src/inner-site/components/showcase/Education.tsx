import React, { useState } from 'react';

import ccnaIntroPdf from '../../assets/certificates/ccna-introduction-to-networks.pdf';
import ccnaIntroImg from '../../assets/certificates/ccna-introduction-to-networks.png';

import ccnaSwitchingPdf from '../../assets/certificates/ccna-switching-routing-wireless.pdf';
import ccnaSwitchingImg from '../../assets/certificates/ccna-switching-routing-wireless.png';

import tkinterPdf from '../../assets/certificates/coursera-python-tkinter.pdf';
import tkinterImg from '../../assets/certificates/coursera-python-tkinter.png';

import laravelPdf from '../../assets/certificates/coursera-fullstack-laravel-php.pdf';
import laravelImg from '../../assets/certificates/coursera-fullstack-laravel-php.png';

import linuxPdf from '../../assets/certificates/coursera-linux-server-admin.pdf';
import linuxImg from '../../assets/certificates/coursera-linux-server-admin.png';

export interface EducationProps {}

interface CertificateItem {
    id: string;
    title: string;
    issuer: string;
    organization: string;
    date: string;
    certId?: string;
    verifyUrl?: string;
    pdf: string;
    image: string;
}

const CERTIFICATES: CertificateItem[] = [
    {
        id: 'ccna-intro',
        title: 'CCNA: Introduction to Networks',
        organization: 'Cisco Networking Academy',
        issuer: 'Offered by Jigme Namgyel Engineering College (RUB) • Instructor: Younten Tshering',
        date: '27 Jul 2026',
        certId: '31a4cdde-260f-4a4e-9a4b-f540317e5218',
        pdf: ccnaIntroPdf,
        image: ccnaIntroImg,
    },
    {
        id: 'ccna-switching',
        title: 'CCNA: Switching, Routing, and Wireless Essentials',
        organization: 'Cisco Networking Academy',
        issuer: 'Offered by Jigme Namgyel Engineering College (RUB) • Instructor: Tashi Wangchuk',
        date: '27 Jul 2026',
        certId: 'd44cbe5e-aba9-45a1-a230-2c2dc5801e64',
        pdf: ccnaSwitchingPdf,
        image: ccnaSwitchingImg,
    },
    {
        id: 'laravel-php',
        title: 'Master Full-Stack Web Development with Laravel & PHP',
        organization: 'Board Infinity • Coursera',
        issuer: 'Authorized by Board Infinity, offered through Coursera',
        date: '17 Sep 2026',
        verifyUrl: 'https://coursera.org/verify/3VI5AOS4DC0S',
        pdf: laravelPdf,
        image: laravelImg,
    },
    {
        id: 'python-tkinter',
        title: 'Python Tkinter: Design, Build & Integrate GUIs',
        organization: 'EDUCBA • Coursera',
        issuer: 'Authorized by EDUCBA, offered through Coursera',
        date: '17 Sep 2026',
        verifyUrl: 'https://coursera.org/verify/BPCB7NCBNE38',
        pdf: tkinterPdf,
        image: tkinterImg,
    },
    {
        id: 'linux-admin',
        title: 'Becoming a Linux Server Admin',
        organization: 'Packt • Coursera',
        issuer: 'Authorized by Packt, offered through Coursera',
        date: '27 Sep 2026',
        verifyUrl: 'https://coursera.org/verify/7U4594870GZI',
        pdf: linuxPdf,
        image: linuxImg,
    },
];

const Education: React.FC<EducationProps> = (props) => {
    const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Educational Background</h1>
            <br />

            {/* Formal Education Card */}
            <div className="text-block" style={styles.eduCard}>
                <div style={styles.eduBadgeRow}>
                    <span style={styles.badge}>🎓 FORMAL EDUCATION</span>
                    <span style={styles.statusBadge}>Final Year Student (2024 – Present)</span>
                </div>
                <h2 style={styles.degreeTitle}>
                    Diploma in Computer Systems and Networking
                </h2>
                <h3 style={styles.institution}>
                    Jigme Namgyel Engineering College (JNEC)
                </h3>
                <p style={styles.university}>
                    Royal University of Bhutan • Dewathang, Bhutan
                </p>
                <div style={styles.eduDetails}>
                    <p>
                        Comprehensive engineering program focusing on computer systems architecture, 
                        enterprise networking, data communications, server administration, and 
                        software development.
                    </p>
                </div>
            </div>

            <br />
            <h2 style={{ marginLeft: -16 }}>Certifications & Credentials</h2>
            <p style={{ marginTop: 8, color: '#555' }}>
                Verified industry certifications in computer networking, systems administration, and web development. Click any certificate to inspect or open the official PDF.
            </p>
            <br />

            {/* Certificate Cards Grid */}
            <div style={styles.certGrid}>
                {CERTIFICATES.map((cert) => (
                    <div key={cert.id} style={styles.certCard}>
                        {/* Preview Image */}
                        <div
                            style={styles.imageWrapper}
                            onClick={() => setSelectedCert(cert)}
                            title="Click to zoom in"
                        >
                            <img
                                src={cert.image}
                                alt={cert.title}
                                style={styles.certImage}
                            />
                            <div style={styles.zoomBadge}>🔍 Click to enlarge</div>
                        </div>

                        {/* Certificate Info */}
                        <div style={styles.certInfo}>
                            <span style={styles.orgBadge}>{cert.organization}</span>
                            <h3 style={styles.certTitle}>{cert.title}</h3>
                            <p style={styles.certIssuer}>{cert.issuer}</p>
                            <p style={styles.certDate}>
                                <strong>Date:</strong> {cert.date}
                            </p>
                            {cert.certId && (
                                <p style={styles.certMeta}>
                                    <strong>Cert ID:</strong> <samp>{cert.certId}</samp>
                                </p>
                            )}

                            {/* Actions */}
                            <div style={styles.certActions}>
                                <a
                                    href={cert.pdf}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={styles.btnPrimary}
                                >
                                    📄 Open PDF
                                </a>
                                {cert.verifyUrl && (
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={styles.btnSecondary}
                                    >
                                        🔗 Verify Online
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for viewing certificate image enlarged */}
            {selectedCert && (
                <div
                    style={styles.modalOverlay}
                    onClick={() => setSelectedCert(null)}
                >
                    <div
                        style={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={styles.modalHeader}>
                            <h3>{selectedCert.title}</h3>
                            <button
                                style={styles.closeBtn}
                                onClick={() => setSelectedCert(null)}
                            >
                                ✕ Close
                            </button>
                        </div>
                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            style={styles.modalImage}
                        />
                        <div style={styles.modalFooter}>
                            <a
                                href={selectedCert.pdf}
                                target="_blank"
                                rel="noreferrer"
                                style={styles.btnPrimary}
                            >
                                Download / Open PDF
                            </a>
                            {selectedCert.verifyUrl && (
                                <a
                                    href={selectedCert.verifyUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={styles.btnSecondary}
                                >
                                    Verify on Coursera
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles: StyleSheetCSS = {
    eduCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
        backgroundColor: '#f7f9fc',
        border: '2px solid #551a8b',
        borderRadius: 8,
    },
    eduBadgeRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 8,
    },
    badge: {
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: '#551a8b',
    },
    statusBadge: {
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#444',
        backgroundColor: '#e6eaf0',
        padding: '3px 8px',
        borderRadius: 4,
    },
    degreeTitle: {
        display: 'block',
        fontSize: 24,
        fontWeight: 'bold',
        margin: '6px 0',
        lineHeight: 1.3,
        color: '#111',
    },
    institution: {
        display: 'block',
        fontSize: 18,
        color: '#333',
        margin: '2px 0',
    },
    university: {
        display: 'block',
        fontSize: 14,
        color: '#666',
        margin: '2px 0',
    },
    eduDetails: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 14,
        paddingTop: 12,
        borderTop: '1px solid #ddd',
    },
    certGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
    },
    certCard: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        backgroundColor: '#fff',
        border: '2px solid #ccc',
        borderRadius: 8,
        padding: 16,
        boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
        alignItems: 'center',
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 240px',
        maxWidth: 260,
        cursor: 'pointer',
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid #bbb',
        backgroundColor: '#eee',
    },
    certImage: {
        width: '100%',
        height: 'auto',
        display: 'block',
    },
    zoomBadge: {
        position: 'absolute',
        bottom: 4,
        right: 4,
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: '#fff',
        fontSize: 10,
        padding: '2px 6px',
        borderRadius: 3,
    },
    certInfo: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 260,
    },
    orgBadge: {
        alignSelf: 'flex-start',
        display: 'inline-block',
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        backgroundColor: '#551a8b',
        padding: '2px 8px',
        borderRadius: 3,
        marginBottom: 6,
    },
    certTitle: {
        fontSize: 18,
        margin: '4px 0 6px 0',
        color: '#111',
    },
    certIssuer: {
        fontSize: 13,
        color: '#555',
        marginBottom: 6,
    },
    certDate: {
        fontSize: 13,
        marginBottom: 4,
    },
    certMeta: {
        fontSize: 12,
        color: '#777',
        marginBottom: 10,
        wordBreak: 'break-all',
    },
    certActions: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
        marginTop: 10,
    },
    btnPrimary: {
        display: 'inline-block',
        backgroundColor: '#4598ff',
        color: '#fff',
        padding: '6px 14px',
        borderRadius: 4,
        textDecoration: 'none',
        fontSize: 13,
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    btnSecondary: {
        display: 'inline-block',
        backgroundColor: '#eee',
        color: '#222',
        border: '1px solid #aaa',
        padding: '6px 14px',
        borderRadius: 4,
        textDecoration: 'none',
        fontSize: 13,
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        maxWidth: 800,
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
    },
    modalHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    closeBtn: {
        backgroundColor: '#ff5c5c',
        color: '#fff',
        border: 'none',
        padding: '6px 12px',
        borderRadius: 4,
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    modalImage: {
        width: '100%',
        height: 'auto',
        borderRadius: 4,
        border: '1px solid #ddd',
    },
    modalFooter: {
        display: 'flex',
        flexDirection: 'row',
        gap: 12,
        justifyContent: 'flex-end',
    },
};

export default Education;
