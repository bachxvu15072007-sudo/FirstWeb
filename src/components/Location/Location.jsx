import { useMemo } from 'react'
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api'
import { useState } from 'react'
import './Location.css'

const UIT_POSITION = { lat: 10.870231, lng: 106.803082 }
const UIT_ADDRESS = 'Khu phố 6, P. Linh Trung, TP. Thủ Đức, TP.HCM'

/**
 * Location — hiển thị bản đồ Google Maps thật (gọi Maps JavaScript API)
 * đánh dấu vị trí Trường Đại học Công nghệ thông tin - ĐHQG TP.HCM.
 */
export default function Location() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  })

  const [showInfo, setShowInfo] = useState(true)

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      zoomControl: true,
      streetViewControl: false,
    }),
    []
  )

  if (loadError) {
    return <p className="location__error">Không tải được Google Maps. Kiểm tra lại API key.</p>
  }

  if (!isLoaded) {
    return <p className="location__loading mono">// Đang tải bản đồ...</p>
  }

  return (
    <section id="location" className="location">
      <div className="container">
        <span className="section-label"></span>
        <h2 className="location__heading">Trường mình đang học</h2>
        <p className="location__address">{UIT_ADDRESS}</p>

        <div className="location__map-wrap">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '380px' }}
              center={UIT_POSITION}
              zoom={16}
              options={mapOptions}
            >
            <Marker position={UIT_POSITION} onClick={() => setShowInfo(true)}>
              {showInfo && (
                <InfoWindow position={UIT_POSITION} onCloseClick={() => setShowInfo(false)}>
                  <div>
                    <strong>Trường ĐH Công nghệ thông tin - ĐHQG TP.HCM</strong>
                    <p style={{ margin: '4px 0 0' }}>{UIT_ADDRESS}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          </GoogleMap>
        </div>
      </div>
    </section>
  )
}