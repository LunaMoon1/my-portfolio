import React from 'react';

export default function Resume({ resumeItem }) {
    return (
        <React.Fragment>
            <div className='p-6 flex hover:bg-purple-300 border border-gray-200 border-b'>
                <img className='w-10' src={resumeItem.svg} />
                <div className='text-lg px-6'>{resumeItem.name}</div>
            </div>
        </React.Fragment>
    )
}