import "react-toastify/dist/ReactToastify.css";
import "assets/styles/styles.output.css";
import { render } from "react-dom";
import { Store } from "@reduxjs/toolkit";
import App from "app/App";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { History } from "history";

export const startRender = (store: Store, history: History) => {
  render(
    <Suspense
      fallback={
        <div>
          <div className="preloader-header"></div>
          <div className="preloader"></div>
        </div>
      }
    >
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </Suspense>,
    document.getElementById("root")
  );

  let Preloader = document.getElementById("preloader");
  if (Preloader) Preloader.style.visibility = "hidden";
};
