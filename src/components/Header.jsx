import "./Header.css";

const Header = () => {
  return (
    <div>
      <img
        className="boxing-glove-image"
        src="/assets/boxing.jpg"
        alt="boxing photo"
      />
      <h1 className="header-text">Michigan's Boxing Clubs</h1>
    </div>
  );
};

export default Header;
