import styles from '@/app/styles/StickyMenu.module.scss';

export default function StickyMenu() {
    return (
        <div className={styles.stickyMenu}>
            <div className={styles.stickyMenuContainer}>
                <div className={styles.stickyMenuRow}>
                    <div className={styles.stickyMenuTitle}>
                        <h3>haodn.dev</h3>
                    </div>
                    <div className={styles.stickyMenuListMenu}>
                        <a href="#about" title="about me">
                            <h3 className="rs-h3 rs-h3_theme_dark">about me</h3>
                        </a>
                        <a href="#projects" title="about me">
                            <h3 className="rs-h3 rs-h3_theme_dark">projects</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}