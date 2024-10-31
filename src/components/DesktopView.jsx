import { useState } from "react"
import { motion } from "framer-motion";

const DesktopView = ({navLink}) => {
    const[isHover,setIsHover] = useState(false);

    function ToggleState() {
        setIsHover(!isHover);
    }

    const subMenuAnimate = {
      enter: {
        opacity: 1,
        rotateX: 0,
        transition: {
          duration: 0.5,
        },
        display: "block",
      },
      exit: {
        opacity: 0,
        rotateX: -15,
        transition: {
          duration: 0.5,
        },
        transitionEnd: {
          display: "none",
        },
      },
    };

    return (
        <motion.li className='group' onHoverStart={ToggleState }  onHoverEnd={ToggleState }>
           <span className='font-semibold capitalize'>
            {navLink.name}
           </span>

           <motion.div 
           className='absolute top-full mt-1 rounded-[6px]'
           initial="exit"
           animate={isHover ? "enter" : "exit"}
           variants={subMenuAnimate}
           >
             {
                navLink?.subPath.length>0 &&  (<div className={`
                grid ${navLink.gridCol===5 ? 'grid-cols-5' : navLink.gridCol===2 ? 'grid-cols-2' : 'grid-cols-1'} gap-3 whitespace-nowrap bg-black text-white px-2 py-2 text-[14px] rounded-md -translate-x-1/4
                `
                }>
                   {
                    navLink.subPath.map((subNav) => {
                        return <div className='mx-2'> 
                            <h1 className='font-semibold py-2 capitalize px-2 rounded-md hover:bg-white/15'> {subNav.name} </h1>
                           {
                            subNav.subPath.length>0 && (
                                <ul className='flex flex-col gap-1 capitalize'> 
                                    {subNav.subPath.map((miniNav) => <li className='hover:bg-white/15 px-2 py-[2px] rounded-md'> {miniNav.name} </li>)}
                                </ul>
                            )
                           }
                        </div>
                    })
                   }
                </div>)
             }
           </motion.div>

        </motion.li>
    )
}

export default DesktopView