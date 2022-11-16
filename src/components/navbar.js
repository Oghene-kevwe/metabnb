import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";

export const Navbar = () => {
  // modal
  const [show, Setshow] = useState(false);

  // links element
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
    <>
      {show && <Modal />}
      <nav>
        <div className="logo-button-container">
          <div className="logo">
            <img src="/images/site-logo.svg" alt="logo" />
          </div>
          {/* menu button */}
          <button onClick={showMenu} className="menu-btn">
            <BiMenu />
          </button>
        </div>
        {/* links */}
        <div className="links-container" ref={linksContainer}>
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
            <li className="connectWallet" onClick={() => Setshow(!show)}>
              <p>Connect wallet</p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

const Modal = () => {
  return (
    <div className="div-overlay">
      <article>
        <div className="overlay-header">
          <div>
            <h3>Connect Wallet</h3>
            <GrClose className="close-btn" />
          </div>
          <div className="line"></div>
        </div>
        <div className="overlay-content">
          <p className="choose-wallet">Choose your preferred wallet</p>
          {/* metamask */}
          <div className="wallet metamask">
            <div>
              <img src="/images/image 66metamask-modal-page.svg" alt="" />
              <p>Metamask</p>
            </div>
            <img src="/images/Vectorright-arrow.png" alt="" />
          </div>
          {/* wallet connect */}
          <div className="wallet">
            <div>
              <img src="/images/walleConnect.svg" alt="" />
              <p>WalletConnect</p>
            </div>
            <img src="/images/Vectorright-arrow.png" alt="" />
          </div>
        </div>
      </article>
    </div>
  );
};
