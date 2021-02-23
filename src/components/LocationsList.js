import React from 'react';
import '../styles/LocationsList.css';

function LocationsList({ data }) {
  return (
    <div className='card'>
      <img className='card-img' src={data.imageUrl} />
      <div className='card-details'>
        <div>
          <p className='category'>{data.category}</p>
          <p className='title'>{data.name}</p>
          <p className='address'>{data.address}</p>
        </div>
        <br />
        <a className='link'>
          <i className='fas fa-arrow-right'></i> SEE LOCATION
        </a>
      </div>
    </div>
  );
}
export default LocationsList;
