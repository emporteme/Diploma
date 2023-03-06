/* eslint-disable @next/next/no-img-element */
// components imports
import MainLayout from '../../components/MainLayout'
import Link from 'next/link'
import { CheckboxForm } from '../../components/CheckboxForm';
// API imports
//import { mockAPI } from '../../data/mockAPI'
import { mockDATA } from '../../data/MOCK_DATA'
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
					{mockDATA.map((API) => (
						<div key={API.id}>
							<Link href={'/apply'}>
								<div className={styles.ratingUniversity}>
									<div className={styles.ratingNumber}>{API.rating}</div>
									<div className={styles.unikName}>{API.unik_name}</div>
									<div className={styles.unikDescription}>{API.unik_description}</div>
									<div className={styles.unikImg}>
										<img src={API.unik_image} alt={API.unik_name} />
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
