import Banner from '../Banner/Banner';
import MyHeader from '../Header/header';
import styles from './styles.module.scss';

function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
      </div>
    </div>
  );
}

export default HomePage;
