import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfileIntro({ profileIntro }) {
    return (
        <React.Fragment>
          <div className='relative w-24 h-24 mx-auto'>
            <Link href='/'>
              <a>
                <Image 
                  className='rounded-full'
                  src='/images/profile.jpg'
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Link>
          </div>
          <h1 className='text-3xl font-light py-2 text-center'>{ profileIntro.name }</h1>
          <p className='text-md font-light text-center'>{ profileIntro.jobTitle }</p>
        </React.Fragment>
    )
}