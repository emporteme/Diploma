import { Slider } from '../components/Slider'
export function FeaturedUniversities() {
    return (
        <>
            <div className="subHeader" style={{ fontWeight: '300', textAlign: 'center',marginTop:'5vh',marginBottom:'2vh' }}>FEATURED UNIVERSITIES</div>
            <div>
                <Slider />
            </div>
        </>
    )
}