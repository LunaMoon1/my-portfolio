import 'tailwindcss/tailwind.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className>
      <div className='container mx-auto mt-4'>
        <div className='flex px-6 py-3 flex justify-between items-center'>
          <div>
            <a href='#' className='text-4xl font-bold'>AD</a>
          </div>
          <div className='space-x-4'>
            <a href='#' className='text-lg font-extralight'>About Me</a>
            <a href='#' className='px-3 py-2 border-black border-2 rounded-full text-lg font-extralight'>Say Hi!</a>
          </div>
        </div>
        <div className='mt-4 px-3 py-2 flex flex-col items-center'>
          <div>
            <Image 
              src='/images/profile.jpg'
              height={144}
              width={144} 
              className='rounded-full' />
          </div>
          <div className='mt-4 text-5xl font-light'>Full-stack Developer</div>
          <div className='mt-4 text-lg text-gray-500'>In love with the world of 0s and 1s</div>
        </div>
      </div>
    </div>
  )
}