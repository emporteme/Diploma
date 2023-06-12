import { Slider } from '../components/Slider'
export function FeaturedUniversities() {
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: '5vh', marginBottom: '2vh', fontSize: '1.7rem', fontWeight: '600', }}>Featured Universities</div>
            <div>
                <Slider />
            </div>
        </>
    )
}