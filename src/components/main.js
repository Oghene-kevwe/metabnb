export const Main = () => {
  const data = [
    {
      id: 8,
      name: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      image: "/images/Frame 151content-img.svg",
      star: "/images/Frame 59528star.svg",
    },
    {
      id: 1,
      name: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      image: "/images/Frame 151content-img-1.svg",
      star: "/images/Frame 59528star.svg",
    },
    {
      id: 2,
      name: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      image: "/images/Frame 151content-img-2.svg",
      star: "/images/Frame 59528star.svg",
    },
    {
      id: 3,
      name: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      image: "/images/Frame 151content-img-3.svg",
      star: "/images/Frame 59528star.svg",
    },
    {
      id: 4,
      name: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      image: "/images/Frame 151content-img-4.svg",
      star: "/images/Frame 59528star.svg",
    },
    {
      id: 5,
      name: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      image: "/images/Frame 151content-img-5.svg",
      star: "/images/Frame 59528star.svg",
    },
    {
      id: 6,
      name: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      image: "/images/Frame 151content-img-6.svg",
      star: "/images/Frame 59528star.svg",
    },
    {
      id: 7,
      name: "Desert king",
      price: "1MBT per night",
      distance: "2345km away",
      duration: "available for 2weeks stay",
      image: "/images/Frame 151content-img-7.svg",
      star: "/images/Frame 59528star.svg",
    },
  ];

  return (
    <main>
      <header>
        <div className="header-container">
          <div className="header-content">
            <p className="rent">
              Rent a <span>Place</span> away from  <span>Home</span> in the
              <span> Metaverse</span>
            </p>
            <p>
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <form>
              <div className="form-container">
                <input type="text" placeholder="Search for location" />
                <span htmlFor="searchBar">Search</span>
              </div>
            </form>
          </div>
          <div className="header-image">
            <img src="/images/header-img.svg" alt="" />
          </div>
        </div>
        <div className="header-bar">
          <img src="/images/Frame 4041company-icon.svg" alt="" />
          <img src="/images/Group 4040company-icon.svg" alt="" />
          <img src="/images/Group 59537company-icon.svg" alt="" />
        </div>
      </header>
      <section>
        <h2 className="inspiration">Inspiration for your next adventure</h2>
        <div className=" nftHotel-container">
          {data.map(({ id, distance, name, duration, price, image, star }) => {
            return (
              <div key={id} className = 'nftHotel'>
                <div>
                <img src={image} alt={name} className = 'nftHotel-img' />
                <div>
                  <p>{name}</p>
                  <p>{price}</p>
                  <p>{distance}</p>
                  <p>{duration}</p>
                </div>
                <img src={star} alt={name} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="purple">
        <div className="purple-content">
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>learn more</button>
        </div>
        <div className="purple-img">
          <img src="/images/footer.svg" alt="footer-image" />
        </div>
      </section>
    </main>
  );
};
