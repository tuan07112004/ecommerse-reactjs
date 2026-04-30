import Button from '../Button/button';
import styles from './styles.module.scss';

function Banner() {
  const { container, content } = styles;
  return (
    <div className={container}>
      <div>
        <Button content='Xem sản phẩm' />
      </div>
    </div>
  );
}

export default Banner;
