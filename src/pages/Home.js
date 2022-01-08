import { useState, useEffect } from "react";

import ImageSlider from "../components/ImageGallary/ImageSlider";
import AllProducts from "../components/Product/AllProducts";
import FavoriteProducts from "../components/Product/FavoriteProducts";
import ProductCategories from "../components/Product/ProductCategories";

import bannerList from "../assets/banner-list";

const Home = () => {
  const [bannerProducts, setBannerProducts] = useState(
    bannerList.map((prod) => {
      return {
        id: prod.id,
        image:
          document.body.clientWidth >= 640 ? prod.desktopImg : prod.mobileImg,
      };
    })
  );
  const [desktopImgs, setDesktopImgs] = useState(
    document.body.clientWidth >= 640
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (desktopImgs && entries[0].target.clientWidth < 640) {
        setBannerProducts(
          bannerList.map((prod) => {
            return {
              id: prod.id,
              image: prod.mobileImg,
            };
          })
        );
        setDesktopImgs(false);
      } else if (!desktopImgs && entries[0].target.clientWidth >= 640) {
        setBannerProducts(
          bannerList.map((prod) => {
            return {
              id: prod.id,
              image: prod.desktopImg,
            };
          })
        );
        setDesktopImgs(true);
      }
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
    };
  }, [desktopImgs]);

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
