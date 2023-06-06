/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import unikData from "../../data/unik.json";
import styles from "../../styles/unikDetails.module.scss"
import ApiClient from '../../api/ApiClient';

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


    if (!university) {
        return <div>Loading...</div>;
    }

    return (
        <MainLayout
            title={`Diploma | ${university?.university_name}`}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div className={styles.navbar} style={{ width: '25%' }}>
                        <ul>
                            <li><a href="#Location">Location</a></li>
                            <li><a href="#Description">Description</a></li>
                            <li><a href="#Website">Website</a></li>
                            <li><a href="#Established_Year">Established Year</a></li>
                            <li><a href="#Type">Study Type</a></li>
                            <li><a href="#Language">Study Language</a></li>
                            <li><a href="#Year">Study Year</a></li>
                            <li><a href="#Student">Student Count</a></li>
                            <li><a href="#Faculty">Faculty Count</a></li>
                            <li><a href="#Faculties">Faculties</a></li>
                            <li><a href="#Programs">Educational Programs</a></li>
                            <li><a href="#Email">Email</a></li>
                            <li><a href="#Phone">Phone Number</a></li>
                            <li><a href="#UNT">Minimum UNT Score</a></li>
                            <li><a href="#IELTS">Minimum IELTS Score</a></li>
                            <li><a href="#Tuition">Tuition Fee</a></li>
                            <li><a href="#Criteria">Admission Criteria</a></li>
                            <li><a href="#Dormitory">Dormitory</a></li>
                            <li><a href="#Life">Student Life</a></li>
                            <li><a href="#Alumni">Alumni</a></li>
                            <li><a href="#Athletics">Athletics</a></li>
                            <li><a href="#Financial">Financial Aid</a></li>
                            <li><a href="#Tests">Required Tests</a></li>
                            <li><a href="#Fee">Application Fee</a></li>
                            <li><a href="#Deadline">Application Deadline</a></li>
                            <li><a href="#Acceptance">Acceptance Rate</a></li>
                            <li><a href="#Internship">Internship Opportunities</a></li>
                            <li><a href="#Abroad">Study Abroad Programs</a></li>
                            <li><a href="#Clubs">Clubs and Organizations</a></li>
                        </ul>
                    </div>
                    <div className={styles.universityDetails} style={{ width: '75%' }}>
                        <p id="Location"><strong>Location:</strong> {university.location}</p>
                        <p id="Description"><strong>Description:</strong> {university.description}</p>
                        <p id="Website"><strong>Website:</strong> <a href={university.website}>{university.website}</a></p>
                        <p id="Established_Year"><strong>Established Year:</strong> {university.established_year}</p>
                        <p id="Language"><strong>Study Language:</strong> {university.language.map(lang => lang.name).join(", ")}</p>
                        {/* <p id="Year"><strong>Study Year:</strong> {university.study_year.join(", ")}</p> */}
                        <p id="Student"><strong>Student Count:</strong> {university.student_count}</p>
                        <p id="Faculty"><strong>Faculty Count:</strong> {university.faculty_count}</p>
                        {/* <p id="Faculties"><strong>Faculties:</strong> {university.faculty.join(", ")}</p> */}
                        {/* <p id="Programs"><strong>Educational Programs:</strong></p>
                        <ul>
                            {university.edu_programm.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> */}
                        <p id="Email"><strong>Email:</strong> {university.email}</p>
                        {/* <p id="Phone"><strong>Phone Number:</strong> {university.phone_number.join(", ")}</p> */}
                        <p id="UNT"><strong>Minimum UNT Score:</strong> {university.min_unt}</p>
                        <p id="IELTS"><strong>Minimum IELTS Score:</strong> {university.min_ielts}</p>
                        <p id="Tuition"><strong>Tuition Fee:</strong> {university.tuition}</p>
                        {/* <p id="Criteria"><strong>Admission Criteria:</strong> {university.admission_criteria.join(", ")}</p> */}
                        <p id="Dormitory"><strong>Dormitory:</strong> {university.dormitory}</p>
                        <p id="Life"><strong>Student Life:</strong> {university.student_life}</p>
                        {/* <p id="Alumni"><strong>Alumni:</strong></p>
                        <ul>
                            {university.alumni.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> */}
                        <p id="Athletics"><strong>Athletics:</strong> {university.athletics}</p>
                        <p id="Financial"><strong>Financial Aid:</strong> {university.financial_aid}</p>
                        {/* <p id="Tests"><strong>Required Tests:</strong> {university.required_tests.join(", ")}</p> */}
                        <p id="Fee"><strong>Application Fee:</strong> {university.application_fee}</p>
                        <p id="Deadline"><strong>Application Deadline:</strong> {university.application_deadline}</p>
                        <p id="Acceptance"><strong>Acceptance Rate:</strong> {university.acceptance_rate}%</p>
                        <p id="Internship"><strong>Internship Opportunities:</strong> {university.internship_opportunities}</p>
                        <p id="Specialities"><strong>Specialities:</strong></p>
                        <ul>
                            {university.specialities.map((item, index) => (
                                <li key={index}>{item.speciality_name}</li>
                            ))}
                        </ul>
                        {/* <p id="Abroad"><strong>Study Abroad Programs:</strong></p>
                        <ul>
                            {university.study_abroad_programs.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> */}
                        {/* <p id="Clubs"><strong>Clubs and Organizations:</strong></p>
                        <ul>
                            {university.clubs_and_organizations.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
