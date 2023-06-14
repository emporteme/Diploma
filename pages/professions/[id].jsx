/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import unikData from "../../data/unik.json";
import styles from "../../styles/unikDetails.module.scss"
import ApiClient from '../../api/ApiClient';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import Link from "next/link";


export default function ProfessionsDetails() {
    const router = useRouter();
    const [university, setUniversity] = useState({
        id: 0,
        specialties: [],
        language: [],
        university_name: "",
        short_name: "",
        university_code: "",
        location: "",
        email: "",
        phone_number: "",
        number_of_specialties: 0,
        student_count: 0,
        website: "",
        established_year: 0,
        tuition_price: 0,
        description: "",
        logo: "",
        main_img: "",
        min_unt: 0,
        min_ielts: 0,
        about_university: "",
        accreditation: "",
        latitude: "",
        longitude: "",
        carousel_1: "",
        carousel_2: "",
        carousel_3: "",
        facebook: "",
        instagram: "",
        youtube: "",
    });

    useEffect(() => {
        const { id } = router.query;
        if (typeof id === "string") {
            ApiClient.getProfessions().then(unikData => {
                const universityData = unikData.find(
                    (item) => item.id === parseInt(id)
                );
                if (universityData) {
                    setUniversity(universityData);
                }
            });
        }
    }, [router.query]);


    if (!university) {
        return <div>Loading...</div>;
    }

    return (
        <MainLayout
            title={`UniTree | ${university?.profession_name}`}
            spacing="2vw 5vw"
        >
            <div className={styles.university}>
                <h1>{university.profession_name}</h1>
                <img src={university.main_image} className={styles.logo} alt={styles.main_image} />
                <div className={styles.gallery}>
                    <div className={styles.image}>
                        <img src={university.carousel_1} alt={university.carousel_1} />
                    </div>
                    <div className={styles.image}>
                        <img src={university.carousel_2} alt={university.carousel_2} />
                    </div>
                    <div className={styles.image}>
                        <img src={university.carousel_3} alt={university.carousel_3} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className={styles.navbar} style={{ width: '25%' }}>
                        <ul>
                            <li><a href="#description">Description</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#employment_outlook">Employment outlook</a></li>
                            <li><a href="#Specialities">Specialities</a></li>
                            <li><a href="#skills">Skills</a></li>
                        </ul>
                    </div>
                    <div className={styles.universityDetails} style={{ width: '75%' }}>
                        <p id="description"><strong>Description:</strong> {university.description}</p>
                        <p id="education"><strong>Education:</strong> {university.education}</p>
                        <p id="employment_outlook"><strong>Employment outlook:</strong>{university.employment_outlook}</p>
                        <p id="Specialities"><strong>Specialities:</strong></p>
                        <ul style={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap', flexDirection: 'row', width: '100%', gap: '1rem 0', marginTop: '-1rem' }}>
                            {university.specialties.map((item, index) => (
                                <div key={item.id}>
                                    <Link href={`/specialities/${item.id}`}>
                                        <li className={styles.box} >
                                            <div style={{ textAlign: 'center', marginBottom: '1rem', letterSpacing: '2px' }}>
                                                <b> {item.speciality_name} </b>
                                            </div>
                                            <div>
                                                <b> Speciality code:</b> {item.speciality_code}
                                            </div>
                                            <div>
                                                <b>  UNT Subjects:</b> {item.subject_1}, {item.subject_2}
                                            </div>
                                        </li>
                                    </Link>
                                </div>
                            ))}
                        </ul>
                        <p id="skills"><strong>Skills:</strong> {university.skills}</p>
                    </div>
                </div>
            </div >
        </MainLayout >
    );
}
