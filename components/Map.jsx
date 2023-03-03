import MainLayout from './MainLayout'
import styles from '../styles/map.module.scss'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
//import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
//import 'leaflet-defaulticon-compatibility';



export default function Map() {
    return (
        <MainLayout spacing='0 5vw'>
            <MapContainer className={styles.map} center={[51.155578, 71.469551]} zoom={10} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </MainLayout>
    )
}
