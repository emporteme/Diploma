/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import MainLayout from '../../components/MainLayout';
import styles from '../../styles/universities.module.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

export default function Favourites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const truncateDescription = (description, maxLength = 125) => {
        if (description && typeof description === 'string' && description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        } else {
            return description || "";  // if description is undefined or null, return an empty string
        }
    };

    const addToFavorites = (university) => {
        const newFavorites = [...favorites, university];
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const removeFromFavorites = (universityId) => {
        const newFavorites = favorites.filter(university => university.id !== universityId);
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const isFavorite = (universityId) => {
        return favorites.some(university => university.id === universityId);
    };

    return (
        <MainLayout>
            <div className={styles.unik}>
                <div className={styles.list}>
                    {favorites.map((API) => (
                        <>
                            <div className={styles.item} key={API.id}>
                                <div className={styles.image}>
                                    <img src={API.logo} alt={API.short_name} />
                                </div>
                                <div className={styles.right}>
                                    <div className={styles.title}>{API.university_name}</div>
                                    <div className={styles.description}>{truncateDescription(API.description)}</div>
                                    <div className={styles.flex}>
                                        <Link href={`/universities/${API.id}`}>
                                            <div className={styles.btn}>See more</div>
                                        </Link>
                                        {isFavorite(API.id) ? (
                                            <div onClick={() => removeFromFavorites(API.id)}>
                                                <AiFillHeart size={20} />
                                            </div>
                                        ) : (
                                            <div onClick={(e) => {
                                                e.preventDefault();
                                                addToFavorites(API);
                                            }}>
                                                <AiOutlineHeart size={20} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}

