import {mainNav} from '../utils/NavLinks'
import MiniMobileNav from './miniMobileNav'

const MobileView = () => {

    return (
      <div className='bg-slate-500 h-screen overflow-x-scroll px-5 py-2 capitalize'>
         <ul className='flex flex-col gap-3 font-semibold text-lg'>
            {
                mainNav.map((navLink) => <MiniMobileNav navLink={navLink} />)
            }
         </ul>
      </div>
    )
}

export default MobileView