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
                <p><strong>Location:</strong> {university.fields.location}</p>
                <p><strong>Description:</strong> {university.fields.description}</p>
                <p><strong>Website:</strong> <a href={university.fields.website}>{university.fields.website}</a></p>
                <p><strong>Established Year:</strong> {university.fields.established_year}</p>
                <p><strong>Study Type:</strong> {university.fields.study_type.join(", ")}</p>
                <p><strong>Study Language:</strong> {university.fields.study_language.join(", ")}</p>
                <p><strong>Study Year:</strong> {university.fields.study_year.join(", ")}</p>
                <p><strong>Student Count:</strong> {university.fields.student_count}</p>
                <p><strong>Faculty Count:</strong> {university.fields.faculty_count}</p>
                <p><strong>Faculties:</strong> {university.fields.faculty.join(", ")}</p>
                <p><strong>Educational Programs:</strong> {university.fields.edu_programm.join(", ")}</p>
                <p><strong>Email:</strong> {university.fields.email}</p>
                <p><strong>Phone Number:</strong> {university.fields.phone_number.join(", ")}</p>
                <p><strong>Minimum UNT Score:</strong> {university.fields.min_unt}</p>
                <p><strong>Minimum IELTS Score:</strong> {university.fields.min_ielts}</p>
                <p><strong>Tuition Fee:</strong> {university.fields.tuition}</p>
                <p><strong>Admission Criteria:</strong> {university.fields.admission_criteria.join(", ")}</p>
                <p><strong>Dormitory:</strong> {university.fields.dormitory}</p>
                <p><strong>Student Life:</strong> {university.fields.student_life}</p>
                <p><strong>Alumni:</strong></p>
                <ul>
                    {university.fields.alumni.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p><strong>Athletics:</strong> {university.fields.athletics}</p>
                <p><strong>Financial Aid:</strong> {university.fields.financial_aid}</p>
                <p><strong>Required Tests:</strong> {university.fields.required_tests.join(", ")}</p>
                <p><strong>Application Fee:</strong> {university.fields.application_fee}</p>
                <p><strong>Application Deadline:</strong> {university.fields.application_deadline}</p>
                <p><strong>Acceptance Rate:</strong> {university.fields.acceptance_rate}%</p>
                <p><strong>Internship Opportunities:</strong> {university.fields.internship_opportunities}</p>
                <p><strong>Study Abroad Programs:</strong></p>
                <ul>
                    {university.fields.study_abroad_programs.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p><strong>Clubs and Organizations:</strong></p>
                <ul>
                    {university.fields.clubs_and_organizations.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </MainLayout>
    );
}
