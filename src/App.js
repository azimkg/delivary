import "./App.css";
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";
import Routing from "./Routing";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  return (
    <AuthContextProvider>
      <CartContextProvider>
        <Routing />
      </CartContextProvider>
    </AuthContextProvider>
  );
}

export default App;
