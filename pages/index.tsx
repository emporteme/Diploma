/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// import main components
import Link from 'next/link'
import MainLayout from '../components/MainLayout'
import { FeaturedUniversities } from '../components/FeaturedUniversities'
import News from "../components/News"
import Four from "../components/Four"
import Contacts from "../components/Contacts"
import Pages from "../components/Pages"
// import icons
import { BsArrowRight } from "react-icons/bs"
// import styles
import styles from '../styles/home.module.scss'


export default function HomePage() {
	return (
		<MainLayout spacing='0 5vw'>
			<div className={styles.home}>
				<div className={styles.image}>
					<img src="/main.avif" alt="Photo of girl and guy" />
				</div>
				<div className={styles.info}>
					<div className='mainHeader'>Welcome to <span style={{ color: '#066FCC' }}>UniTree</span></div>
					<div style={{ fontSize: '1.2rem', fontWeight: '500' }}>
						We are always here to provide expert guidance and support in elevating your higher education journey to new heights.
					</div>
					<div style={{ fontSize: '1.2rem', fontWeight: '500' }}>
						Let us help you stay ahead and thrive in today's competitive landscape!
					</div>
					<Link href={'/universities'}>
						<div className={styles.btn}>
							<div>See universities</div>
							<BsArrowRight />
						</div>
					</Link>
				</div>
			</div>
			<Four />
			<News />
			<Pages />
			<Contacts />
			<FeaturedUniversities />
		</MainLayout>
	)
}