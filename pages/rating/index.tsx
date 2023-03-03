/* eslint-disable @next/next/no-img-element */
// components imports
import MainLayout from '../../components/MainLayout'
import Link from 'next/link'
import { CheckboxForm } from '../../components/CheckboxForm';
// API imports
import { mockAPI } from '../../data/mockAPI'
// style imports
import styles from '../../styles/rating.module.scss'

export default function Rating() {
	const handleFormSubmit = (formData: { accepted: boolean, location: string[] }) => {
		console.log(formData);
	};

	return (
		<MainLayout spacing="0 5vw">
			<div className={styles.flex}>
				<div className={styles.filter}>
					<div className="subHeader">Filter</div>
					<div>
						<CheckboxForm onSubmit={(formData: { accepted: boolean, location: string[] }) => handleFormSubmit(formData)} />
					</div>
				</div>
				<div className={styles.rating}>
					{mockAPI.map((API) => (
						<div key={API.id}>
							<Link href={'/apply'}>
								<div className={styles.ratingUniversity}>
									<div className={styles.ratingNumber}>{API.id}</div>
									<div className={styles.unikName}>{API.title}</div>
									<div className={styles.unikDescription}>{API.description}</div>
									<div className={styles.unikImg}>
										<img src={API.image} alt={API.title} />
									</div>
								</div>
							</Link>

							<div className={styles.line} />
						</div>
					))}
				</div>
			</div>
		</MainLayout>
	);
}
