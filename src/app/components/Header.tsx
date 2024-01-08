import styles from '@/app/styles/Header.module.scss';
import Image from "next/image";
import logo from '@/app/images/logo.png';

export default function Header() {
    return (
        <div className={styles.pageHeader}>
            <div className={styles.siteHeaderWrapper}>
                <header className={styles.siteHeader}>
                    <div className={styles.siteHeaderContainer}>
                        <div className={styles.siteHeaderInner}>
                            <nav className={styles.mainNav}>
                                <div
                                    className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto">
                                    <a href="https://haodn.dev/"
                                       className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <div className="w-20 h-20  relative">
                                            <Image src={logo}
                                                   alt="Haodn.dev"/>
                                        </div>
                                    </a>
                                    <button data-collapse-toggle="navbar-default" type="button"
                                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                            aria-controls="navbar-default" aria-expanded="false">
                                        <span className="sr-only">Open main menu</span>
                                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 17 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                        </svg>
                                    </button>
                                    <div className={`hidden w-full md:block md:w-auto ${styles.navMenu}`} id="navbar-default">
                                        <ul className={`font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${styles.navList}`}>
                                            <li>
                                                <a href="#"
                                                   className="block py-2 px-3 md:p-0"
                                                   aria-current="page">Home</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block py-2 px-3 md:p-0">About</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}