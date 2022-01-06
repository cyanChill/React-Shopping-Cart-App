import ImageSlider from "../components/ImageGallary/ImageSlider";
import FavoriteProducts from "../components/Product/FavoriteProducts";

const Home = () => {
  return (
    <>
      <ImageSlider auto />
      <h2>Home Page</h2>
      <FavoriteProducts />
    </>
  );
};

export default Home;
