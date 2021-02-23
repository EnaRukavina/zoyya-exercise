import locations from './database/locations.json';
import React, { useState } from 'react';
import './styles/App.css';
import LocationsList from './components/LocationsList';
import LocationDetails from './components/LocationDetails';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <>
      <div className='App' id='App'>
        {!selectedLocation ? <h1 className='title'>Featured partners</h1> : ''}

        {!selectedLocation ? (
          locations.map((location) => (
            <div
              onClick={() => {
                setSelectedLocation(location);
                const app = document.getElementById('App');
                app.classList.remove('App');
              }}
              key={location.id}
            >
              <LocationsList data={location} />
            </div>
          ))
        ) : (
          <LocationDetails data={selectedLocation} />
        )}
      </div>

      {!!selectedLocation && (
        <div
          className='btn btn-back'
          onClick={() => {
            setSelectedLocation(null);
            const app = document.getElementById('App');
            app.classList.add('App');
          }}
        >
          <i className='fas fa-arrow-left'></i>
          {' BACK'}
        </div>
      )}
    </>
  );
}

export default App;
