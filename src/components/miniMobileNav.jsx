import { useState } from 'react';
import { ExpandMore } from "@mui/icons-material";

const MiniMobileNav = ({ navLink }) => {
    const [mainNavToggle, setMainNavToggle] = useState(false);
    const [miniNavToggles, setMiniNavToggles] = useState({});

    function toggleMainNav() {
        console.log('from parent');
        setMainNavToggle(!mainNavToggle);
    }

    function toggleSubMiniNav(e, index) {
        e.stopPropagation();
        setMiniNavToggles((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    }

    return (
        <li className="px-2 py-2 rounded-md">
            <div onClick={toggleMainNav} className="text-sm md:text-[16px] lg:text-lg cursor-pointer">
                <span>{navLink.name}</span>
                {navLink.subPath.length > 0 && (
                    <ExpandMore sx={{ fontSize: 25 }} />
                )}
            </div>

            {navLink.subPath.length > 0 && (
                <ul className={`ml-4 ${mainNavToggle ? 'visible' : 'hidden'}`}>
                    {navLink.subPath.map((subNav, index) => (
                        <li key={subNav.name} className="text-sm md:text-[16px] lg:text-lg">
                            <div className="cursor-pointer">
                                <span>{subNav.name}</span>
                                {subNav.subPath.length > 0 && (
                                    <ExpandMore
                                        sx={{ fontSize: 25 }}
                                        onClick={(e) => toggleSubMiniNav(e, index)}
                                    />
                                )}
                            </div>

                            {/** mini list */}
                            {subNav.subPath.length > 0 && (
                                <ul className={`ml-8 ${miniNavToggles[index] ? 'visible' : 'hidden '}`}>
                                    {subNav.subPath.map((subMiniNav) => (
                                        <li key={subMiniNav.name}>
                                            <div className="cursor-pointer py-1">
                                                <span>{subMiniNav.name}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MiniMobileNav;
