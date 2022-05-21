import hero from "../media/simon-noh-0rmby-3OTeI-unsplash.jpg";
const Header = () => {
  return (
    <div className="headerContainer">
      {/* <div className="hero"></div>; */}
      <img src={hero} alt='hero image'/>
    </div>
  );
};

export default Header;
