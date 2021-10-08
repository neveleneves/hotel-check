import React from "react";
import ReactDOM from "react-dom";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { compose, createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from "./redux/rootReducer";

import App from "./App";

import "./reset.scss";
import "./fonts.scss";
import { sagaWatcher } from "./redux/sagas";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware()

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(
      thunk, saga
    ),
    //for dev
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const persistor = persistStore(store);
saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
