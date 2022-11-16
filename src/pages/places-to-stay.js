export const PlacesToStay = ()=>{
    
    const data = [
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
          id: 7,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151content-img-7.svg",
          star: "/images/Frame 59528star.svg",
        },
        {
          id: 9,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151placesToStay9.png",
          star: "/images/Frame 59528star.svg",
        },
        {
          id: 10,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151place-to-stay-img-2.svg",
          star: "/images/Frame 59528star.svg",
        },
        {
          id: 11,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151place-to-stay-img-3.svg",
          star: "/images/Frame 59528star.svg",
        },
        {
          id: 12,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151place-to-stay-img-4.svg",
          star: "/images/Frame 59528star.svg",
        },
        {
          id: 13,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151place-to-stay-img-5.svg",
          star: "/images/Frame 59528star.svg",
        },
        {
          id: 14,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151place-to-stay-img-6.svg",
          star: "/images/Frame 59528star.svg",
        },
        {
          id: 15,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151place-to-stay-img-7.svg",
          star: "/images/Frame 59528star.svg",
        },
        {
          id: 16,
          name: "Desert king",
          price: "1MBT per night",
          distance: "2345km away",
          duration: "available for 2weeks stay",
          image: "/images/Frame 151place-to-stay-img.svg",
          star: "/images/Frame 59528star.svg",
        },
      ];

    return (
        <section className="places-section">
            <div className="category">
                <div className="places">
                <p>Restaurant</p>
                <p>Cottage</p>
                <p>Castle</p>
                <p>Fantast city</p>
                <p>Beach</p>
                <p>Carbins</p>
                <p>Off-grid</p>
                <p>Farm</p>
                </div>
                <div className="location">
                    <p>location</p> 
                    <img src="/images/setting-5setting-icon.svg" alt="" />
                </div>
            </div>
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
    )
}












