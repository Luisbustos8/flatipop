import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/AddProduct";
import ProductsListPage from "./pages/ProductsListPage";
import Snackbar from "@mui/material/Snackbar";
import Alert from "../src/reusable/Alert";
import { ProductProvider } from "./context/ProductProvider";
import Error404 from "./pages/Error404";

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div className="App">
      <ProductProvider>
        <Routes>
          <Route path="/" element={<ProductsListPage />} />
          <Route
            path="/newProduct"
            element={<AddProduct setOpen={setOpen} />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            ¡Su producto se publicó correctamente!
          </Alert>
        </Snackbar>
      </ProductProvider>
    </div>
  );
}

export default App;
