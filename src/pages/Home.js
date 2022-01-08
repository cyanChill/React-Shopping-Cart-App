import ImageSlider from "../components/ImageGallary/ImageSlider";
import AllProducts from "../components/Product/AllProducts";
import FavoriteProducts from "../components/Product/FavoriteProducts";
import ProductCategories from "../components/Product/ProductCategories";

import bannerList from "../assets/banner-list";

const Home = () => {
  const bannerProducts = bannerList.map((prod) => {
    return {
      id: prod.id,
      image: prod.desktopImg,
    };
  });

  return (
    <>
      <ImageSlider images={bannerProducts} auto buyBtn gallaryCtrl="hidden" />
      <FavoriteProducts />
      <ProductCategories />
      <AllProducts />
    </>
  );
};

export default Home;
