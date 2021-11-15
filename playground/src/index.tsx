import "assets/styles/main.css";
import CONFIG from "app.config.json";

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  navigator.serviceWorker
    .register("./serviceWorker.js", { scope: "/modular-ui/" })
    .then(
      function () {
        console.log("Service worker registration succeeded");
      },
      /*catch*/ function () {
        console.log("Service worker registration failed");
      }
    );
} else {
  console.log("Service workers are not supported.");
}

import("api/core/i18n/init").then(({ initi18n }) => {
  initi18n(CONFIG);
});
import("api/core/store/init").then(({ initStore }) => {
  const { store, history } = initStore(CONFIG);
  import("./initial-actions").then(({ startRender }) => {
    startRender(store, history);
  });
});
