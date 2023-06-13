/* eslint-disable @next/next/no-img-element */
import MainLayout from '../../components/MainLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../styles/universities.module.scss';
// import unikData from '../../data/unik.json';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import ApiClient from '../../api/ApiClient';

export default function Professions() {
	const [search, setSearch] = useState('');
	const [universities, setUniversities] = useState([]);
	// Page routing
	const [currentPage, setCurrentPage] = useState(1);
	const universitiesPerPage = 4;


	useEffect(() => {
		fetchUniversities();
	}, []);

	const fetchUniversities = async () => {
		const response = await ApiClient.getProfessions();
		console.log('Single getProfessions: ', response[0]); // logging single university data
		setUniversities(response);
		console.log('getProfessions: ', response);
	};

	const truncateDescription = (description, maxLength = 125) => {
		if (description.length > maxLength) {
			return description.substring(0, maxLength) + '...';
		} else {
			return description;
		}
	};

	// Filter states
	const [tuitionFilterMin, setTuitionFilterMin] = useState("");
	const [tuitionFilterMax, setTuitionFilterMax] = useState("");
	const [high, setHigh] = useState(true);
	const [medium, setMedium] = useState(true);
	const [low, setLow] = useState(true);

	const displayedUniversities = universities
		.filter((API) => {
			return (
				(search === "" || API.profession_name.toLowerCase().includes(search.toLowerCase()) || API.description.toLowerCase().includes(search.toLowerCase())) &&
				// New filter conditions
				((high && API.demand.toLowerCase() === "high")) ||
				((medium && API.demand.toLowerCase() === "medium")) ||
				((low && API.demand.toLowerCase() === "low")) &&
				(tuitionFilterMin === "" || API.salary_from <= parseInt(tuitionFilterMin)) &&
				(tuitionFilterMax === "" || API.salary_to >= parseInt(tuitionFilterMax))

			);
		})
		.slice((currentPage - 1) * universitiesPerPage, currentPage * universitiesPerPage);

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
							<h3>Demand</h3>
							<div style={{ width: '60%' }}>
								<input
									type="checkbox"
									id="high"
									checked={high}
									onChange={(e) => setHigh(e.target.checked)}
								/>
								<label htmlFor="high">High</label>
							</div>
							<div style={{ width: '60%' }}>
								<input
									type="checkbox"
									id="medium"
									checked={medium}
									onChange={(e) => setMedium(e.target.checked)}
								/>
								<label htmlFor="medium">Medium</label>
							</div>
							<div style={{ width: '60%' }}>
								<input
									type="checkbox"
									id="low"
									checked={low}
									onChange={(e) => setLow(e.target.checked)}
								/>
								<label htmlFor="low">Low</label>
							</div>
						</div>
						<div>
							<h3>Salary range</h3>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<input
									type='number'
									onChange={(e) => {
										setTuitionFilterMin(e.target.value);
										console.log('Min tuition price:', e.target.value);
									}}
									placeholder='Min salary...'
								/>
								<input
									type='number'
									onChange={(e) => {
										setTuitionFilterMax(e.target.value);
										console.log('Max tuition price:', e.target.value);
									}}
									placeholder='Max salary...'
								/>
							</div>
						</div>
					</div>
					<div className={styles.list}>
						{displayedUniversities
							.map((API) => (
								<>
									<div className={styles.item} key={API.id}>
										<div className={styles.image}>
											<img src={API.main_image} alt={API.profession_name} />
										</div>
										<div className={styles.right}>
											<div className={styles.title}>{API.profession_name}</div>
											<div className={styles.description}>{truncateDescription(API.description)}</div>
											<div className={styles.flex}>
												<Link href={`/professions/${API.id}`}>
													<div className={styles.btn}>See more</div>
												</Link>
											</div>
										</div>
									</div>
								</>
							))}
						<div className={styles.buttons}>
							<button onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>Previous</button>
							<button onClick={() => setCurrentPage(currentPage < Math.ceil(universities.length / universitiesPerPage) ? currentPage + 1 : currentPage)}>Next</button>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}
