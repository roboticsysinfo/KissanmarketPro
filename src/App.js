import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./app.css"
import RouteScrollToTop from "./helper/RouteScrollToTop";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import HomePageOne from "./pages/HomePageOne";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import FarmerLogin from "./components/farmer/FarmerLogin";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FarmerProfile from "./pages/farmer/FarmerProfile";
import FarmerDashboard from "./components/farmer/FarmerDashboard";
import FarmerLayout from "./pages/layout/FamerLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLayout from "./pages/layout/AdminLayout";
import FarmersList from "./pages/admin/FarmersList";
import VendorPage from "./pages/VendorPage";
import AddProduct from "./pages/farmer/product/AddProduct";
import PrivateRoute from "./routes/PrivateRoutes";
import FarmerRegister from './components/farmer/FarmerRegister'
import AdminLogin from "./components/admin/AdminLogin";
import Users from "./pages/admin/Users";
import Settings from './pages/admin/Settings';
import KycRequestsList from "./pages/admin/KycRequestsList";
import ShopDetail from "./pages/farmer/shop/ShopDetail";
import AddShop from './pages/farmer/shop/AddShop';
import ProductsList from './pages/farmer/product/ProductsList';
import DeliveryPreferencePage from "./pages/farmer/DeliveryPreference";
import FarmDetail from "./pages/farmer/FarmDetail";
import CropsDetail from "./pages/farmer/CropsDetail";
import CategoryList from "./pages/admin/CategoryList";
import FarmerDetailPage from "./pages/FarmerDetailPage";
import Checkout from "./components/Checkout";
import FarmerOrder from "./pages/farmer/FarmerOrder";
import OrderRequests from "./pages/admin/OrderRequests";
import CategoryShopPage from "./pages/CategoryShopPage";
import AboutPage from "./pages/AboutPage";
import SiteSettings from "./pages/admin/SiteSettings";
import BlogCategory from "./pages/admin/BlogCategory";
import AddBlog from "./pages/admin/AddBlog";
import BlogsList from "./pages/admin/BlogsList";
import PageNotFound from "./components/PageNotFound";
import ShopByLocation from "./components/ShopByLocation";
import ShopLocation from "./pages/ShopLocation";
import RedeemProductsList from "./pages/admin/RedeemProductsList";
import AddRedeemProduct from "./pages/admin/AddRedeemProduct";
import HelpSupportQuery from "./pages/admin/HelpSupportQuery";
import AddMessage from "./pages/admin/AddMessage";
import MessagesList from "./pages/admin/MessagesList";
import FarmerPointsTable from "./pages/admin/FarmerPointsTable";
import FarmerRedeemHistory from "./pages/admin/FarmerRedeemHistory";
import FarmerReferredList from "./pages/admin/FarmerReferredList";
import FarmingTips from "./pages/admin/FarmingTips";
import PointsTransactionsList from "./pages/admin/PointsTransactionsList";
import AddCustomerProduct from "./pages/admin/AddCustomerProduct";
import CustomerProductsList from "./pages/admin/CustomerProductsList";
import Customers from "./pages/admin/Customers";
import CustomerReferredList from "./pages/admin/CustomerReferredList";
import CustomerPointsTable from "./pages/admin/CustomerPointsTable";
import CustomerPointsTransactions from "./pages/admin/CustomerPointsTransactions";
import CustomerRedeemHistory from "./pages/admin/CustomerRedeemHistory";
import CustomerHelpSupport from "./pages/admin/CustomerHelpSupport";
import ShopDetailsPage from "./pages/ShopDetailsPage"
import Farmers from "./pages/Farmers";
import SitePrivacyPolicyPage from "./pages/SitePrivacyPolicyPage";
import SiteTermsConditionsPage from "./pages/SiteTermsConditionsPage";
import KGMobileAppsPage from "./pages/KGMobileAppsPage";
import UpgradePlans from "./pages/farmer/UpgradePlans";
import FarmerPlansHistory from "./pages/admin/FarmerPlansHistory";
import NotificationPage from "./pages/NotificationPage"
import FarmerNotifications from "./pages/farmer/FarmerNotifications";
import EditBlog from "./pages/admin/EditBlog";
import FarmerInvoicePage from "./pages/admin/FarmerInvoicePage";
import CustomerInvoicePage from "./pages/admin/CustomerInvoicePage";


