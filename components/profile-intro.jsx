import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfileIntro({ profileIntro }) {
  return (
    <React.Fragment>
      <div className='relative w-12 h-12 sm:w-24 sm:h-24 sm:mx-auto'>
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
      <div className='flex-auto flex-col sm:hidden text-center'>
        <h1 className='text-xl font-semilight'>{ profileIntro.name }</h1>
        <p className='text-sm font-light'>{ profileIntro.jobTitle }</p>
      </div>
      <div className='sm:hidden pt-2'>
        <img className=' w-12 h-8' src='/svg/menu.svg' />
        <img className='hidden w-12 h-8' src='/svg/menu-close.svg'/>
      </div>

      <h1 className='hidden sm:block text-3xl font-light py-2 text-center'>{ profileIntro.name }</h1>
      <p className='hidden sm:block text-md font-light text-center'>{ profileIntro.jobTitle }</p>
    </React.Fragment>
  )
}