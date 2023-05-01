/* eslint-disable @next/next/no-img-element */
// import main components
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import { FeaturedUniversities } from '../components/FeaturedUniversities'
// import icons
import { BsArrowRight } from "react-icons/bs"
// import styles
import styles from '../styles/home.module.scss'


export default function HomePage() {
	return (
		<MainLayout spacing='0 5vw'>
			<div className={styles.home}>
				<div className={styles.info}>
					<div className='mainHeader'>We Help to <span style={{ color: '#757CFD' }}>Build</span> <br />
						Your Dream
					</div>
					<div style={{ fontSize: '1.2rem', fontWeight: '500' }}>
						We are always availed to consult on taking your higher
						education to the next level so you can stay competitive in
					</div>
					<Link href={'/apply'}>
						<div className={styles.btn}>
							<div className='mainText'>Apply Online </div>
							<BsArrowRight />
						</div>
					</Link>
				</div>
				<div className={styles.image}>
					<img src="/main.svg" alt="Photo of girl and guy" />
				</div>
			</div>
			<FeaturedUniversities />
		</MainLayout>
	)
}