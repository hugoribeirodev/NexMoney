import styles from '../styles/Home.module.css'
import card from '../img/cartaobola.svg'
import emprestimo from '../img/imgemprestimo.svg'
import seguro from '../img/imagemseguro.svg'

function Home(){
    return(
        <section>
            <section className={styles.section1}>
                <div className={styles.divimage}>
                    <div className={styles.imageazul}>
                        <h1>Invista com a força de um touro. construa seu legado financeiro.</h1>
                        <h5>Na NexMoney você cresce suas finanças com força e confiança.</h5>
                    </div>
                </div>
            </section>

            <section className={styles.sectionservicos}>
                <div className={styles.holan}>
                    <div className={styles.samescard}>
                        <h2>Cartão de Crédito</h2>
                        <p>Descubra um cartão moderno e gratuito, sem anuidade. Mantenha o controle total das suas finanças com a NexMoney e faça seu dinheiro trabalhar para você.</p>
                        <p>Veja mais</p>
                    </div>

                    <div className={styles.samescard}>
                        <h2>Investimentos</h2>
                        <p>Comece sua jornada de investimentos com apenas R$ 1! Na NexMoney, oferecemos opções personalizadas para cada perfil. Desfrute de uma experiência intuitiva, segura e transparente, onde seu dinheiro pode crescer sem complicações.</p>
                        <p>Veja mais</p>
                    </div>

                    <div className={styles.samescard}>
                        <h2>Carteira Digital</h2>
                        <p>Guarde os dados do seu cartão de crédito com segurança nas carteiras digitais do Google Pay, Apple Pay e Samsung Pay. Com a NexMoney, sua praticidade e segurança estão sempre em primeiro lugar!</p>
                        <p>Veja mais</p>
                    </div>
                </div>
            </section>

            <section className={styles.sectionamarela}>
                <div className={styles.divtexto}>
                    <h1>Realize pagamentos seguros para qualquer lugar do mundo! Com a flexibilidade de escolher seu meio de pagamento preferido, a NexMoney transforma seu smartphone em uma ferramenta poderosa para suas finanças. <span>Quem diria que um aplicativo poderia fazer tanto?</span></h1>
                </div>
            </section>

            <section className={styles.sectioncard}>
                <div className={styles.divgray}>
                    <div className={styles.divcontent}>
                        <h2>Conheça o Cartão de Crédito NexMoney</h2>
                        <p>Conheça o 'Azulzinho': o cartão moderno, gratuito e prático da NexMoney! Realize pagamentos seguros para qualquer lugar do mundo com a flexibilidade de escolher seu meio de pagamento preferido.</p>
                        <p className={styles.veja}>Veja mais</p>
                    </div>

                    <div className={styles.cartao}>
                        <img src={card} alt="Cartão NexMoney" />
                    </div>
                </div>
            </section>

            <section className={styles.sectionmais}>
                <h1 className={styles.mstitle}>Mais Serviços NexMoney</h1>
                <div className={styles.twocards}>
                    <div className={styles.samescards2}>
                        <img src={emprestimo} alt="Emprestimo" />
                        <h2>Emprestimo</h2>
                        <p>Empréstimos feitos para você: com total transparência e segurança, da simulação até a última parcela. Na NexMoney, você tem o controle nas suas mãos, garantindo que cada passo seja do seu jeito!</p>
                        <p className={styles.vejaMais}>Veja Mais</p>
                    </div>
                    <div className={styles.samescards2}>
                        <img src={seguro} alt="Seguro Celular" />
                        <h2>Seguro Celular</h2>
                        <p>Proteja seu celular e aproveite ao máximo tudo o que ele pode oferecer! Com o seguro da NexMoney, você fica tranquilo para curtir cada momento, sem se preocupar com imprevistos.</p>
                        <p className={styles.vejaMais}>Veja Mais</p>
                    </div>
                </div>
            </section>
        </section>
        
    )
}

export default Home