import React from 'react';
import Link from 'next/link';

export default function Resume({ resumeItem }) {
    return (
        <React.Fragment>
            <div className='p-6 hover:bg-purple-200'>
                <Link href={`/resume/${resumeItem.id}`}>
                    <a className='flex'>
                        <img className='w-10' src={resumeItem.svg} />
                        <div className='text-lg px-6'>{resumeItem.name}</div>
                    </a>
                </Link>
            </div>
        </React.Fragment>
    )
}