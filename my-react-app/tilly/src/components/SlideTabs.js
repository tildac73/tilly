import React, {useRef, useState} from 'react';
import '../index.css';
import {motion} from 'framer-motion'

export const SlideTabsNavbar = () => {
    return (
        <div className='grid h-screen place-content-center bg-neutral-100'>
            <SlideTabs />
        </div>
    );
};


const SlideTabs = () => {

    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className='relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1'>
            <Cursor />
            <Tab setPosition={setPosition}>Home</Tab>
            <Tab setPosition={setPosition}>About Me</Tab>
            <Tab setPosition={setPosition}>Projects</Tab>
            <Tab setPosition={setPosition}>Contact</Tab>

            <Cursor position={position}/>
        </ul>
    );
};

const Tab = ({ children, setPosition }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;

                const { width } = ref.current.getBoundingClientRect();

                setPosition({
                    width: width,
                    opacity: 1,
                    left: ref.current.offsetLeft,
                })
            }}
            className='relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white
        mix-blend-difference md:px-5 md:py-3 md:text-base'>
            {children}
        </li>
    );
};

const Cursor = ({position}) => {
    return <motion.li
        animate={position}
        className='absolute z-0 h-7 rounded-full bg-black md:h-12' />;
};
