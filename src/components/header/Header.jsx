import "./Header.css";

const Header = () => {
  return (
    <h2
        className="header"
        onClick={() => window.scroll(0, 0)}>
      Movies
    </h2>
  );
};

export default Header;
