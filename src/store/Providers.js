"use client";
import { persistStore } from "redux-persist";
import RefreshLoading from "@/components/common/RefreshLoading";
import store from "./index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<RefreshLoading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
export default Providers;
