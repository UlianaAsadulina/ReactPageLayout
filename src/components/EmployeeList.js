import EmployeeListItem from "./EmployeeListItem.js";

function EmployeeList() {
  return (
    <div style={{ border: "solid purple" }}>
      Employee List
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
    </div>
  );
}

export default EmployeeList;
