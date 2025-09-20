import { Provider } from "react-redux";
import { store } from "./store/store";
import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { ProductsPage } from "./components/Products/ProductsPage";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="main-content">
          <ProductsPage />
          <Cart />
        </div>
      </div>
    </Provider>
  );
}

export default App;
