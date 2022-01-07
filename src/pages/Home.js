import ImageSlider from "../components/ImageGallary/ImageSlider";
import AllProducts from "../components/Product/AllProducts";
import FavoriteProducts from "../components/Product/FavoriteProducts";
import ProductCategories from "../components/Product/ProductCategories";

import bannerList from "../assets/banner-list";

const Home = () => {
  return (
    <>
      <ImageSlider images={bannerList} auto buyBtn gallaryCtrl="hidden" />
      <FavoriteProducts />
      <ProductCategories />
      <AllProducts />
    </>
  );
};

export default Home;
