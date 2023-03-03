/* eslint-disable @next/next/no-img-element */
import styles from '../styles/slider.module.scss';
import { mockAPI } from '../data/mockAPI'
export function Slider() {

    return (
        <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
        >
            <section className={styles.ourPartnersBlock}>
                <div className={styles.ourPartnersGroup}>
                    <div className={styles.logos} >
                        {mockAPI.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}
