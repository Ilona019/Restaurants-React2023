import { Header } from "../Header/component";
import { Footer } from "../Footer/component";
import classNames from "classnames";
import styles from "./styles.module.css";

export const Layout = ({restaurants, activeTab, setActiveTab, children }) => {
  return (
    <div>
      <div className={classNames(styles.root)}>
      <Header
        className={styles.header}
        restaurants={restaurants}
        activeTab={activeTab}
        onTabSelect={setActiveTab}
      />
      <main>{children}</main>
      <Footer className={styles.footer} />
      </div>
      <div id='modal-container' className={styles.modalContainer}></div>
    </div>
  );
};
