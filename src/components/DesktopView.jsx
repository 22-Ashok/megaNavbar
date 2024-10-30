import { useState } from "react"

const DesktopView = ({navLink}) => {

    const[isHover,setIsHover] = useState(false);

    function ToggleState() {
        setIsHover(!isHover);
    }


    return (
        <li className='relative group' onMouseEnter={() => ToggleState() }  onMouseLeave={() => ToggleState() }>
           <span className='font-semibold'>
            {navLink.name}
           </span>

           <div className={`${isHover ? 'visible' : 'hidden'} absolute top-full mt-5 -translate-x-1/4`}>
             {
                navLink?.subPath.length>0 &&  (<div className='grid grid-cols-5 gap-3 whitespace-nowrap w-[850px] bg-black text-white px-4 py-6 text-[15px] rounded-md'>
                   {
                    navLink.subPath.map((subNav) => {
                        return <div> 
                            <h1 className='font-semibold'> {subNav.name} </h1>
                           {
                            subNav.subPath.length>0 && (
                                <ul className='flex flex-col gap-1'> 
                                    {subNav.subPath.map((miniNav) => <li> {miniNav.name} </li>)}
                                </ul>
                            )
                           }
                        </div>
                    })
                   }
                </div>)
             }
           </div>

        </li>
    )
}

export default DesktopView