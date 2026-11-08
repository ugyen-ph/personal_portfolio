import React, { useState } from 'react';

import firstPlaceImg from '../../assets/certificates/hackathon-college-1st-place.jpg';
import thimphuHackImg from '../../assets/certificates/hackathon-youth-technovation-thimphu.jpg';
import level3Img from '../../assets/certificates/youth-technovation-level3-advanced.jpg';
import collegePartImg from '../../assets/certificates/hackathon-college-participation.jpg';
import ctfImg from '../../assets/certificates/ctf-national-2026-1st-place.jpg';

export interface AchievementsProps {}

interface AchievementCard {
    id: string;
    title: string;
    awardType: string;
    badgeText: string;
    badgeColor: string;
    team?: string;
    placement?: string;
    organizer: string;
    dates: string;
    description: string;
    image: string;
}

const HACKATHONS: AchievementCard[] = [
    {
        id: 'college-hackathon-1st',
        title: 'College Hackathon – 1st Place Winner',
        awardType: 'Certificate of Achievement',
        badgeText: '🏆 1ST PLACE WINNER',
        badgeColor: '#b45309',
        team: '404 Found',
        placement: '1st Place',
        organizer: 'Programme & Youth Coordination Division (MoESD) & Jigme Namgyel Engineering College (RUB), supported by UNICEF Bhutan',
        dates: 'May – June 2026',
        description: 'Secured 1st place with team "404 Found" in the College Hackathon conducted under the Youth Tech-Novation Level III (Advanced) Programme, developing innovative digital technology solutions.',
        image: firstPlaceImg,
    },
    {
        id: 'thimphu-hackathon',
        title: 'Youth Tech-Novation Hackathon (Thimphu)',
        awardType: 'Certificate of Participation',
        badgeText: '🚀 NATIONAL HACKATHON',
        badgeColor: '#1d4ed8',
        organizer: 'Department of Education Programmes, Ministry of Education and Skills Development, with support from UNICEF Bhutan',
        dates: '16 – 18 June 2026',
        description: 'Selected and participated in the intensive 3-day national Youth Tech-Novation Hackathon held in Thimphu, collaborating on technology-driven innovations addressing national development goals.',
        image: thimphuHackImg,
    },
    {
        id: 'level3-advanced',
        title: 'Youth Tech-Novation Level III (Advanced) Programme',
        awardType: 'Certificate of Completion',
        badgeText: '💡 DIGITAL INNOVATION & ENTREPRENEURSHIP',
        badgeColor: '#4338ca',
        organizer: 'Ministry of Education and Skills Development delivered by Jigme Namgyel Engineering College, supported by UNICEF Bhutan',
        dates: 'May – June 2026',
        description: 'Successfully completed the intensive one-month Digital Innovation and Entrepreneurship course covering product design, rapid prototyping, business modeling, and tech pitching.',
        image: level3Img,
    },
    {
        id: 'college-hackathon-part',
        title: 'College Hackathon – Programme Participation',
        awardType: 'Certificate of Participation',
        badgeText: '🤝 PARTICIPATION',
        badgeColor: '#4b5563',
        organizer: 'Jigme Namgyel Engineering College & MoESD, supported by UNICEF Bhutan',
        dates: 'May – June 2026',
        description: 'Certificate recognizing active participation in the College Hackathon series.',
        image: collegePartImg,
    },
];

