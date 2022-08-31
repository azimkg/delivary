import "./App.css";
import AuthContextProvider from "./context/authContext";
import CartContextProvider from "./context/cartContext";
import Routing from "./Routing";

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
