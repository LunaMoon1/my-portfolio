import "tailwindcss/tailwind.css";
import ProfileIntro from '../components/profile-intro';
import Resume from '../components/resume';
import MainContent from '../components/main-content';
import Social from '../components/social';
import { ProfileData } from '../data/profile-v1';

export default function Home() {
  return (
    <div className='bg-purple-300 h-screen'>
      <div className='w-11/12 xl:w-9/12 mx-auto py-20 grid grid-cols-12 grid-rows-3 gap-3'>
        <div className='bg-white col-span-3 p-8 rounded-lg'>
          <ProfileIntro profileIntro={ProfileData.intro} />
        </div>
        <div className='bg-white col-span-9 row-span-3 p-8 rounded-lg'>
          <MainContent />
        </div>
        <div className='bg-white col-span-3 row-span-2 rounded-lg'>
          {
            ProfileData.resumeItems.map(resumeItem => 
              <Resume key={resumeItem.name} resumeItem={resumeItem} />
            )
          }
        </div>
      </div>
    </div>
  )
}
