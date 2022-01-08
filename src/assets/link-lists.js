import SlideAnimLink from "../components/UI/SlideAnimLink";

const mainNavLinks = [
  <SlideAnimLink to="/" label="HOME" key="home" />,
  <SlideAnimLink to="/collections/all" label="ALL PRODUCTS" key="all" />,
  <SlideAnimLink to="/collections/clothing" label="CLOTHING" key="clothing" />,
  <SlideAnimLink to="/collections/accessories" label="GEAR" key="gear" />,
];

const legalLinks = [
  <SlideAnimLink
    to="/shipping-policy"
    label="Shipping Policy"
    muted
    key="shipping"
  />,
  <SlideAnimLink
    to="/customs-duty-fees"
    label="Customs & Duty Fees"
    muted
    key="customs"
  />,
  <SlideAnimLink
    to="/return-policy"
    label="Return Policy"
    muted
    key="return"
  />,
  <SlideAnimLink to="/" label="Terms and Conditions" muted key="terms" />,
  <SlideAnimLink
    to="/privacy-policy"
    label="Privacy Policy"
    muted
    key="privacy"
  />,
];

export { mainNavLinks, legalLinks };
