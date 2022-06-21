import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-2 md:py-10">
          <div>
            <Link href="/" aria-label="philschmid blog">
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <svg
                    className="fill-black dark:fill-gray-800"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="25" />
                    <path
                      d="M21.9163 13.5879L34.5459 35.4629H9.2868L21.9163 13.5879Z"
                      fill="white"
                    />
                    <path
                      d="M26.7242 13.1627L42.7171 13.1627L34.7206 27.013L26.7242 13.1627Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="text-2xl font-semibold sm:block">philschmid</div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden md:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 duration-100 hover:text-primary-500 dark:text-gray-100	 dark:hover:text-primary-400 sm:p-2"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
