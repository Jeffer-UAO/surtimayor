import React, { useEffect } from "react";
import NextNprogress from "nextjs-progressbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/global.scss";
import { CategoryProvider } from "@/contexts/CategoryContext";
import { CartProvider } from "@/contexts";

export default function App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("ServiceWorker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <>
      <NextNprogress
        color="#FF0"
        startPosition={0.3}
        stopDelayMs={200}
        height={10}
      />
      <CartProvider>
        <CategoryProvider>
          <Component {...pageProps} />
        </CategoryProvider>
      </CartProvider>
    </>
  );
}
