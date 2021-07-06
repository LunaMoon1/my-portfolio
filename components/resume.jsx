import React from 'react';
import Link from 'next/link';

export default function Resume({ resumeItem }) {
    return (
        <React.Fragment>
            <div className='p-6 hover:bg-purple-200 transition duration-500 ease-in-out sm:transform
                    hover:scale-110'>
                <Link href={`/resume/${resumeItem.id}`}>
                    <a className='flex'>
                        <img className='w-8' src={resumeItem.svg} />
                        <div className='text-lg px-6'>{resumeItem.name}</div>
                    </a>
                </Link>
            </div>
        </React.Fragment>
    )
}