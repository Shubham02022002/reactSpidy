const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        marginTop: "50px",
        borderRadius: "5px",
        boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>DELHI</ul>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>BANGLURU</ul>
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>MUMBAI</ul>
    </div>
  );
};

export default Footer;
