import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductsPreview from "./pages/ProductsPreview/ProductsPreview";
import Error from "./pages/Error/Error";
import PrivateRoute from "./privateRoute";
import ProductInfo from "./pages/ProductInfo/ProductInfo";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/products-tabel" element={<Products />} />
        <Route path="/products-preview" element={<ProductsPreview />} />
        <Route path="/products-preview/:productId" element={<ProductInfo />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
