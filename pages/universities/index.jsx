/* eslint-disable @next/next/no-img-element */
import MainLayout from '../../components/MainLayout';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/universities.module.scss';
import unikData from '../../data/unik.json';

export default function Universities() {
	const [search, setSearch] = useState('');

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
							<Link href={`/universities/${API.pk}`} key={API.pk}>
								<div className={styles.item}>
									<div className={styles.image}>
										<img src={API.fields.logo} alt={API.fields.short_name} />
									</div>
									<div className='mainText'>{API.fields.university_name}</div>
									<div className='subText'>{truncateDescription(API.fields.description)}</div>
									<div className={styles.flex}>
										<Link href={'/apply'}>
											<div className={styles.btn}>Apply</div>
										</Link>
									</div>
								</div>
							</Link>
						))}
				</div>
			</div>
		</MainLayout>
	);
}
