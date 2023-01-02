import styles from './Nome.module.css'
function Nome() {
    const nome = 'Pedro'
    const meuNome = nome.toUpperCase()

    return(
    <div className={styles.NomeHeader}>
        <h1>Olá, {meuNome}! 🙂</h1>
        <center>
        <h3 className={styles.TxtPresenca}>Vamos ver como estão as suas presenças!</h3>
        </center>
        <h3></h3>
    </div>
    )
}

export default Nome