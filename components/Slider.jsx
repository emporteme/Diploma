/* eslint-disable @next/next/no-img-element */
import styles from '../styles/slider.module.scss';
// import { mockAPI } from '../data/mockAPI'
import { useEffect, useState } from 'react';
// import unikData from '../../data/unik.json';
import ApiClient from '@/api/ApiClient';
import Link from 'next/link';


export function Slider() {
    const [universities, setUniversities] = useState([]);

    useEffect(() => {
        fetchUniversities();
    }, []);

    const fetchUniversities = async () => {
        const response = await ApiClient.getUnik();
        console.log('Single university: ', response[0]); // logging single university data
        setUniversities(response);
        console.log('Universities: ', response);
    };

    return (
        <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
        >
            <section className={styles.ourPartnersBlock}>
                <div className={styles.ourPartnersGroup}>
                    <div className={styles.logos} >
                        {universities
                            .map((API) => (
                                <>
                                    <div className={styles.item} key={API.id}>
                                        <div className={styles.image}>
                                            <Link href={`/universities/${API.id}`}>
                                                <img src={API.logo} alt={API.short_name} />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ))}
                        {universities
                            .map((API) => (
                                <>
                                    <div className={styles.item} key={API.id}>
                                        <div className={styles.image}>
                                            <Link href={`/universities/${API.id}`}>
                                                <img src={API.logo} alt={API.short_name} />
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ))}
                    </div>
                </div>

            </section>
        </div>
    );
}