function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomePageOne />} />
        <Route path="products" element={<ShopPage />} />
        <Route path="notifications" element={<NotificationPage />} />
        <Route path="farmers" element={<Farmers />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="shops" element={<VendorPage />} />
        <Route path="product/:slug" element={<ProductDetailsPageOne />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="blogs" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogDetailsPage />} />
        <Route path="farmer/:slug" element={<FarmerDetailPage />} />
        <Route path="shop/:slug" element={<ShopDetailsPage />} />
        <Route path="category/:slug" element={<CategoryShopPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="shops/:locationvalue" element={<ShopLocation />} />

        <Route path="kissan-growth-mobile-apps" element={<KGMobileAppsPage />} />

        <Route path="privacy-policy" element={<SitePrivacyPolicyPage />} />
        <Route path="terms-and-conditions" element={<SiteTermsConditionsPage />} />

        {/* Login and Register Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />


        {/* Customer Routes */}
        <Route
          path="/checkout"
          element={
            <PrivateRoute allowedRoles={["customer"]} redirectTo="/login">
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute allowedRoles={["customer"]} redirectTo="/login">
              <AccountPage />
            </PrivateRoute>
          }
        />

        {/* Admin Routes */}

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute allowedRoles={["admin"]} redirectTo="/admin/login">
              <AdminLayout />
            </PrivateRoute>
          }
        >

          <Route index element={<AdminDashboard />} />

          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="categories-list" element={<CategoryList />} />

          <Route path="farmers" element={<FarmersList />} />

          <Route path="kyc-requests" element={<KycRequestsList />} />

          <Route path="users" element={<Users />} />

          <Route path="order-requests" element={<OrderRequests />} />

          <Route path="blog-categories" element={<BlogCategory />} />

          <Route path="add-blog" element={<AddBlog />} />

          <Route path="edit-blog/:id" element={<EditBlog />} />

          <Route path="blogs-list" element={<BlogsList />} />

          <Route path="settings" element={<SiteSettings />} />

          <Route path="help-support-tickets" element={<HelpSupportQuery />} />

          <Route path="customer-help-support" element={<CustomerHelpSupport />} />

          <Route path="add-redeem-products" element={<AddRedeemProduct />} />

          <Route path="redeem-products-list" element={<RedeemProductsList />} />

          <Route path="add-message" element={<AddMessage />} />

          <Route path="messages-list" element={<MessagesList />} />

          <Route path="farmer-points-table" element={<FarmerPointsTable />} />

          <Route path="customer-points-table" element={<CustomerPointsTable />} />

          <Route path="farmers-redeem-history" element={<FarmerRedeemHistory />} />

          <Route path="customers-redeem-history" element={<CustomerRedeemHistory />} />

          <Route path="farmer-referred-list/:id" element={<FarmerReferredList />} />

          <Route path="farming-tips" element={<FarmingTips />} />

          <Route path="points-transactions-list/:farmerId" element={<PointsTransactionsList />} />

          <Route path="add-customer-products" element={<AddCustomerProduct />} />

          <Route path="customer-products-list" element={<CustomerProductsList />} />

          <Route path="customers" element={<Customers />} />

          <Route path="customer-referred-list/:id" element={<CustomerReferredList />} />

          <Route path="customer-points-table" element={<CustomerPointsTable />} />

          <Route path="customer-points/:customerId" element={<CustomerPointsTransactions />} />

          <Route path="farmer-plans-history" element={<FarmerPlansHistory />} />

          <Route path="farmer-invoice-details/:orderId" element={<FarmerInvoicePage />} />

          <Route path="customer-invoice-details/:orderId" element={<CustomerInvoicePage />} />

        </Route>


        {/* Farmer Routes */}

        <Route path="/farmer/login" element={<FarmerLogin />} />
        <Route path="/farmer/register" element={<FarmerRegister />} />

        <Route
          path="/farmer"
          element={
            <PrivateRoute allowedRoles={["farmer"]} redirectTo="login">
              <FarmerLayout />
            </PrivateRoute>
          }
        >

          <Route path="farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products-list" element={<ProductsList />} />
          <Route path="farmer-profile" element={<FarmerProfile />} />
          <Route path="add-shop" element={<AddShop />} />
          <Route path="shop-details" element={<ShopDetail />} />
          <Route path="delivery-preference" element={<DeliveryPreferencePage />} />
          <Route path="farm-details" element={<FarmDetail />} />
          <Route path="crops-detail" element={<CropsDetail />} />
          <Route path="orders" element={<FarmerOrder />} />
          <Route path="upgrade-plans" element={<UpgradePlans />} />
          <Route path="notifications" element={<FarmerNotifications />} />

        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
