/* eslint-disable @next/next/no-img-element */
import MainLayout from '../../components/MainLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../styles/universities.module.scss';
import unikData from '../../data/unik.json';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


export default function Universities() {
	const [search, setSearch] = useState('');
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites');
		if (storedFavorites) {
			setFavorites(JSON.parse(storedFavorites));
		}
	}, []);

	const addToFavorites = (university) => {
		const newFavorites = [...favorites, university];
		setFavorites(newFavorites);
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
	};

	const removeFromFavorites = (universityId) => {
		const newFavorites = favorites.filter(university => university.pk !== universityId);
		setFavorites(newFavorites);
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
	};

	const isFavorite = (universityId) => {
		return favorites.some(university => university.pk === universityId);
	};

	const truncateDescription = (description, maxLength = 125) => {
		if (description.length > maxLength) {
			return description.substring(0, maxLength) + '...';
		} else {
			return description;
		}
	};

	return (
		<MainLayout spacing='0 5vw'>
			<div className={styles.unik}>
				<div className={styles.search}>
					<input
						type='text'
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Search here...'
					/>
				</div>
				<div className={styles.list}>
					{unikData
						.filter((API) => {
							return (
								API.fields.university_name
									.toLowerCase()
									.includes(search.toLowerCase()) ||
								API.fields.short_name
									.toLowerCase()
									.includes(search.toLowerCase()) ||
								API.fields.description
									.toLowerCase()
									.includes(search.toLowerCase())
							);
						})
						.map((API) => (
							<>
								<div className={styles.item} key={API.pk}>
									<div className={styles.image}>
										<img src={API.fields.logo} alt={API.fields.short_name} />
									</div>
									<div className='mainText'>{API.fields.university_name}</div>
									<div className='subText'>{truncateDescription(API.fields.description)}</div>
									<div className={styles.flex}>
										<Link href={`/universities/${API.pk}`}>
											<div className={styles.btn}>See more</div>
										</Link>
										{isFavorite(API.pk) ? (
											<div onClick={() => removeFromFavorites(API.pk)}>
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
							</>
						))}
				</div>
			</div>
		</MainLayout>
	);
}
