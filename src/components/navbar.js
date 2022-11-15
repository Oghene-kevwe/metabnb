import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef } from "react";
export const Navbar = () => {
  const links = useRef(null);
  const linksContainer = useRef(null);

  const showMenu = () => {
    const linksContainerHeight =
      linksContainer.current.getBoundingClientRect().height;
    const linksHeight = links.current.getBoundingClientRect().height;
    if (linksContainerHeight === 0) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = 0;
    }
  };

  useEffect(() => {
    showMenu();
  });

  return (
    <nav >
      <div className="logo-button-container">
        <div className="logo">
          <img src="/images/site-logo.svg" alt="logo" />
        </div>
        {/* menu button */}
        <button onClick={showMenu} className='menu-btn'>
          <BiMenu />
        </button>
      </div>
      {/* links */}
      <div
        className="links-container"
        ref={linksContainer}>
        <ul className="links" ref={links}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/places-to-stay">Place to stay</Link>
          </li>
          <li>
            <a href="#">NFTs</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li className="connectWallet">       
        <a href="">Connect wallet</a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};
