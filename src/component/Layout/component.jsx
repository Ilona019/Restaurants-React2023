import { Header } from "../Header/component";
import { Footer } from "../Footer/component";
import classNames from "classnames";
import styles from "./styles.module.css";

export const Layout = ({ activeTab, setActiveTab,  showCart, children }) => {
  return (
    <div>
      <div className={classNames(styles.root)}>
      <Header
        className={styles.header}
        activeTab={activeTab}
        onTabSelect={setActiveTab}
        onShowCart={showCart} />
      <main>{children}</main>
      <Footer className={styles.footer} />
      </div>
      <div id="modal-container" className={styles.modalContainer}></div>
    </div>
  );
};
