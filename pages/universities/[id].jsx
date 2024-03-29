/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import unikData from "../../data/unik.json";
import styles from "../../styles/unikDetails.module.scss"
import ApiClient from '../../api/ApiClient';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import Link from "next/link";


export default function UniversityDetails() {
    const router = useRouter();
    const [university, setUniversity] = useState({
        id: 0,
        specialities: [],
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
            ApiClient.getUnik().then(unikData => {
                const universityData = unikData.find(
                    (item) => item.id === parseInt(id)
                );
                if (universityData) {
                    setUniversity(universityData);
                }
            });
        }
    }, [router.query]);

    useEffect(() => {
        if (university) {
            const emailLink = document.getElementById('emailLink');
            const phoneLink = document.getElementById('phoneLink');

            if (emailLink) {
                emailLink.href = 'mailto:' + university.email;
                emailLink.textContent = university.email;
            }

            if (phoneLink) {
                phoneLink.href = 'tel:' + university.phone_number;
                phoneLink.textContent = university.phone_number;
            }
        }
    }, [university]);

    if (!university) {
        return <div>Loading...</div>;
    }


    return (
        <MainLayout
            title={`UniTree | ${university?.university_name}`}
            spacing="2vw 5vw"
        >
            <div className={styles.university}>
                <h1>{university.university_name}</h1>
                <img src={university.logo} className={styles.logo} alt="University Logo" />
                <h2>{university.short_name}</h2>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
                    <div className={styles.navbar} style={{ width: '25%' }}>
                        <ul>
                            <li><a href="#Location">Location</a></li>
                            <li><a href="#Description">Description</a></li>
                            <li><a href="#Website">Website</a></li>
                            <li><a href="#Specialities">Specialities</a></li>
                            <li><a href="#Links">Links</a></li>
                            <li><a href="#Established_Year">Established Year</a></li>
                            <li><a href="#Type">Study Type</a></li>
                            <li><a href="#Language">Study Language</a></li>
                            <li><a href="#Student">Student Count</a></li>
                            <li><a href="#Email">Email</a></li>
                            <li><a href="#Phone">Phone Number</a></li>
                            <li><a href="#UNT">Minimum UNT Score</a></li>
                            <li><a href="#IELTS">Minimum IELTS Score</a></li>
                            <li><a href="#Tuition">Tuition Fee</a></li>
                            <li><a href="#Dormitory">Dormitory</a></li>
                            <li><a href="#Life">Student Life</a></li>
                        </ul>
                    </div>
                    <div className={styles.universityDetails} style={{ width: '75%' }}>
                        <p id="Location"><strong>Location:</strong> {university.location}</p>
                        <p id="Description"><strong>Description:</strong> {university.about_university}</p>
                        <p id="Website"><strong>Website:</strong> <a href={university.website} target="_blank">{university.website}</a></p>
                        <p id="Specialities"><strong>Specialities:</strong></p>
                        <ul style={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap', flexDirection: 'row', width: '100%', gap: '1rem 0', marginTop: '-1rem' }}>
                            {university.specialities.map((item, index) => (
                                <div key={index}>
                                    <Link href={`/specialities/${item.id}`}>
                                        < li className={styles.box} >
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
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '1rem' }}>
                            <p id="Links"><strong>Social Links:</strong></p>
                            <Link target="_blank" href={`${university.facebook}`}>
                                <AiFillFacebook size={40} />
                            </Link>
                            <Link target="_blank" href={`${university.instagram}`}>
                                <AiFillInstagram size={40} />
                            </Link>
                            <Link target="_blank" href={`${university.youtube}`}>
                                <AiFillYoutube size={40} />
                            </Link>
                        </div>
                        <p id="Established_Year"><strong>Established Year:</strong> {university.established_year}</p>
                        <p id="Language"><strong>Study Language:</strong> {university.language.map(lang => lang.name).join(", ")}</p>
                        <p id="Student"><strong>Student Count:</strong> {university.student_count}</p>
                        <p id="Email"><strong>Email:</strong> <a id="emailLink" href="#">Loading...</a></p>
                        <p id="Phone"><strong>Phone Number:</strong> <a id="phoneLink" href="#">Loading...</a></p>
                        <p id="UNT"><strong>Minimum UNT Score:</strong> {university.min_unt}</p>
                        <p id="IELTS"><strong>Minimum IELTS Score:</strong> {university.min_ielts}</p>
                        <p id="Tuition"><strong>Tuition Fee:</strong> {university.tuition_price} tg</p>
                        <p id="Dormitory"><strong>Dormitory:</strong> {university.dormitory}</p>
                        <p id="Life"><strong>Student Life:</strong> {university.student_life}</p>
                    </div>
                </div>
            </div >
        </MainLayout >
    );
}
