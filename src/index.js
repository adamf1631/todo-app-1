import ReactDOM from "react-dom/client";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

function render() {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

if (module.hot) {
  module.hot.accept("./App", function () {
    setTimeout(render);
  });
}

render();
