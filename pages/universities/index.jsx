/* eslint-disable @next/next/no-img-element */
import MainLayout from '../../components/MainLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../styles/universities.module.scss';
// import unikData from '../../data/unik.json';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import ApiClient from '../../api/ApiClient';

export default function Universities() {
	const [search, setSearch] = useState('');
	const [favorites, setFavorites] = useState([]);
	const [universities, setUniversities] = useState([]);

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites');
		if (storedFavorites) {
			setFavorites(JSON.parse(storedFavorites));
		}
		fetchUniversities();
	}, []);

	useEffect(() => {
		fetchUniversities();
	}, []);

	const fetchUniversities = async () => {
		const response = await ApiClient.getUnik();
		console.log('Single university: ', response[0]); // logging single university data
		setUniversities(response);
		console.log('Universities: ', response);
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

	const truncateDescription = (description, maxLength = 125) => {
		if (description.length > maxLength) {
			return description.substring(0, maxLength) + '...';
		} else {
			return description;
		}
	};

	// Filter states
	const [yearFilter, setYearFilter] = useState("");
	const [tuitionFilterMin, setTuitionFilterMin] = useState("");
	const [tuitionFilterMax, setTuitionFilterMax] = useState("");
	const [studentCountFilterMin, setStudentCountFilterMin] = useState("");
	const [studentCountFilterMax, setStudentCountFilterMax] = useState("");
	const [englishChecked, setEnglishChecked] = useState(true);
	const [russianChecked, setRussianChecked] = useState(true);
	const [kazakhChecked, setKazakhChecked] = useState(true);


	return (
		<MainLayout spacing='0 5vw'>
			<div className={styles.unik}>
				<div className={styles.search}>
					<input
						type='text'
						onChange={(e) => {
							setSearch(e.target.value);
							console.log('Search:', e.target.value);
						}}
						placeholder='Search here...'
					/>
				</div>
				<div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between', alignItems: 'start', width: '100%' }}>
					<div className={styles.sidebar}>
						<div>
							<h3>Study Language</h3>
							<div style={{ width: '45%' }}>
								<input
									type="checkbox"
									id="english"
									checked={englishChecked}
									onChange={(e) => setEnglishChecked(e.target.checked)}
								/>
								<label htmlFor="english">English</label>
							</div>
							<div style={{ width: '45%' }}>
								<input
									type="checkbox"
									id="russian"
									checked={russianChecked}
									onChange={(e) => setRussianChecked(e.target.checked)}
								/>
								<label htmlFor="russian">Russian</label>
							</div>
							<div style={{ width: '45%' }}>
								<input
									type="checkbox"
									id="kazakh"
									checked={kazakhChecked}
									onChange={(e) => setKazakhChecked(e.target.checked)}
								/>
								<label htmlFor="kazakh">Kazakh</label>
							</div>
						</div>
						<div>
							<h3>Established Year</h3>
							<input
								type='number'
								onChange={(e) => {
									setYearFilter(e.target.value);
									console.log('Year Filter:', e.target.value);
								}}
								placeholder='Filter by year...'
							/>
						</div>
						<div>
							<h3>Tuition Price</h3>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<input
									type='number'
									onChange={(e) => {
										setTuitionFilterMin(e.target.value);
										console.log('Min tuition price:', e.target.value);
									}}
									placeholder='Min tuition price...'
								/>
								<input
									type='number'
									onChange={(e) => {
										setTuitionFilterMax(e.target.value);
										console.log('Max tuition price:', e.target.value);
									}}
									placeholder='Max tuition price...'
								/>
							</div>
						</div>
						<div>
							<h3>Student Count:</h3>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<input
									type='number'
									onChange={(e) => {
										setStudentCountFilterMin(e.target.value);
										console.log('Min student count:', e.target.value);
									}}
									placeholder='Min student count...'
								/>
								<input
									type='number'
									onChange={(e) => {
										setStudentCountFilterMax(e.target.value);
										console.log('Max student count:', e.target.value);
									}}
									placeholder='Max student count...'
								/>
							</div>
						</div>
					</div>
					<div className={styles.list}>
						{universities
							.filter((API) => {
								return (
									(search === "" || API.university_name.toLowerCase().includes(search.toLowerCase()) || API.short_name.toLowerCase().includes(search.toLowerCase()) || API.description.toLowerCase().includes(search.toLowerCase())) &&
									// New filter conditions
									((englishChecked && API.language.some(lang => lang.name.toLowerCase() === "english")) ||
										(russianChecked && API.language.some(lang => lang.name.toLowerCase() === "russian")) ||
										(kazakhChecked && API.language.some(lang => lang.name.toLowerCase() === "kazakh"))) &&
									(yearFilter === "" || API.established_year >= parseInt(yearFilter)) &&
									(tuitionFilterMin === "" || API.tuition_price >= parseInt(tuitionFilterMin)) &&
									(tuitionFilterMax === "" || API.tuition_price <= parseInt(tuitionFilterMax)) &&
									(studentCountFilterMin === "" || API.student_count >= parseInt(studentCountFilterMin)) &&
									(studentCountFilterMax === "" || API.student_count <= parseInt(studentCountFilterMax))
								);
							})
							.map((API) => (
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
			</div>
		</MainLayout>
	);
}
