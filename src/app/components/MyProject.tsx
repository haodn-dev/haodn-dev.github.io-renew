import styles from '@/app/styles/MyProject.module.scss';
import styles2 from '@/app/styles/PageContent.module.scss';
import Link from "next/link";
import Image from "next/image";
import kiavietnam from '@/app/images/projects/kiavietnam.png';
import hoiana from '@/app/images/projects/hoiana.png';
import vietsec from '@/app/images/projects/vietsec.png';
import mazda from '@/app/images/projects/mazda.png';
import veloz from '@/app/images/projects/veloz.png';
import tadehub from '@/app/images/projects/tadehub.png';


export default function MyProject() {
    return (
        <div className={styles2.pageWrapper} id={"projects"}>
            <div className={styles2.pageContent}>
                <div className={styles.myProject}>
                    <div className={styles.titleWrapper}>
                        <h2>
                            Projects
                        </h2>
                        <p className={styles.subtitle}>Include my freelancer Project</p>
                    </div>
                    <div className={styles.listProjectWrapper}>
                        <div className={styles.project}>
                            <Link className={styles.nameLinkProject} href={"https://kiavietnam.com.vn/kia-vietnam"}
                                  target={"_blank"} title="kiavietnam">
                                <h3 className={styles.projectName}>kiavietnam.com.vn</h3>
                            </Link>
                            <div className={styles.projectDescription}>KIA MOTORS Vietnam&apos;s official website.</div>
                            <Link className={styles.nameLinkProject} href={"https://kiavietnam.com.vn/kia-vietnam"}
                                  target={"_blank"} title="kiavietnam">
                                <div className={styles.projectVideoWrapper}>
                                    <Image src={kiavietnam} alt={"kiavietnam"} layout="fill"></Image>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.project}>
                            <Link className={styles.nameLinkProject} href={"https://experiences.hoiana.com/"}
                                  target={"_blank"} title="experiences.hoiana.com">
                                <h3 className={styles.projectName}>experiences.hoiana.com</h3>
                            </Link>
                            <div className={styles.projectDescription}>Experience The Cultural Heart of Vietnam</div>
                            <Link className={styles.nameLinkProject} href={"https://experiences.hoiana.com/"}
                                  target={"_blank"} title="kiavietnam">
                                <div className={styles.projectVideoWrapper}>
                                    <Image src={hoiana} alt={"hoiana"} layout="fill"></Image>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.project}>
                            <Link className={styles.nameLinkProject} href={"https://vietsec.vn/en/"}
                                  target={"_blank"} title="vietsec">
                                <h3 className={styles.projectName}>ERP Vietsec</h3>
                            </Link>
                            <div className={styles.projectDescription}>ERP helps Vietsec streamline its operations,
                                reduce costs and errors, and improve customer satisfaction.
                            </div>
                            <Link className={styles.nameLinkProject} href={"https://vietsec.vn/en/"}
                                  target={"_blank"} title="kiavietnam">
                                <div className={styles.projectVideoWrapper}>
                                    <Image src={vietsec} alt={"hoiana"} layout="fill"></Image>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.project}>
                            <Link className={styles.nameLinkProject} href={"https://mazdamiennam.com.vn/"}
                                  target={"_blank"} title="mazdamiennam">
                                <h3 className={styles.projectName}>mazdamiennam.com.vn</h3>
                            </Link>
                            <div className={styles.projectDescription}>I&apos;m the leading developer of this.<br/>The
                                website
                                that offers the best deals and services for Mazda cars in Southern Vietnam.
                            </div>
                            <Link className={styles.nameLinkProject} href={"https://mazdamiennam.com.vn/"}
                                  target={"_blank"} title="mazdamiennam">
                                <div className={styles.projectVideoWrapper}>
                                    <Image src={mazda} alt={"mazdamiennam"} layout="fill"></Image>
                                </div>
                            </Link>
                        </div>

                        <div className={styles.project}>
                            <Link className={styles.nameLinkProject} href={"https://veloz.toyota.com.vn/"}
                                  target={"_blank"} title="veloz">
                                <h3 className={styles.projectName}>veloz.toyota.com.vn</h3>
                            </Link>
                            <div className={styles.projectDescription}>This website is the official website of Toyota
                                Veloz, a 7-seater mini-van that is produced and sold in Indonesia, Malaysia and Vietnam
                            </div>
                            <Link className={styles.nameLinkProject} href={"https://veloz.toyota.com.vn/"}
                                  target={"_blank"} title="mazdamiennam">
                                <div className={styles.projectVideoWrapper}>
                                    <Image src={veloz} alt={"veloz"} layout="fill"></Image>
                                </div>
                            </Link>
                        </div>
                        <div className={styles.project}>
                            <Link className={styles.nameLinkProject} href={"https://detpractice-tadehub.com/"}
                                  target={"_blank"} title="detpractice-tadehub.com">
                                <h3 className={styles.projectName}>detpractice-tadehub.com</h3>
                            </Link>
                            <div className={styles.projectDescription}>I&apos;m the primary maintainer and developer of
                                this,
                                the website that helps you ace the DET exam with practice tests and study guides. The
                                DET exam tests your English and academic skills for college, immigration, or work.
                            </div>
                            <Link className={styles.nameLinkProject} href={"https://detpractice-tadehub.com/"}
                                  target={"_blank"} title="detpractice-tadehub.com">
                                <div className={styles.projectVideoWrapper}>
                                    <Image src={tadehub} alt={"tadehub"} layout="fill"></Image>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}