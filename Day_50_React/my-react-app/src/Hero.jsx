

const Hero = () => {
  // Internal Styling
  const superman = {
    backgroundColor: "green",
    color:"black",
    padding: "20px",
    margin: "20px",
    borderRadius:"20px",
    border: "5px solid white"
  }
  return (
    <div style={superman}>
    <h1>This Data is Coming from Hero Component</h1>
      <h1>Superman</h1>
      <h2>Spiderman</h2>
      <h3>Batman</h3>
    </div>
  );
}

export default Hero;
