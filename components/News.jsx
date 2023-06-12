/* eslint-disable @next/next/no-img-element */
import ApiClient from '../api/ApiClient';
import styles from '../styles/news.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function News() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        const response = await ApiClient.getNews();
        console.log('Single new: ', response[0]); // logging single university data
        setNews(response);
        console.log('News: ', response);
    };

    const [showMore, setShowMore] = useState({});

    return (
        <>
            <div style={{ textAlign: 'center', fontSize: '1.7rem', fontWeight: '600', marginTop: '2rem' }}>News</div>
            <div className={styles.news}>
                {news
                    .map((API) => (
                        <>
                            <div className={styles.item} key={API.id}>
                                <div className={styles.image}>
                                    <img src={API.main_image} alt={API.main_image} />
                                </div>
                                <div className={styles.title}>{API.news_title}</div>
                                <div className={styles.description}>{API.description}</div>
                                {showMore[API.id] ? (
                                    <>
                                        <div className={styles.gallery}>
                                            <img src={API.image_1} alt={API.image_1} />
                                            <img src={API.image_2} alt={API.image_2} />
                                        </div>
                                        <div className={styles.description}>{API.paragraph_1}</div>
                                        <div className={styles.description}>{API.paragraph_2}</div>
                                    </>
                                ) : null}
                                <div className={styles.flex}>
                                    <button className={styles.btn} onClick={() => setShowMore((prev) => ({ ...prev, [API.id]: !prev[API.id] }))}>
                                        {showMore[API.id] ? 'Hide' : 'See more'}
                                    </button>
                                </div>
                            </div>

                        </>
                    ))}
            </div>
        </>
    )
}