const Navbar = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "orange",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>HOME</ul>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          CONTACT US
        </ul>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>ABOUT</ul>
      </div>
    </>
  );
};

export default Navbar;
