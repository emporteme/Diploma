/* eslint-disable @next/next/no-img-element */
import MainLayout from '../../components/MainLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../styles/universities.module.scss';
// import unikData from '../../data/unik.json';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import ApiClient from '../../api/ApiClient';

export default function Specialities() {
	const [search, setSearch] = useState('');
	const [universities, setUniversities] = useState([]);
	// Page routing
	const [currentPage, setCurrentPage] = useState(1);
	const universitiesPerPage = 4;

	useEffect(() => {
		fetchUniversities();
	}, []);

	const fetchUniversities = async () => {
		const response = await ApiClient.getSpecialties();
		console.log('Single getSpecialties: ', response[0]); // logging single university data
		setUniversities(response);
		console.log('getSpecialties: ', response);
	};

	const truncateDescription = (description, maxLength = 125) => {
		if (description.length > maxLength) {
			return description.substring(0, maxLength) + '...';
		} else {
			return description;
		}
	};

	// Filter states
	const [speciality_code, setSpeciality_code] = useState("");
	const [sub1, setSub1] = useState("");
	const [sub2, setSub2] = useState("");
	const [tuitionFilterMin, setTuitionFilterMin] = useState("");
	const [tuitionFilterMax, setTuitionFilterMax] = useState("");
	const subjectOptions = [
		{ value: 'biology', label: 'Biology' },
		{ value: 'geography', label: 'Geography' },
		{ value: 'creative exam', label: 'Creative exam' },
		{ value: 'the World History', label: 'The World History' },
		{ value: 'mathematics', label: 'Mathematics' },
		{ value: 'physics', label: 'Physics' },
		{ value: 'informatics', label: 'Informatics' },
		{ value: 'chemistry', label: 'Chemistry' },
		{ value: 'kazakh language', label: 'Kazakh language' },
		{ value: 'kazakh literature', label: 'Kazakh literature' },
		{ value: 'russian language', label: 'Russian language' },
		{ value: 'russian literature', label: 'Russian literature' },
		{ value: 'foreign language', label: 'Foreign language' },
		{ value: 'fundamentals of Law', label: 'Fundamentals of Law' },
	];

	const displayedUniversities = universities
		.filter((API) => {
			return (
				(search === "" || API.speciality_name.toLowerCase().includes(search.toLowerCase()) || API.speciality_code.toLowerCase().includes(search.toLowerCase()) || API.description.toLowerCase().includes(search.toLowerCase())) &&
				// New filter conditions
				(speciality_code === "" || API.speciality_code.toLowerCase().includes(speciality_code.toLowerCase())) &&
				(sub1 === "" || API.subject_1.toLowerCase() === sub1) &&
				(sub2 === "" || API.subject_2.toLowerCase() === sub2) &&
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
							<h3>Speciality code</h3>
							<input
								type='text'
								onChange={(e) => {
									setSpeciality_code(e.target.value);
									console.log('Year Filter:', e.target.value);
								}}
								placeholder='Speciality code'
							/>
						</div>
						<div>
							<h3>UNT subjects</h3>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<select
									value={sub1}
									onChange={(e) => {
										setSub1(e.target.value);
										console.log('Subject 1:', e.target.value);
									}}
								>
									<option value="">Select Subject 1</option>
									{subjectOptions.map((option) => (
										<option key={option.value} value={option.value}>{option.label}</option>
									))}
								</select>

								<select
									value={sub2}
									onChange={(e) => {
										setSub2(e.target.value);
										console.log('Subject 2:', e.target.value);
									}}
								>
									<option value="">Select Subject 2</option>
									{subjectOptions.map((option) => (
										<option key={option.value} value={option.value}>{option.label}</option>
									))}
								</select>
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
											<img src={API.main_image} alt={API.main_image} />
										</div>
										<div className={styles.right}>
											<div className={styles.title}>{API.speciality_name}</div>
											<div className={styles.description}>{truncateDescription(API.description)}</div>
											<div className={styles.flex}>
												<Link href={`specialities/${API.id}`}>
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
