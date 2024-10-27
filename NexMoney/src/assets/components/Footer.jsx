import styles from '../styles/Footer.module.css'
import Logo from '../img/Logo.svg'

function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.divpaifooter}>
                <div className={styles.divpailist}>
                    <div className={styles.divnexmoney}>
                        <h1>NexMoney</h1>
                        <li>Sobre nós</li>
                        <li>Perguntas Frequentes</li>
                        <li>Contato</li>
                    </div>
                    <div className={styles.divconosco}>
                        <h1>Fale Conosco</h1>
                        <li>4002 8922</li>
                        <li>meajuda@nexmoney.com.br</li>
                    </div>
                    <div className={styles.divprodutos}>
                        <h1>Produtos</h1>
                        <li>Conta Digital</li>
                        <li>Cartão de Crédito</li>
                        <li>NexMoney Darkblue</li>
                    </div>
                </div>
                    <div className={styles.divdireitos}>
                        <img src={Logo} alt="Logo" />
                        <p>© 2024 NexMoney. <br />Todos os direitos reservados.</p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer