import SlideAnimLink from "../components/UI/SlideAnimLink";

const mainNavLinks = [
  <SlideAnimLink to="/" label="HOME" key="home" />,
  <SlideAnimLink to="/collections/all" label="ALL PRODUCTS" key="all" />,
  <SlideAnimLink to="/collections/clothing" label="CLOTHING" key="clothing" />,
  <SlideAnimLink to="/collections/accessories" label="GEAR" key="gear" />,
];

const legalLinks = [
  <SlideAnimLink to="/" label="Shipping Policy" muted key="shipping" />,
  <SlideAnimLink to="/" label="Customs & Duty Fees" muted key="customs" />,
  <SlideAnimLink to="/" label="Return Policy" muted key="return" />,
  <SlideAnimLink to="/" label="Terms and Conditions" muted key="terms" />,
  <SlideAnimLink to="/" label="Privacy Policy" muted key="privacy" />,
];

export { mainNavLinks, legalLinks };
