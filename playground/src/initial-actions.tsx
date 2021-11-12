import "react-toastify/dist/ReactToastify.css";
import "assets/styles/styles.output.css";
import { render } from "react-dom";
import { Store } from "@reduxjs/toolkit";
import { closeModal } from "api/state-slices/modal/actions";
import App from "app/components/organisms/App";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
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
        <ToastContainer />
        <App history={history} />
      </Provider>
    </Suspense>,
    document.getElementById("root")
  );

  let Preloader = document.getElementById("preloader");
  if (Preloader) Preloader.style.visibility = "hidden";

  document.addEventListener("keyup", (e) => {
    if (e.code === "Escape" && store.getState().modal.isVisible)
      store.dispatch(closeModal());
  });
};
