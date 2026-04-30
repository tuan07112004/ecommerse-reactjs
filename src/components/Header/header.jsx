import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIconLeft, dataMenu, dataBoxIconRight } from './constants';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import logo from '@icons/images/logo.png';

function MyHeader() {
  const {
    containerBoxItem,
    containerMenu,
    containerHeader,
    containerBox,
    container,
  } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxItem}>
            {dataBoxIconLeft.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>

        <div>
          {' '}
          <img
            src={logo}
            alt=''
            style={{
              width: 'auto',
              height: '90px',
            }}
          />
        </div>

        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>

          <div className={containerBoxItem}>
            {dataBoxIconRight.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