const Achievements: React.FC<AchievementsProps> = (props) => {
    const [selectedImg, setSelectedImg] = useState<{ title: string; image: string } | null>(null);

    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Achievements & Competitions</h1>
            <br />

            {/* Featured 1st Place Highlight Banner */}
            <div className="text-block" style={styles.featuredBanner}>
                <div style={styles.bannerHeader}>
                    <span style={styles.trophyIcon}>🏆</span>
                    <div style={styles.bannerTitleGroup}>
                        <span style={styles.bannerSubtitle}>HACKATHON SPOTLIGHT</span>
                        <h2 style={styles.bannerTitle}>1st Place Winner — College Hackathon 2026</h2>
                        <p style={styles.bannerTeam}>
                            Team: <strong>404 Found</strong> • Jigme Namgyel Engineering College
                        </p>
                    </div>
                </div>
            </div>

            <br />
            <h2 style={{ marginLeft: -16 }}>Hackathon Credentials & Awards</h2>
            <p style={{ marginTop: 8, color: '#555' }}>
                Official certificates awarded by the Ministry of Education & Skills Development, Jigme Namgyel Engineering College (RUB), and UNICEF Bhutan. Click any certificate to inspect full size.
            </p>
            <br />

            {/* Hackathon Cards Grid */}
            <div style={styles.cardsGrid}>
                {HACKATHONS.map((item) => (
                    <div key={item.id} style={styles.card}>
                        {/* Certificate Image Thumbnail */}
                        <div
                            style={styles.imageWrapper}
                            onClick={() => setSelectedImg({ title: item.title, image: item.image })}
                            title="Click to zoom in"
                        >
                            <img src={item.image} alt={item.title} style={styles.thumbImage} />
                            <div style={styles.zoomBadge}>🔍 Click to enlarge</div>
                        </div>

                        {/* Card Info */}
                        <div style={styles.cardInfo}>
                            <div style={styles.badgeRow}>
                                <span style={Object.assign({}, styles.badge, { backgroundColor: item.badgeColor })}>
                                    {item.badgeText}
                                </span>
                                <span style={styles.awardType}>{item.awardType}</span>
                            </div>

                            <h3 style={styles.cardTitle}>{item.title}</h3>

                            {item.team && (
                                <p style={styles.teamTag}>
                                    <strong>Team:</strong> {item.team} {item.placement && `(${item.placement})`}
                                </p>
                            )}

                            <p style={styles.cardDesc}>{item.description}</p>

                            <div style={styles.metaBox}>
                                <p style={styles.metaLine}>
                                    <strong>Organizers:</strong> {item.organizer}
                                </p>
                                <p style={styles.metaLine}>
                                    <strong>Date:</strong> {item.dates}
                                </p>
                            </div>

                            <div style={styles.actionRow}>
                                <button
                                    style={styles.viewBtn}
                                    onClick={() => setSelectedImg({ title: item.title, image: item.image })}
                                >
                                    🔍 View Full Certificate
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <br />
            {/* Capture The Flag (CTF) Section */}
            <h2 style={{ marginLeft: -16 }}>Cybersecurity &amp; CTF</h2>
            <p style={{ marginTop: 8, color: '#555' }}>
                First place winner in the National CTF-2026 cybersecurity competition organized by BtCIRT &amp; GovTech Bhutan. Click the certificate to view full size.
            </p>
            <br />

            {/* Featured CTF Banner */}
            <div className="text-block" style={styles.ctfFeaturedBanner}>
                <div style={styles.bannerHeader}>
                    <span style={styles.ctfTrophyIcon}>🛡️</span>
                    <div style={styles.bannerTitleGroup}>
                        <span style={styles.ctfBannerSubtitle}>NATIONAL CTF-2026 SPOTLIGHT</span>
                        <h2 style={styles.ctfBannerTitle}>1st Place Winner — National CTF-2026</h2>
                        <p style={styles.bannerTeam}>
                            Organized by <strong>BtCIRT</strong> &amp; <strong>GovTech Bhutan</strong> • Prize: <strong>Nu 7,000/-</strong>
                        </p>
                    </div>
                </div>
            </div>
            <br />

            {/* CTF Certificate Card */}
            <div style={styles.card}>
                <div
                    style={styles.imageWrapper}
                    onClick={() => setSelectedImg({ title: 'National CTF-2026 — 1st Place Winner', image: ctfImg })}
                    title="Click to zoom in"
                >
                    <img src={ctfImg} alt="National CTF-2026 Winner Certificate" style={styles.thumbImage} />
                    <div style={styles.zoomBadge}>🔍 Click to enlarge</div>
                </div>

                <div style={styles.cardInfo}>
                    <div style={styles.badgeRow}>
                        <span style={Object.assign({}, styles.badge, { backgroundColor: '#551a8b' })}>
                            🛡️ 1ST PLACE WINNER
                        </span>
                        <span style={styles.awardType}>Award Cheque / Winner Certificate</span>
                    </div>

                    <h3 style={styles.cardTitle}>National CTF-2026 — 1st Place Winner</h3>

                    <p style={styles.cardDesc}>
                        Secured first place in the National CTF-2026 cybersecurity competition — a Capture The Flag challenge
                        testing expertise in network security, web exploitation, digital forensics, and cryptography on a national stage.
                        Awarded a prize of <strong>Nu 7,000/-</strong> (Seven Thousand Ngultrum).
                    </p>

                    <div style={styles.metaBox}>
                        <p style={styles.metaLine}>
                            <strong>Organizers:</strong> BtCIRT (Bhutan Computer Incident Response Team), GovTech Bhutan, Bhutan NDI (A dhi Company)
                        </p>
                        <p style={styles.metaLine}>
                            <strong>Prize:</strong> Nu 7,000/- (Seven Thousand Only)
                        </p>
                        <p style={styles.metaLine}>
                            <strong>Date:</strong> 17 October 2026
                        </p>
                    </div>

                    <div style={styles.actionRow}>
                        <button
                            style={Object.assign({}, styles.viewBtn, { backgroundColor: '#551a8b' })}
                            onClick={() => setSelectedImg({ title: 'National CTF-2026 — 1st Place Winner', image: ctfImg })}
                        >
                            🛡️ View Full Certificate
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for viewing certificate enlarged */}
            {selectedImg && (
                <div style={styles.modalOverlay} onClick={() => setSelectedImg(null)}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div style={styles.modalHeader}>
                            <h3>{selectedImg.title}</h3>
                            <button style={styles.closeBtn} onClick={() => setSelectedImg(null)}>
                                ✕ Close
                            </button>
                        </div>
                        <img src={selectedImg.image} alt={selectedImg.title} style={styles.modalImage} />
                    </div>
                </div>
            )}
        </div>
    );
};

const styles: StyleSheetCSS = {
    featuredBanner: {
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
        background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
        border: '2px solid #f59e0b',
        borderRadius: 8,
        boxShadow: '3px 3px 0px rgba(245, 158, 11, 0.3)',
    },
    bannerHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },
    trophyIcon: {
        fontSize: 48,
        display: 'block',
    },
    bannerTitleGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    bannerSubtitle: {
        fontSize: 11,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        color: '#b45309',
    },
    bannerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#92400e',
        margin: 0,
    },
    bannerTeam: {
        fontSize: 14,
        color: '#78350f',
        margin: 0,
    },
    cardsGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        backgroundColor: '#fff',
        border: '2px solid #ccc',
        borderRadius: 8,
        padding: 18,
        boxShadow: '2px 2px 0px rgba(0,0,0,0.1)',
        alignItems: 'center',
    },
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 250px',
        maxWidth: 270,
        cursor: 'pointer',
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid #bbb',
        backgroundColor: '#eee',
    },
    thumbImage: {
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
    cardInfo: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        minWidth: 260,
    },
    badgeRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    badge: {
        display: 'inline-block',
        fontSize: 11,
        fontWeight: 'bold',
        color: '#fff',
        padding: '2px 8px',
        borderRadius: 4,
        letterSpacing: 0.5,
    },
    awardType: {
        fontSize: 12,
        color: '#666',
        fontWeight: 'bold',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111',
        margin: '2px 0 6px 0',
    },
    teamTag: {
        fontSize: 13,
        color: '#b45309',
        marginBottom: 6,
    },
    cardDesc: {
        fontSize: 13,
        color: '#333',
        lineHeight: 1.5,
        marginBottom: 8,
    },
    metaBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: '8px 12px',
        backgroundColor: '#f9f9f9',
        borderRadius: 4,
        border: '1px solid #eee',
        marginBottom: 10,
    },
    metaLine: {
        fontSize: 12,
        color: '#555',
        margin: 0,
    },
    actionRow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 6,
    },
    viewBtn: {
        display: 'inline-block',
        backgroundColor: '#4598ff',
        color: '#fff',
        border: 'none',
        padding: '6px 14px',
        borderRadius: 4,
        fontSize: 13,
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    ctfFeaturedBanner: {
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
        border: '2px solid #7c3aed',
        borderRadius: 8,
        boxShadow: '3px 3px 0px rgba(124, 58, 237, 0.3)',
    },
    ctfTrophyIcon: {
        fontSize: 48,
        display: 'block',
    },
    ctfBannerSubtitle: {
        fontSize: 11,
        fontWeight: 'bold',
        letterSpacing: 1.5,
        color: '#6d28d9',
    },
    ctfBannerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#4c1d95',
        margin: 0,
    },
    ctfCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#f7f9fc',
        border: '2px solid #551a8b',
        borderRadius: 8,
    },
    ctfHeader: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 12,
    },
    ctfBadge: {
        display: 'inline-block',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: '#551a8b',
        marginBottom: 6,
    },
    ctfTitle: {
        fontSize: 18,
        margin: '2px 0 6px 0',
    },
    ctfDesc: {
        fontSize: 14,
        color: '#444',
    },
    certFrame: {
        border: '3px dashed #551a8b',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        textAlign: 'center',
        margin: '8px 0',
    },
    certInner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
    },
    certPlaceholderBadge: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#551a8b',
        letterSpacing: 1.2,
    },
    certPlaceholderTitle: {
        fontSize: 16,
        margin: '4px 0',
    },
    certPlaceholderSub: {
        fontSize: 14,
        color: '#333',
    },
    certPlaceholderNote: {
        fontSize: 12,
        color: '#777',
        fontStyle: 'italic',
        marginTop: 4,
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        padding: 20,
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        maxWidth: 900,
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
};

export default Achievements;
