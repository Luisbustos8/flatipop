import "./App.css";
import Alert from "@mui/material/Alert";
import Layout from "./components/Layout/layout";
import AddProduct from "./pages/addProduct";
import ProductsListPage from "./pages/productsListPage";
function App() {
  return (
    <div className="App">
      {/* <ProductsListPage /> */}
      <AddProduct />
    </div>
  );
}

export default App;
