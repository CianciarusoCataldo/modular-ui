import "react-toastify/dist/ReactToastify.css";
import "assets/styles/styles.output.css";

import { render } from "react-dom";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { History } from "history";
import { Store } from "@reduxjs/toolkit";

import { ToastContainer } from "react-toastify";
import App from "app/App";

/** Render Modular-app */
export const startRender = (store: Store, history: History) => {
  render(
    <Suspense fallback={<div className="preloader"></div>}>
      <ToastContainer />
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </Suspense>,
    document.getElementById("root")
  );

  let Preloader = document.getElementById("preloader");
  if (Preloader) Preloader.style.visibility = "hidden";
};
