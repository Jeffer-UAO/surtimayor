import React, { useState } from "react";
import { Button } from "reactstrap";
import { useRouter } from "next/router";
import styles from "./BtnLink.module.scss";

export function BtnLink(props) {
  const { homePage, link, title, logo } = props;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function handleClick() {
    if (link) {
      router.push(link);
    }

    if (homePage) {
      homePage();
    }
  }

  const updateState = () => setIsLoading(!isLoading);

  return (
    <div className={styles.btnlink}>
      <Button
        onClick={handleClick}
        onFocus={updateState}
        onBlur={updateState}
        onChange={updateState}
      >
        {logo}
        {/* {title} */}
      </Button>
    </div>
  );
}
