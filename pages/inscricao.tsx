import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import styles from '../styles/subscriptions.module.scss';

const Subscriptions: React.FC = () => {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <section className={styles['main-banner']}>
          <img src="/assets/banner-subscriptions.jpg" alt="Banner inscrições" />
        </section>

        <section className={styles.form}>
          <h2>
            Preencha os dados corretamente e aguarde retorno no email para terminar sua
            inscrição.
          </h2>

          <form>{/* ... */}</form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Subscriptions;
