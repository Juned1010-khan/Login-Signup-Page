import React from "react";

const Table = () => {
  const [show, setShow] = React.useState(true);

  const table = () => {
    setShow(!show);
  };

  return (
    <>
      <table
        style={{
          border: "1px solid black",
          textAlign: "center",
          color: "black",
        }}
      >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {show && (
          <>
            <tr>
              <td>Juned</td>
              <td>juned@gmail.com</td>
              <td>21</td>
            </tr>
            <tr>
              <td>Khan</td>
              <td>Khan@gmail.com</td>
              <td>20</td>
            </tr>
        
          </>
        )}
      </table>

      <button
        onClick={table}
        style={{ backgroundColor: "black", color: "white", border: 2 }}
      >
        toggle table
      </button>
    </>
  );
};

export default Table;