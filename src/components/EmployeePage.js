import Header from "./Header";
function EmployeePage() {
  return (
    <div style={{ border: "solid brown", width: "50%" }}>
      Employee Page
      <Header />
      <table
        style={{
          border: "1px solid grey",
          margin: "10px",
          borderCollapse: "separate",
        }}
      >
        <tbody>
          <tr style={{ borderBottom: "1px solid gray" }}>
            <td style={{ width: "30%", padding: "10px" }}>
              <img
                src="../img/photo.jpg"
                alt="PHOTO"
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid black",
                  borderRadius: "50%",
                }}
              />
            </td>
            <td style={{ padding: "10px" }}>
              <h3>Name</h3>
              <p>Title</p>
            </td>
          </tr>
          <tr style={{ padding: "10px" }}>
            <h4>Call Office </h4>
            <p>Number </p>
          </tr>
          <tr style={{ padding: "10px" }}>
            <h4>Call Mobile </h4>
            <p>Number </p>
          </tr>
          <tr style={{ padding: "10px" }}>
            <h4>SMS </h4>
            <p>Number </p>
          </tr>

          <tr style={{ padding: "10px" }}>
            <h4>Send Email</h4>

            <p>Address</p>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default EmployeePage;
