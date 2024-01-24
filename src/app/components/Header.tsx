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
                                <a href="https://haodn.dev/" title={"haodn.dev"}>
                                    <div className={styles.siteLogo}>
                                        <Image src={logo} alt="Haodn.dev"/>
                                    </div>
                                </a>
                                <div className={styles.navMenu} id="navbar-default">
                                    <ul className={styles.navList}>
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
                            </nav>

                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}