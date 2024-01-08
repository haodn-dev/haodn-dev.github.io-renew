import styles from '@/app/styles/PageContent.module.scss';
import styles2 from '@/app/styles/RockerMan.module.scss';
import BannerSVG from "@/app/components/BannerSVG";

export default function PageContent() {
    return (
        <div className={styles.pageContent}>
            <div className={styles2.svgWrapper}>
                <BannerSVG></BannerSVG>
            </div>
        </div>
    )
}