import "./App.css";
import Booking from "./components/booking/Booking";
import ContactUs from "./components/contactUs/ContactUs";
import { Footer } from "./components/footer/Footer";
import Guests from "./components/guests/Guests";
import Header from "./components/header/Header";
import Highlights from "./components/highlights/Highlights";
import Menu from "./components/menu/Menu";
import MenuSection from "./components/menuSection/MenuSection";

function App() {
	return (
		<>
			<Header />
			<MenuSection />
			<Menu />
			<Highlights />
			<Booking />
			<Guests />
			<ContactUs />
			<Footer />
		</>
	);
}

export default App;
