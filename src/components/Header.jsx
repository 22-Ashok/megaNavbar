import {mainNav} from '../utils/NavLinks'
import Logo from '../utils/Logo.png'
import DesktopView from './DesktopView'

const Header = () => {

    return (
        <nav className='h-16 inset-0 fixed bg-slate-500'>
            <div className='flex justify-between items-center px-4'>
                <div>
                    <img src={Logo} alt='missing' className='h-16' />
                </div>

                <ul className='flex justify-between gap-x-8'>
                   {
                    mainNav.map((navLink) => <DesktopView key={navLink.id} navLink={navLink} />)
                   }
                </ul>

                <button className='mr-8'>
                    free call
                </button>
            </div>
        </nav>
    )
}

export default Header 