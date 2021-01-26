import React from "react";
import Dashboard from "./pages/dashboard";
import { store } from "./core/redux";
import { Provider } from "react-redux";
const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};
export default App;
