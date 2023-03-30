/* eslint-disable @next/next/no-img-element */
import MainLayout from '../../components/MainLayout'
import Link from 'next/link'
import { useState } from 'react'
// import styles
import styles from '../../styles/universities.module.scss'
//import API
//import { mockAPI } from '../../data/mockAPI'
import { mockDATA } from '../../data/MOCK_DATA'
export default function Universities() {

	// Code for search
	const [search, setSearch] = useState('')  // Search field
	console.log(search)

	return (
		<MainLayout spacing='0 5vw'>
			<div className={styles.unik}>
				<div className={styles.search}>
					<input
						type="text"
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Search here...' />
				</div>
				<div className={styles.list}>
					{mockDATA.filter((API) => {
						return (
							API
								.unik_name
								.toLowerCase()
								.includes(search.toLowerCase()) ||
							API
								.unik_description
								.toLowerCase()
								.includes(search.toLowerCase())
						)
						{/*search.toLowerCase() === ''
							? API
						: API.unik_name.toLowerCase().includes(search);*/}
					}).map((API) => (
						<div className={styles.item} key={API.id}>
							<div className={styles.image}>
								<img src={API.unik_image} alt={API.unik_image} />
							</div>
							<div className="mainText">{API.unik_name}</div>
							<div className="subText">{API.unik_description}</div>
							<div className={styles.flex}>
								<div className={styles.rating}>Rating: {API.id}</div>
								<Link href={'/apply'}>
									<div className={styles.btn}>Apply</div>
								</Link>
							</div>

						</div>
					))}
				</div>
			</div>
		</MainLayout>
	)
}