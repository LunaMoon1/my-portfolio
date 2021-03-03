import React from 'react';

export default function ProfileIntro({ profileIntro }) {
    return (
        <React.Fragment>
          <img className='w-24 h-24 mx-auto rounded-full' src='profile-picture.jpg'/>
          <h1 className='text-3xl font-light py-2 text-center'>{ profileIntro.name }</h1>
          <p className='text-md font-light text-center'>{ profileIntro.jobTitle }</p>
        </React.Fragment>
    )
}