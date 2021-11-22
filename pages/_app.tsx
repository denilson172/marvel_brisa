import React from 'react';
//comics
import Comics from './comics/index';
//maps
import MapPage from './API/APIgoogleMaps/APImaps';
export const REACT_APP_GOOGLE_API_KEY = "AIzaSyD6dmM0xR3AmV98Z6-WG4squy1hT4TmlOs"

const App: React.FC = () => {
  return <>
  {<Comics />}
  <MapPage />
  </>
};

export default App;
