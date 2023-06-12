/* eslint-disable @next/next/no-img-element */
import styles from '../styles/four.module.scss';
import { FaGraduationCap, FaHome, FaBookOpen } from 'react-icons/fa'
import { RiEarthFill } from 'react-icons/ri'

export default function Four() {
    return (
        <>
            <div style={{ textAlign: 'center', fontSize: '1.7rem', fontWeight: '600', marginBottom: '2rem' }}>Our features</div>
            <div className={styles.four}>
                <div className={styles.block}>
                    <FaGraduationCap size={50} className={styles.color} />
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }} className={styles.color}>Verified Information</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }} >Trustfully and Verified information on Universities, Specialities and Professions</div>
                </div>
                <div className={styles.block}>
                    <RiEarthFill size={50} className={styles.color} />
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }} className={styles.color}>Free Access</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }}>Explore Universities, Specialities and Professions with Free Access anytime</div>
                </div>
                <div className={styles.block}>
                    <FaHome size={50} className={styles.color} />
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }} className={styles.color}>Hometown</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }} >Discover Top Universites in your City for Quality Education and Academic Excellence</div>
                </div>
                <div className={styles.block}>
                    <FaBookOpen size={50} className={styles.color} />
                    <div style={{ fontSize: '1.2rem', fontWeight: '700' }} className={styles.color}>Wide features</div>
                    <div style={{ fontSize: '1rem', fontWeight: '500' }}>Unnlock a World of Possibilities with an Etensive Range of Fetures in Your Fingertips</div>
                </div>
            </div>
        </>
    )
}