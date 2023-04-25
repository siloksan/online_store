import {
	ADMIN_ROUTE,
	BASKET_ROUTE, CONTACTS_ROUTE,
	DESCRIPTION_ROUTE,
	FAVORITES_ROUTE, LOGIN_ROUTE,
	ORDERS_ROUTE, PAYMENT_ROUTE,
	PRODUCT_ROUTE, REGISTRATION_ROUTE,
	SHOP_ROUTE
} from "./utils/const";
import AdminPage from "./components/pages/AdminPage/AdminPage";
import Favourites from "./components/Favourites/Favourites";
import Orders from "./components/pages/Orders/Orders";
import Basket from "./components/pages/Basket/Basket";
import Catalog from "./components/Catalog/Catalog";
import PageToy from "./components/pages/PageToy/PageToy";
import StoreDescription from "./components/pages/StoreDescription/StoreDescription";
import AboutPayment from "./components/pages/Payment/Payment";
import Contacts from "./components/pages/Contacts/Contacts";
import Auth from "./components/pages/Auth/Auth";

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		Component: AdminPage
	},
	{
		path: FAVORITES_ROUTE,
		Component: Favourites
	},
	{
		path: ORDERS_ROUTE,
		Component: Orders
	},
	{
		path: BASKET_ROUTE,
		Component: Basket
	}
]

export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		Component: Auth
	},
	{
		path: REGISTRATION_ROUTE,
		Component: Auth
	},
	{
		path: SHOP_ROUTE,
		Component: Catalog
	},
	{
		path: PRODUCT_ROUTE + '/:id',
		Component: PageToy
	},
	{
		path: DESCRIPTION_ROUTE,
		Component: StoreDescription
	},
	{
		path: PAYMENT_ROUTE,
		Component: AboutPayment
	},
	{
		path: CONTACTS_ROUTE,
		Component: Contacts
	}
]