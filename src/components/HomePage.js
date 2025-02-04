import "../styles.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function HomePage() {
  return (
    <div style={{ border: "solid orange", width: "50%" }}>
      <Header />
      <SearchBar />
      <EmployeeList></EmployeeList>
    </div>
  );
}

export default HomePage;
