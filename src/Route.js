import { Provider } from 'react-redux'
import React, {Fragment} from "react";
import App from "./pages/app/App";
import store from "./redux/store"
import color from "./constants/Color";

function Route() {
  return (
      <Provider store={store}>
          <Fragment>
              <App style={{backgroundColor : color.blue_principal}}/>
          </Fragment>

      </Provider>
  );
}

export default Route;
