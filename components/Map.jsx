import MainLayout from './MainLayout'
import styles from '../styles/map.module.scss'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ZoomControl, AttributionControl, LayersControl, ScaleControl } from 'react-leaflet'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Map({ universities }) {
    const [currentLocation, setCurrentLocation] = useState([51.090991, 71.417755]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCurrentLocation([position.coords.latitude, position.coords.longitude]);
            }, (error) => {
                console.log('Error getting location', error);
            });
        } else {
            console.log("Geolocation is not supported by this browser");
        }
    }, []);
    return (
        <MainLayout spacing='0 5vw'>
            <MapContainer className={styles.map} center={currentLocation} zoom={15} scrollWheelZoom={true} zoomControl={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {universities.map((university) => (
                    <Marker key={university.id} position={[university.latitude, university.longitude]}>
                        <Link href={`/universities/${university.id}`}>
                            <Popup>
                                <div>
                                    <h3>{university.university_name}</h3>
                                    <p>{university.location}</p>
                                </div>
                            </Popup>
                        </Link>
                    </Marker>
                ))}
                <ZoomControl position="topright" />
                <LayersControl />
            </MapContainer>
        </MainLayout>
    )
}
