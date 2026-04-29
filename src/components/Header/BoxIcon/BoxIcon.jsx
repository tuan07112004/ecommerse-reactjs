import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import intarIcon from '@icons/svgs/insicon.svg';
import ytbIcon from '@icons/svgs/youIcon.svg';
import reload from '@icons/svgs/reloadIcon.svg';
import love from '@icons/svgs/heartIcon.svg';
import cart from '@icons/svgs/cartIcon.svg';

// nhận vào 2 prop: type hiển thị icon nào, href để điều hướng tới trang web đó
function BoxIcon({ type, href }) {
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'intar':
        return intarIcon;
      case 'ytb':
        return ytbIcon;
      case 'reload':
        return reload;
      case 'love':
        return love;
      case 'cart':
        return cart;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
