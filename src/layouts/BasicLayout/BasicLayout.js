import { Footer, FooterApp, Separator, TopBar } from "../../components";
import styles from "./BasicLayout.module.scss";

export function BasicLayout(props) {
  const { children, isOpenSearch = false } = props;

  return (
    <>
      <div className={styles.basicLayout}>
        <TopBar isOpenSearch={isOpenSearch} />
        <Separator />
        <Separator />
        {children}

        <FooterApp />
        <Footer />
      </div>
    </>
  );
}
