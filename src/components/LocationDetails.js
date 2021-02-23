import React from 'react';
import '../styles/LocationDetails.css';

const LocationDetails = ({ data }) => {
  return (
    <div className='details'>
      <div className='details-header'>
        <div className='details-header-title'>
          <div>
            <h1>{data.name}</h1>
            <div className='details-header-address'>
              <p>{data.address}</p>
              <p>{data.zipCode + ' ' + data.city}</p>
            </div>
          </div>
          <button className='btn'>Request your appointment</button>
        </div>
        <div className='details-header-image'>
          <img src={data.imageUrl} alt='' />
        </div>
      </div>

      <section className='details-description'>
        <div>
          <div className='about-us'>
            <h1 className='description-title'>About us</h1>
            <p>{data.description}</p>
          </div>

          <div className='contact'>
            <h1 className='description-title'>Contact</h1>
            <p>
              <strong>Email: </strong>
              {data.email}
            </p>
            <p>
              <strong>Cell: </strong>
              {data.mobilePhone}
            </p>
            <p>
              <strong>Phone: </strong>
              {data.phone}
            </p>
          </div>
        </div>

        <div className='hours-container'>
          <h1 className='description-title'>Working hours</h1>
          {data.workShifts[0].openHours.map((day) => (
            <div className='working-hours' key={day.day}>
              <p>{day.dayName.charAt(0).toUpperCase() + day.dayName.slice(1).toLowerCase()}</p>
              <p>{day.startTime + ' - ' + day.endTime} </p>
            </div>
          ))}
        </div>

        <div className='our-team'>
          <h1 className='description-title'>Our team</h1>
          <div className='member-container'>
            {data.teamMembers.map((member) => (
              <div className='member' key={member.id}>
                <img className='member-img' src={member.user.avatarUrl} />
                <p className='member-name'>{member.firstName}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationDetails;
