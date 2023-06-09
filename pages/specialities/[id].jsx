/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import unikData from "../../data/unik.json";
import styles from "../../styles/unikDetails.module.scss"
import ApiClient from '../../api/ApiClient';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import Link from "next/link";


export default function SpecialitiesDetails() {
    const router = useRouter();
    const [university, setUniversity] = useState({
        id: 0,
        universities: [],
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
            ApiClient.getSpecialties().then(unikData => {
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
            title={`Diploma | ${university?.university_name}`}
            spacing="2vw 5vw"
        >
            <div className={styles.university}>
                <h1>{university.speciality_name}</h1>
                <img src={university.main_image} className={styles.logo} alt={university.main_image} />
                <h2>{university.speciality_code}</h2>
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
                            <li><a href="#Description">Description</a></li>
                            <li><a href="#Specialities">Universities</a></li>
                            <li><a href="#Phone">Subject 1</a></li>
                            <li><a href="#Phone2">Subject 2</a></li>
                            <li><a href="#Phone3">Job outlook</a></li>
                            <li><a href="#Phone4">Salary range</a></li>
                        </ul>
                    </div>
                    <div className={styles.universityDetails} style={{ width: '75%' }}>
                        <p id="Description"><strong>Description:</strong> {university.description}</p>
                        <p id="Specialities"><strong>Universities:</strong></p>
                        <ul style={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap', flexDirection: 'row', width: '100%', gap: '1rem 0', marginTop: '-1rem' }}>
                            {university.universities.map((item, index) => (
                                <div key={item.id}>
                                    <Link href={`/universities/${item.id}`}>
                                        < li className={styles.box} >
                                            <div style={{ textAlign: 'center', marginBottom: '1rem', letterSpacing: '2px' }}>
                                                <b> {item.university_name} </b>
                                            </div>
                                            <div>
                                                <b> University code:</b> {item.university_code}
                                            </div>
                                            <div>
                                                <b> Short name:</b> {item.short_name}
                                            </div>
                                        </li>
                                    </Link>
                                </div>
                            ))}
                        </ul>
                        <p id="Phone"><strong>Subject 1:</strong> {university.subject_1}</p>
                        <p id="Phone2"><strong>Subject 2:</strong> {university.subject_2}</p>
                        <p id="Phone3"><strong>Job outlook:</strong> {university.job_outlook}</p>
                        <p id="Phone4"><strong>Salary range:</strong> {university.salary_range}</p>
                    </div>
                </div>
            </div >
        </MainLayout >
    );
}
