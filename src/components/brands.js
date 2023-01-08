import React from "react";

import "./styles/brands.css";

const Brands = () => {
  return (
    <>
      <section className="brandsPartnerships justify-content-center align-items-center">
        <div className="row brandsPartnershipsRow justify-content-center align-items-center">
          <div className="col-12 col-sm-12 partnershipsTitle">
            <h2>
              We've build long lasting partnerships with the most ambitious
              brands across the globe{" "}
            </h2>
          </div>
          <div className="col-12 col-lg-2 col-sm-4 cardAnheuserBusch">
            <img
              src="/assets/img/home/Partnerships/AnheuserBusch.webp"
              alt=""
            />
          </div>
          <div className="col-12 col-lg-2 col-sm-4 cardMarriott">
            <img src="/assets/img/home/Partnerships/Marriott.webp" alt="" />
          </div>
          <div className="col-12 col-lg-2 col-sm-4 cardCiroc">
            <img src="/assets/img/home/Partnerships/Ciroc.webp" alt="" />
          </div>
          <div className="col-12 col-lg-2 col-sm-6  cardRumor">
            <img src="/assets/img/home/Partnerships/Rumor.webp" alt="" />
          </div>
          <div className="col-12 col-lg-2 col-sm-6  cardLogoGreen">
            <img
              src="/assets/img/home/Partnerships/GH-Logo-Green.webp"
              alt=""
            />
          </div>
          <div className="row justify-content-center align-items-center ">
              <div className="col-12 col-lg-2 col-sm-4 cardAppcore">
                <img
                  src="/assets/img/home/Partnerships/Appcore.webp"
                  alt=""
                />
              </div>
              <div className="col-12 col-lg-2 col-sm-4 cardHennessyVSOP">
                <img src="/assets/img/home/Partnerships/Hennessy-VSOP.webp" alt="" />
              </div>
              <div className="col-12 col-lg-2 col-sm-4 cardPelicargo">
                <img src="/assets/img/home/Partnerships/Pelicargo.webp" alt="" />
              </div>
              <div className="col-12 col-lg-2 col-sm-6 cardMoet">
                <img src="/assets/img/home/Partnerships/Moet-Hennessy-USA.webp" alt="" />
              </div>
              <div className="col-12 col-lg-2 col-sm-6 cardBalanceBunny">
                <img
                  src="/assets/img/home/Partnerships/Balance-Bunny.webp"
                  alt=""
                />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;

