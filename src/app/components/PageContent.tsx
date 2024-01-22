import styles from '@/app/styles/PageContent.module.scss';
import styles2 from '@/app/styles/RockerMan.module.scss';
import BannerSVG from "@/app/components/BannerSVG";

export default function PageContent() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.pageContent}>
                <div className={styles2.svgWrapper}>
                    <h1 className={styles.title}>Duong Nhat Hao</h1>
                    <p className={styles.subTitle}>Senior Web developer</p>
                    <p className={styles.subTitle2}>Hello! I&apos;m a versatile developer with a passion for creating robust
                        systems and web solutions. </p>
                </div>
                <div className={styles2.svgWrapper}>
                    <BannerSVG></BannerSVG>
                </div>
            </div>
        </div>
    )
}