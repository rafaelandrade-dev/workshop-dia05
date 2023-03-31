import styles from './Header.module.css'

function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.logo_container}>
                <h1>Logo</h1>
            </div>
            <nav>
                <ul className={styles.navbar_container}>
                    <li>Home</li>
                    <li>Personagens</li>
                    <li>Teste 1</li>
                    <li>Teste 2</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header