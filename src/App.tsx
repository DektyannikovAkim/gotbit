import { useContext } from "react";
import { ConnectBtn } from "./components/Connect";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ProductStoreContext } from "./store/products";
import * as styles from "./style";
import { ProductsContent } from "./components/ProductsContent";
import { observer } from "mobx-react";

function App() {
  const context = useContext(ProductStoreContext);
  return (
    <styles.Parant>
      <Header />
      <styles.Content>
        {context.authorizationState ? <ProductsContent /> : <ConnectBtn />}
      </styles.Content>
      <Footer />
    </styles.Parant>
  );
}

export default observer(App);
