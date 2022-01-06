import ImageSlider from "../components/ImageGallary/ImageSlider";
import FavoriteProducts from "../components/Product/FavoriteProducts";
import ProductCategories from "../components/Product/ProductCategories";

const Home = () => {
  return (
    <>
      <ImageSlider auto />
      <FavoriteProducts />
      <ProductCategories />
      {/* All products */}
    </>
  );
};

export default Home;
