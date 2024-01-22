import styles from '@/app/styles/RockerMan.module.scss';
import ArrowComponent from "@/app/components/ArrowComponent";
import SettingIconComponent from "@/app/components/SettingIconComponent";
import Link from "next/link";

export default function BannerSVG() {
    return (
        <>
            <div className={styles.svgContainer}>
                <div className={styles.svgField}></div>
                <div className={`${styles.svgItem} ${styles.svgFieldHTML}`}>
                    <header>
                        <SettingIconComponent/>
                        <h2>Introduce</h2>
                        <ArrowComponent/>
                    </header>
                    <div className={styles.content}>
                        <code>
                            <span className={styles.deg}>export const <span
                                className={styles.meta}> metadata</span></span><span>: Metadata = &#123;</span><br/>
                            <span className={`${styles.description} ${styles.textWithTab}`}><span
                                className={styles.meta}>title</span>: &apos;Profile : Haodn.dev&apos;</span><span>,</span><br/>
                            <span className={`${styles.description} ${styles.textWithTab}`}><span
                                className={styles.meta}>description</span>: &apos;Duong Nhat Hao\&apos;s Profile&apos;</span><span>,</span><br/>
                            <span>&#125;</span>
                        </code>
                    </div>
                </div>
                <div className={`${styles.svgFieldSCSS} ${styles.svgItem}`}>
                    <header>
                        <SettingIconComponent/>
                        <h2>Contact</h2>
                        <ArrowComponent/>
                    </header>
                    <div className={styles.content}>
                        <code>
                            <span
                                className={styles.comment}>{'//'}please click on links below to contact with me</span><br/>
                            <span>&#123;</span><br/>
                            <span className={`${styles.description} ${styles.textWithTab}`}><span
                                className={styles.meta}>email</span>: <Link className={styles.link}
                                                                            href="mailto: haodn.dev@gmail.com"
                                                                            target={"_blank"}
                                                                            title="Duong Nhat Hao email">haodn.dev@gmail.com</Link></span><span>,</span><br/>
                            <span className={`${styles.description} ${styles.textWithTab}`}><span
                                className={styles.meta}>linkedin</span>: <Link className={styles.link}
                                                                               title="Duong Nhat Hao linked-in profile"
                                                                               target={"_blank"}
                                                                               href="https://www.linkedin.com/in/duong-nhat-hao/">haodn.dev@gmail.com</Link></span><span>,</span><br/>
                            <span>&#125;</span>
                        </code>
                    </div>
                </div>
                <div className={`${styles.svgFieldJS} ${styles.svgItem}`}>
                    <header>
                        <SettingIconComponent/>
                        <h2>My knowledge</h2>
                        <ArrowComponent/>
                    </header>
                    <div className={styles.content}><code><span
                        className={styles.class}>let</span> <span
                        className={styles.variable}>myKnowledge </span> = [<span
                        className={styles.string}>&quot;PHP&quot;</span>,<span
                        className={styles.string}>&quot;Laravel&quot;</span>,<span
                        className={styles.string}>&quot;Codeigniter&quot;</span>,<br/><span
                        className={styles.string}>&quot;VueJS&quot;</span>,<span
                        className={styles.string}>&quot;Java&quot;</span>,<span
                        className={styles.string}>&quot;JavaScript&quot;</span>,<span
                        className={styles.string}>&quot;React&quot;</span>,<br/><span
                        className={styles.string}>&quot;NextJS 14&quot;</span>];<br/> <span
                        className={styles.content}></span><br/><span
                        className={styles.class}>function</span> <span
                        className={styles.variable}>gainMore</span>{'() {}'};</code></div>
                </div>
            </div>
        </>
    )
}