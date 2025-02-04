import "../styles.css";
import Header from "./Header";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <div style={{ border: "solid orange", width: "50%" }}>
      Home page
      <Header />
      <SearchBar />
    </div>
  );
}

export default HomePage;
