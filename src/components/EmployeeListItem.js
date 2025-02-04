function EmployeeListItem() {
  return (
    <div style={{ border: "solid red", display: "flex" }}>
      <div style={{ width: "30%" }}>
        <img src="../img/photo.jpg"></img>
      </div>
      <div>
        <h5>Name</h5>
        <p>Title</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
