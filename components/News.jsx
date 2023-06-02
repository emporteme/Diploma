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

    return (
        <>
            <div style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', marginTop: '2rem' }}>News</div>
            <div className={styles.news}>
                {news
                    .map((API) => (
                        <>
                            <div className={styles.item} key={API.pk}>
                                <div className={styles.image}>
                                    <img src={API.main_image} alt={API.main_image} />
                                </div>
                                <div className={styles.title}>{API.news_title}</div>
                                <div className={styles.description}>{API.description}</div>
                                <div className={styles.flex}>
                                    {/* news folder not created yet */}
                                    <Link href={`/news/${API.id}`}>
                                        <div className={styles.btn}>See more</div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    ))}
            </div>
        </>
    )
}