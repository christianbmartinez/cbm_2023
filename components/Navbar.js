import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { FaMoon, FaSun } from 'react-icons/fa'
import Socials from './Socials'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const useLoaded = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => setLoaded(true), [])
  return loaded
}

const svgPathVariant1 = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
}

const svgPathVariant2 = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M0 14.5L15 14.5' },
}

const firstVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.5,
    },
  },
  closed: { y: -300, opacity: 0 },
}
const secondVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.5,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const thirdVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 0.75,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const fourthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const fifthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1.25,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const sixthVariant = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1.5,
    },
  },
  closed: { x: -100, opacity: 0 },
}

const seventhVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      delay: 1.75,
    },
  },
  closed: { y: 300, opacity: 0 },
}

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  const [isOn, setIsOn] = useState(false)
  const [nav, setNav] = useState(false)
  const [animation, setAnimation] = useState('closed')
  const loaded = useLoaded()

  const handleThemeColor = () => {
    currentTheme == 'dark' ? setTheme('light') : setTheme('dark')
    setIsOn(!isOn)
    document.querySelector('html').style.backgroundColor = `${
      currentTheme == 'dark' ? '#FAFAFA' : '#0F172A'
    }`
  }

  const handleNav = () => {
    setNav(!nav)
    setAnimation('moving')
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed')
    }, 500)
    document.querySelector('body').style.overflow = nav ? 'auto' : 'hidden'
  }

  return (
    <>
      <nav>
        <div className='flex justify-between items-center h-24 mx-auto px-4 text-zinc-800 bg-zinc-50 dark:text-zinc-50 dark:bg-slate-900 overflow-hidden'>
          <div className='z-40 flex flex-row items-center justify-center p-4'>
            <Link href='/' aria-label='Christian B Martinez | Home Page'>
              <svg
                width='50'
                height='50'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 46.07 21.5'
              >
                <path
                  d='M16,29.93c4.57-1.69,9.77-8.19,6.57-13.15-2.94-4.55-10.18-2.09-13.79.15C4.15,19.8.12,26.1,2.77,31.57,5.91,38.06,15.08,35.68,20,32.89a20.51,20.51,0,0,0,7.46-6.78A14,14,0,0,0,29,15.48l-4.45,1.6a18.39,18.39,0,0,1,5.82,13.26c.08,2.2,3.86,1.46,4.54,0,.52-1.11.81-2.34,1.27-3.48s1-2.5,1.65-3.72a53.15,53.15,0,0,1,4.07-6.86H37.31a27.2,27.2,0,0,0,0,11.64,10.46,10.46,0,0,0,7,7.06,3.31,3.31,0,0,0,3.27-.87A1.19,1.19,0,0,0,47,32,7.86,7.86,0,0,1,41.81,26,26.71,26.71,0,0,1,42,15.84c.2-1-1.08-1.36-1.8-1.36a3.28,3.28,0,0,0-2.74,1.38,53.15,53.15,0,0,0-4.07,6.86c-.57,1.15-1.09,2.32-1.57,3.51s-.8,2.52-1.35,3.69H35c-.18-5.66-2-10.88-6.23-14.8-1.15-1.06-4.94-.49-4.45,1.61a11.62,11.62,0,0,1-4.13,12.16,16.51,16.51,0,0,1-6,3.14c-2,.55-4.39,1-6-.6C5,28.16,7.12,22.73,10.06,20.09A10.91,10.91,0,0,1,14,17.83c1-.33,2.65-.63,3.52,0,1.56,1.16,1.43,3.44.84,5.09A7.24,7.24,0,0,1,14,27.45c-.84.31-1.76,1.35-1.14,2.23s2.27.57,3.12.25Z'
                  transform='translate(-1.92 -14.22)'
                  fill='currentColor'
                  className='hover:opacity-75 z-50 transition duration-150 ease-in-out'
                />
              </svg>
            </Link>
          </div>
          <ul className='hidden md:flex z-40'>
            <li className='p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out'>
              <Link href='/' aria-label='Christian B Martinez | Home Page'>
                Home
              </Link>
            </li>
            <li className='p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out'>
              <Link
                href='/about'
                aria-label='Christian B Martinez | About Page'
              >
                About
              </Link>
            </li>
            <li className='p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out'>
              <Link
                href='/portfolio'
                aria-label='Christian B Martinez | Portfolio Page'
              >
                Portfolio
              </Link>
            </li>

            <li className='p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out'>
              <Link href='/blog' aria-label='Christian B Martinez | Blog Page'>
                Blog
              </Link>
            </li>
            <li className='p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out'>
              <Link
                href='/contact'
                aria-label='Christian B Martinez | Contact Page'
              >
                Contact
              </Link>
            </li>
            <li className='p-4'>
              <div
                className='icon-toggler-container'
                data-darkmode={isOn}
                onClick={handleThemeColor}
                style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
              >
                <motion.div layout className='handle'>
                  <AnimatePresence mode='wait' initial={false}>
                    <motion.i
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentTheme === 'dark' && loaded ? (
                        <FaMoon className='toggler-icon' />
                      ) : (
                        <FaSun className='toggler-icon' />
                      )}
                    </motion.i>
                  </AnimatePresence>
                </motion.div>
              </div>
            </li>
          </ul>
          <div className='flex flex-row mr-3 justify-center items-center md:hidden z-50 cursor-pointer'>
            {!nav && (
              <div
                className='icon-toggler-container p-4 mr-5'
                data-darkmode={isOn}
                onClick={handleThemeColor}
                style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
              >
                <motion.div layout className='handle'>
                  <AnimatePresence mode='wait' initial={false}>
                    <motion.i
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentTheme === 'dark' && loaded ? (
                        <FaMoon className='toggler-icon' />
                      ) : (
                        <FaSun className='toggler-icon' />
                      )}
                    </motion.i>
                  </AnimatePresence>
                </motion.div>
              </div>
            )}
            <div onClick={handleNav}>
              <svg width='29' height='29' viewBox='0 0 29 29'>
                <motion.path
                  stroke='currentColor'
                  animate={animation}
                  variants={svgPathVariant1}
                />
                <motion.path
                  stroke='currentColor'
                  animate={animation}
                  variants={svgPathVariant2}
                />
              </svg>
            </div>
          </div>
          <ul
            className={
              nav
                ? 'fixed z-40 flex flex-col justify-center items-center left-0 top-0 w-full h-screen bg-zinc-50 dark:bg-slate-900 ease-in-out duration-500'
                : 'fixed z-40 flex flex-col justify-center items-center left-[-100%] top-0 w-full h-screen bg-zinc-50 dark:bg-slate-900 ease-in-out duration-500'
            }
          >
            <motion.li
              animate={nav ? 'open' : 'closed'}
              variants={firstVariant}
              className='inline-flex fixed top-20 p-4'
            >
              <Link
                href='/'
                aria-label='Christian B Martinez | Home Page'
                onClick={handleNav}
              >
                <svg
                  width='60'
                  height='60'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 46.07 21.5'
                >
                  <path
                    d='M16,29.93c4.57-1.69,9.77-8.19,6.57-13.15-2.94-4.55-10.18-2.09-13.79.15C4.15,19.8.12,26.1,2.77,31.57,5.91,38.06,15.08,35.68,20,32.89a20.51,20.51,0,0,0,7.46-6.78A14,14,0,0,0,29,15.48l-4.45,1.6a18.39,18.39,0,0,1,5.82,13.26c.08,2.2,3.86,1.46,4.54,0,.52-1.11.81-2.34,1.27-3.48s1-2.5,1.65-3.72a53.15,53.15,0,0,1,4.07-6.86H37.31a27.2,27.2,0,0,0,0,11.64,10.46,10.46,0,0,0,7,7.06,3.31,3.31,0,0,0,3.27-.87A1.19,1.19,0,0,0,47,32,7.86,7.86,0,0,1,41.81,26,26.71,26.71,0,0,1,42,15.84c.2-1-1.08-1.36-1.8-1.36a3.28,3.28,0,0,0-2.74,1.38,53.15,53.15,0,0,0-4.07,6.86c-.57,1.15-1.09,2.32-1.57,3.51s-.8,2.52-1.35,3.69H35c-.18-5.66-2-10.88-6.23-14.8-1.15-1.06-4.94-.49-4.45,1.61a11.62,11.62,0,0,1-4.13,12.16,16.51,16.51,0,0,1-6,3.14c-2,.55-4.39,1-6-.6C5,28.16,7.12,22.73,10.06,20.09A10.91,10.91,0,0,1,14,17.83c1-.33,2.65-.63,3.52,0,1.56,1.16,1.43,3.44.84,5.09A7.24,7.24,0,0,1,14,27.45c-.84.31-1.76,1.35-1.14,2.23s2.27.57,3.12.25Z'
                    transform='translate(-1.92 -14.22)'
                    className='hover:opacity-75'
                    fill='currentColor'
                  />
                </svg>
              </Link>
            </motion.li>
            <li className='text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={secondVariant}
              >
                <Link
                  className='dark:hover:text-purple-600 transition duration-150 ease-in-out'
                  href='/'
                  aria-label='Christian B Martinez | Home Page'
                  onClick={handleNav}
                >
                  Home
                </Link>
              </motion.div>
            </li>
            <li className='text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={thirdVariant}
              >
                <Link
                  className='dark:hover:text-purple-600 transition duration-150 ease-in-out'
                  href='/about'
                  aria-label='Christian B Martinez | About Page'
                  onClick={handleNav}
                >
                  About
                </Link>
              </motion.div>
            </li>
            <li className='text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={fourthVariant}
              >
                <Link
                  className='dark:hover:text-purple-600 transition duration-150 ease-in-out'
                  href='/portfolio'
                  aria-label='Christian B Martinez | Portfolio Page'
                  onClick={handleNav}
                >
                  Portfolio
                </Link>
              </motion.div>
            </li>
            <li className='text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={fifthVariant}
              >
                <Link
                  className='dark:hover:text-purple-600 transition duration-150 ease-in-out'
                  href='/blog'
                  onClick={handleNav}
                  aria-label='Christian B Martinez | Blog Page'
                >
                  Blog
                </Link>
              </motion.div>
            </li>
            <li className='text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={sixthVariant}
              >
                <Link
                  className='dark:hover:text-purple-600 transition duration-150 ease-in-out'
                  href='/contact'
                  aria-label='Christian B Martinez | Contact Page'
                  onClick={handleNav}
                >
                  Contact
                </Link>
              </motion.div>
            </li>
            <div className='flex flex-col fixed justify-center items-center bottom-20 p-4'>
              <motion.div
                animate={nav ? 'open' : 'closed'}
                variants={seventhVariant}
              >
                <Socials style={'inline-flex'} />
              </motion.div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
