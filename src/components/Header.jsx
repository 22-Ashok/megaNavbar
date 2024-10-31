import {useState} from 'react'
import {mainNav} from '../utils/NavLinks'
import Logo from '../utils/Logo.png'
import DesktopView from './DesktopView'
import { Menu } from '@mui/icons-material'
import MobileView from './MobileView'

const Header = () => {

    const[isClicked, setIsClicked] = useState(false);

    return (
        <header className='h-16 inset-0 fixed bg-slate-500'>
         <nav>
            <div className='flex justify-between items-center px-4'>

              <div>
                    <img src={Logo} alt='missing' className='h-16' />
                </div>

                <ul className='hidden lg:flex justify-between gap-x-8 h-16 items-center'>
                   {
                    mainNav.map((navLink) => <DesktopView key={navLink.id} navLink={navLink} />)
                   }
                </ul>

                <button className='mr-8 hidden lg:inline-block'>
                    FREE CALL
                </button>

                <div className='lg:hidden' onClick={() =>setIsClicked(!isClicked) }>
                    <Menu />
                </div>
            </div>

           {
             isClicked && <MobileView />
           }
        </nav>
        </header>
       
    )
}

export default Header 