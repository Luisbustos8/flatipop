import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./pages/addProduct";
import ProductsListPage from "./pages/productsListPage";
import Snackbar from "@mui/material/Snackbar";
import Alert from "../src/utils/alert";
function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductsListPage />} />
        <Route path="/newProduct" element={<AddProduct setOpen={setOpen} />} />
      </Routes>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          ¡Su producto se publicó correctamente!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
