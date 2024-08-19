import "./carousel.css";

function Carousel() {
  const brandList = [
    "/banners/amazon.png",
    "/banners/myntra.png",
    "/banners/meesho.png",
    "/banners/flipkart.png",
    "/banners/ajio.png",
  ];

  const festiveImg = [
    {
      src: "/banners/independenceday.png",
      link: "https://www.independenceday.com",
    },
    { src: "banners/rakshabandhan.png", link: "https://www.rakshabandhan.com" },
    { src: "banners/friendshipday.png", link: "https://www.friendshipday.com" },
  ];

  return (
    <div className="bannerContainer">
      <img className="bannerImage" src="/banners/staticBanner.png" />
      <div className="contentContainer">
        <h1>FIND DEALS THAT FITS IN YOUR BUDGET </h1>
        <p>
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="shopNowCTA">Shop Now</button>

        <div className="info-container">
          <div>
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div>
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div>
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      <div className="textSection">
        <h2>NOW OR NEVER</h2>
        <h3>DEALS</h3>
      </div>

      <div className="trendSection">
        <div>
          Deals Ends in <span>03 h</span> : <span>30 m</span> : <span>10</span>
        </div>
        <img className="trendImg" src="/banners/statictrending.png" />
      </div>

      <div className="festiveSection">
        <h1 className="festiveText">FESTIVE SALE IS NOW LIVE</h1>

        <div className="festiveSectionImg">
          {festiveImg?.map((festive, index) => {
            return (
              <a
                key={index}
                href={festive.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="sectionImg"
                  src={festive.src}
                  alt={`Festive Image ${index + 1}`}
                />
              </a>
            );
          })}
        </div>
      </div>

      <div className="brand-banner">
        {brandList?.map((brands) => {
          return <img className="brand-logo" src={brands} />;
        })}
      </div>
    </div>
  );
}

export default Carousel;
