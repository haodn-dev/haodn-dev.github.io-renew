import styles from '@/app/styles/RockerMan.module.scss';

export default function BannerSVG() {
    return (
        <>
            <div className={styles.svgContainer}>
                <div className={styles.svgField}></div>
                <div className={`${styles.svgFieldHTML} ${styles.svgItem}`}>
                    <header>
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                                fill="#4C4F5A"></path>
                        </svg>
                        <h1>HTML</h1>
                        <svg width="16" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                                fill="#4C4F5A"></path>
                        </svg>
                    </header>
                    <div className={styles.content}><code><span
                        className={styles.tag}>&lt;div</span> <span
                        className={styles.class}>class</span><span>=</span><span
                        className={styles.string}>&quot;rect&quot;</span><span
                        className={styles.tag}>&gt;&lt;/div&gt;</span></code></div>
                </div>
                <div className={`${styles.svgFieldSCSS} ${styles.svgItem}`}>
                    <header>
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                                fill="#4C4F5A"></path>
                        </svg>
                        <h1>SCSS</h1>
                        <svg width="16" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                                fill="#4C4F5A"></path>
                        </svg>
                    </header>
                    <div className={styles.content}>
                        <code>
                            <p className={`${styles.class} ${styles.cssPropertyField} ${styles.cssPropertyField1}`}>
                                <span className={styles.tag}>.rect</span>
                                <span>{' {'}</span>
                            </p>
                            <br/>
                            <p className={`${styles.cssPropertyField} ${styles.cssPropertyField2}`}>
                                <span className={styles.cssProperty}>background</span>
                                <span>{':'}</span>
                                <span className={styles.class}>linear-gradient
                                    </span>
                                {'('}</p>
                            <br/>
                            <p className={`${styles.cssPropertyField} ${styles.cssPropertyFieldChild1}`}>
                                <span className={styles.deg}>-119deg</span>,
                            </p>
                            <br/>
                            <p className={`${styles.cssPropertyField}  ${styles.cssPropertyFieldChild2}`}>
                                <span className={styles.class}>$gray</span>
                                <span className={styles.deg}> 0%</span>,</p>
                            <br/>
                            <p className={`${styles.cssPropertyField} ${styles.cssPropertyFieldChild3}`}>
                                <span className={styles.class}>$dark-gray</span>
                                <span className={styles.deg}> 100%</span>{');}'}
                            </p>
                        </code>
                    </div>
                </div>
                <div className={`${styles.svgFieldJS} ${styles.svgItem}`}>
                    <header>
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 6.675l-1.8-.6c-.2-.1-.3-.3-.2-.4l.9-1.7c.6-1.2-.7-2.5-1.9-1.9l-1.7.9c-.1.1-.3 0-.4-.2l-.6-1.8c-.4-1.3-2.2-1.3-2.6 0l-.6 1.8c-.1.2-.3.3-.4.2l-1.7-.9c-1.2-.6-2.5.7-1.9 1.9l.9 1.7c.1.1 0 .3-.2.4l-1.8.6c-1.3.4-1.3 2.3 0 2.7l1.8.6c.2 0 .3.2.2.3l-.9 1.7c-.6 1.2.7 2.5 1.9 1.9l1.7-.9c.2-.1.4 0 .4.2l.6 1.8c.4 1.3 2.3 1.3 2.7 0l.6-1.8c.1-.2.3-.3.4-.2l1.7.9c1.2.6 2.5-.7 1.9-1.9l-1-1.7c-.1-.2 0-.4.2-.4l1.8-.6c1.3-.4 1.3-2.2 0-2.6zm-7 3.7c-1.3 0-2.4-1.1-2.4-2.4 0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4z"
                                fill="#4C4F5A"></path>
                        </svg>
                        <h1>JS</h1>
                        <svg width="16" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.709 7.651l6.161-5.622c.241-.22.383-.517.383-.84 0-.323-.142-.62-.383-.84A1.361 1.361 0 0 0 13.95 0c-.354 0-.68.13-.921.349l-5.27 4.808L2.492.349A1.361 1.361 0 0 0 1.57 0C1.215 0 .89.13.648.336.38.569.253.879.253 1.189c0 .297.127.595.368.84 1.615 1.486 5.807 5.325 6.09 5.596l.03.026c.509.465 1.458.465 1.968 0z"
                                fill="#4C4F5A"></path>
                        </svg>
                    </header>
                    <div className={styles.content}><code><span
                        className={styles.class}>var</span> <span
                        className={styles.variable}>colors</span> = [<span
                        className={styles.string}>&quot;#74B087&quot;</span>,<span
                        className={styles.string}>&quot;#DE7300&quot;</span>,<span
                        className={styles.string}>&quot;#74B087&quot;</span>];<br/><br/><span
                        className={styles.content}></span><br/><span
                        className={styles.class}>function</span> <span
                        className={styles.variable}>animate</span>{'() {}'};</code></div>
                </div>
            </div>
        </>
    )
}