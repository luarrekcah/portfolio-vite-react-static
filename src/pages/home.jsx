import * as React from "react";
import { Link } from "wouter";
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
      <div className={styles.container}>
          <main className={styles.main}>
              <h1 className={styles.title}>
                  Olá! Eu sou <b>Raul Rodrigues</b>.
              </h1>
              <p className={styles.description}>
                  <code className={styles.code}>Designer Gráfico & desenvolvedor full-stack web/mobile</code>
              </p>
              <div>

              <img
                        src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                        width={150}
                        height={40}
                        alt='JavaScript' />
                    <img
                        src="https://camo.githubusercontent.com/a1eae878fdd3d1c1b687992ca74e5cac85f4b68e60a6efaa7bc8dc9883b71229/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f6465646f746a73266c6f676f436f6c6f723d7768697465"
                        width={150}
                        height={40}
                        alt='Nodejs' />
                    <img
                        src="https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642"
                        width={150}
                        height={40}
                        alt='React' />
                
              </div>
              <p className={styles.description}>
                  <code className={styles.code}>PROJETOS:</code>
              </p>
              <div className={styles.grid}>
                  <a href="" className={styles.card}>
                      <h2 className={styles.badge}><i class="devicon-android-plain"></i></h2>
                      <h2>GeekNote &rarr;</h2>
                      <p>App destinado a Geeks, faça orçamento separando os itens em cards, com todas as infos básicas. Salve seu entretenimento favorito. Escreva notas, diário e muito mais!</p>
                      <br />
                      <b>Desenvolvido com:</b>
                      <p>
                          <i class="devicon-react-original"></i>
                          <i class="devicon-javascript-plain"></i>
                      </p>
                      <img
                            src="/pt-br_get.svg"
                            width={100}
                            height={100}
                            alt='Disponível na PlayStore' />
                     
                  </a>
              </div>
              <p className={styles.description}>
                  <code className={styles.code}>CONTATO:</code>
              </p>
          </main>
      </div>
  )
};

export default Home;