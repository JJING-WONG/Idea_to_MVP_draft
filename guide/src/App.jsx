import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";
import ProductPage from "./pages/ProductPage";
import PlasticPage from "./pages/PlasticPage";
import EtcPage from "./pages/EtcPage";

import Account from "./pages/Payment/Account";
import Cancel from "./pages/Payment/Cancel";
import Method from "./pages/Payment/Method";
import QR from "./pages/Payment/QR";

import Category from "./pages/Product/Category";
import Stock from "./pages/Product/Stock";

import Parking from "./pages/Etc/Parking";
import Toilet from "./pages/Etc/Toilet";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/plastic" element={<PlasticPage />} />
      <Route path="/etc" element={<EtcPage />} />

      <Route path="/payment/account" element={<Account />} />
      <Route path="/payment/cancel" element={<Cancel />} />
      <Route path="/payment/method" element={<Method />} />
      <Route path="/payment/qr" element={<QR />} />

      <Route path="/product/category" element={<Category />} />
      <Route path="/product/stock" element={<Stock />} />

      <Route path="/etc/parking" element={<Parking />} />
      <Route path="/etc/toilet" element={<Toilet />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}