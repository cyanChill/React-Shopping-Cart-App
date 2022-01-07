import SlideAnimLink from "../components/UI/SlideAnimLink";

const mainNavLinks = [
  <SlideAnimLink to="/" label="HOME" />,
  <SlideAnimLink to="/collections/all" label="ALL PRODUCTS" />,
  <SlideAnimLink to="/collections/clothing" label="CLOTHING" />,
  <SlideAnimLink to="/collections/gear" label="GEAR" />,
  <SlideAnimLink to="/collections/gift-cards" label="GIFT CARDS" />,
];

const legalLinks = [
  <SlideAnimLink to="/" label="Shipping Policy" muted />,
  <SlideAnimLink to="/" label="Customs & Duty Fees" muted />,
  <SlideAnimLink to="/" label="Return Policy" muted />,
  <SlideAnimLink to="/" label="Terms and Conditions" muted />,
  <SlideAnimLink to="/" label="Privacy Policy" muted />,
];

export { mainNavLinks, legalLinks };
