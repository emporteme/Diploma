/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import unikData from "../../data/unik.json";
import styles from "../../styles/unikDetails.module.scss"

export default function UniversityDetails() {
    const router = useRouter();
    const [university, setUniversity] = useState({
        pk: 0,
        model: "",
        fields: {
            university_name: "",
            short_name: "",
            location: "",
            latitude: 0,
            longitude: 0,
            description: "",
            website: "",
            logo: "",
            established_year: 0,
            study_type: [],
            study_language: [],
            study_year: [],
            student_count: 0,
            faculty_count: 0,
            faculty: [],
            edu_programm: [],
            email: "",
            phone_number: [],
            min_unt: 0,
            min_ielts: 0,
            tuition: 0,
            admission_criteria: [],
            dormitory: "",
            student_life: "",
            alumni: [],
            athletics: "",
            financial_aid: "",
            required_tests: [],
            application_fee: "",
            application_deadline: "",
            acceptance_rate: "",
            internship_opportunities: "",
            study_abroad_programs: [],
            clubs_and_organizations: [],
            social_media: [],
            accreditation: "",
            source: "",
        },
    });

    useEffect(() => {
        const { id } = router.query;
        if (typeof id === "string") {
            const universityData = unikData.find(
                (item) => item.pk === parseInt(id)
            );
            if (universityData) {
                setUniversity(universityData);
            }
        }
    }, [router.query]);

    if (!university) {
        return <div>Loading...</div>;
    }

    return (
        <MainLayout
            title={`Diploma | ${university?.fields?.university_name}`}
            spacing="2vw 5vw"
        >
            <div className={styles.university}>
                <h1>{university.fields.university_name}</h1>
                <h2>{university.fields.short_name}</h2>
                <img src={university.fields.logo} alt="University Logo" />
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
                        <p id="Location"><strong>Location:</strong> {university.fields.location}</p>
                        <p id="Description"><strong>Description:</strong> {university.fields.description}</p>
                        <p id="Website"><strong>Website:</strong> <a href={university.fields.website}>{university.fields.website}</a></p>
                        <p id="Established_Year"><strong>Established Year:</strong> {university.fields.established_year}</p>
                        <p id="Type"><strong>Study Type:</strong> {university.fields.study_type.join(", ")}</p>
                        <p id="Language"><strong>Study Language:</strong> {university.fields.study_language.join(", ")}</p>
                        <p id="Year"><strong>Study Year:</strong> {university.fields.study_year.join(", ")}</p>
                        <p id="Student"><strong>Student Count:</strong> {university.fields.student_count}</p>
                        <p id="Faculty"><strong>Faculty Count:</strong> {university.fields.faculty_count}</p>
                        <p id="Faculties"><strong>Faculties:</strong> {university.fields.faculty.join(", ")}</p>
                        <p id="Programs"><strong>Educational Programs:</strong></p>
                        <ul>
                            {university.fields.edu_programm.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p id="Email"><strong>Email:</strong> {university.fields.email}</p>
                        <p id="Phone"><strong>Phone Number:</strong> {university.fields.phone_number.join(", ")}</p>
                        <p id="UNT"><strong>Minimum UNT Score:</strong> {university.fields.min_unt}</p>
                        <p id="IELTS"><strong>Minimum IELTS Score:</strong> {university.fields.min_ielts}</p>
                        <p id="Tuition"><strong>Tuition Fee:</strong> {university.fields.tuition}</p>
                        <p id="Criteria"><strong>Admission Criteria:</strong> {university.fields.admission_criteria.join(", ")}</p>
                        <p id="Dormitory"><strong>Dormitory:</strong> {university.fields.dormitory}</p>
                        <p id="Life"><strong>Student Life:</strong> {university.fields.student_life}</p>
                        <p id="Alumni"><strong>Alumni:</strong></p>
                        <ul>
                            {university.fields.alumni.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p id="Athletics"><strong>Athletics:</strong> {university.fields.athletics}</p>
                        <p id="Financial"><strong>Financial Aid:</strong> {university.fields.financial_aid}</p>
                        <p id="Tests"><strong>Required Tests:</strong> {university.fields.required_tests.join(", ")}</p>
                        <p id="Fee"><strong>Application Fee:</strong> {university.fields.application_fee}</p>
                        <p id="Deadline"><strong>Application Deadline:</strong> {university.fields.application_deadline}</p>
                        <p id="Acceptance"><strong>Acceptance Rate:</strong> {university.fields.acceptance_rate}%</p>
                        <p id="Internship"><strong>Internship Opportunities:</strong> {university.fields.internship_opportunities}</p>
                        <p id="Abroad"><strong>Study Abroad Programs:</strong></p>
                        <ul>
                            {university.fields.study_abroad_programs.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p id="Clubs"><strong>Clubs and Organizations:</strong></p>
                        <ul>
                            {university.fields.clubs_and_organizations.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
