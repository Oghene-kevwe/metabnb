export const Footer = () => {
  const data = [
    {
      header: "Community",
      content1: "NFTs",
      content2: "Tokens",
      content3: "Landlords",
      content4: "Discord",
    },
    {
      header: "Places",
      content1: "Castle",
      content2: "Farms",
      content3: "Beach",
      content4: "Learn more",
    },
    {
      header: "About us",
      content1: "Road map",
      content2: "Creators",
      content3: "Career",
      content4: "Contact us",
    },
  ];

  return (
    <footer className ="footer">
      <div className="socials-content">
      <div>
        <img src="/images/Groupsite-logo-monochrome.svg" alt="footer-logo" />
      </div>
      {/* socials */}
      <div className="socials">
        <img src="/images/facebook-263-721950social-icons.svg" alt="" />
        <img src="/images/instagram-216-721958social-icons.svg" alt="" />
        <img src="/images/twitter-241-721979social-icons.svg" alt="" />
      </div>
      <div>
        <span> &copy; 2022 Metabnb</span>
      </div>
      </div>
      {data.map(({ header, content1, content2, content3, content4 }) => {
        return (
          <div key={header}>
            <div className="footer-content-container">
              <h2>{header}</h2>
              <p>{content1}</p>
              <p>{content2}</p>
              <p>{content3}</p>
              <p>{content4}</p>
            </div>
          </div>
        );
      })}
    </footer>
  );
};
