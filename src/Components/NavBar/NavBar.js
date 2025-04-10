import "./NavBar.css";

function NavBar({ searchTerm, onSearchChange }) {
  return (
    <div className="container">
      <div className="logo">Cageflix</div>
      <form>
        <input
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
          type="text"
          placeholder="Search for movies"
        />
      </form>
    </div>
  );
}

export default NavBar;
