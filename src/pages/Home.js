import ImageSlider from "../components/ImageGallary/ImageSlider";
import AllProducts from "../components/Product/AllProducts";
import FavoriteProducts from "../components/Product/FavoriteProducts";
import ProductCategories from "../components/Product/ProductCategories";

const Home = () => {
  return (
    <>
      <ImageSlider auto />
      <FavoriteProducts />
      <ProductCategories />
      <AllProducts />
    </>
  );
};

export default Home;
