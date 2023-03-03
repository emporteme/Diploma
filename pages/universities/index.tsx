/* eslint-disable @next/next/no-img-element */
import MainLayout from '../../components/MainLayout'
import Link from 'next/link'
// import styles
import styles from '../../styles/universities.module.scss'
//import API
import { mockAPI } from '../../data/mockAPI'
export default function Universities() {
	return (
		<MainLayout spacing='0 5vw'>
			<div className={styles.unik}>
				<div className={styles.search}>Seacrh bar</div>
				<div className={styles.list}>
					{mockAPI.map((API) => (
						<div className={styles.item} key={API.id}>
							<div className={styles.image}>
								<img src={API.image} alt={API.image} />
							</div>
							<div className="mainText">{API.title}</div>
							<div className="subText">{API.description}</div>
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