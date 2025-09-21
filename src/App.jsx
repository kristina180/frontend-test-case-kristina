import { Provider } from 'react-redux';
import { store } from './store/store';
import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart';
import { ProductsPage } from './components/Products/ProductsPage';

import './App.css';
import { WrapperStyles } from './components/WrapperStyles/WrapperStyles';

function App() {
  return (
    <Provider store={store}>
      <WrapperStyles classNames="app">
        <Header />
        <WrapperStyles classNames="main-content">
          <ProductsPage />
          <Cart />
        </WrapperStyles>
      </WrapperStyles>
    </Provider>
  );
}

export default App;
