
import { Map } from '@vis.gl/react-google-maps'
import './App.css'

function App() {

  return (
    <>
      <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 23.8041, lng: 90.4152}}
      defaultZoom={10}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
      
    </>
  )
}

export default App
