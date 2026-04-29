// sử dụng tham số chilrden bọc các tham số trong trang web, children = nội dung nằm giữa thẻ mờ và thẻ đóng của component
import styles from './styles.module.scss';

function MainLayout({ children }) {
  // lấy styles.wrapLayout gắn vào biến wrapLayout
  const { wrapLayout, container } = styles;

  return (
    <main className={wrapLayout}>
      <div classname={container}>{children}</div>
    </main>
  );
}

export default MainLayout;
