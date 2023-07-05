import React from "react";
import Card from "../../components/Card";
import Filter from "../../components/Filter";
import "./home.css";
import cardImage1 from "../../assets/box1.webp";
import Newsletter from "../../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div>
          <h1 className="heading">AARP Coupon & Promo Codes</h1>
          <div className="grid_container">
            <div className="filter">
              <Filter />
            </div>
            <div className="grid_card">
              <Card
                className="box"
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
              <Card
                img={cardImage1}
                title="10% Off Orders For Military, First Responders & More"
                subheading="SALE"
                uses="8 Uses Today"
              />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Home;
