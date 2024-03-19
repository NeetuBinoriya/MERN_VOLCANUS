

const Laptop = () => {
    const lap = {
        brandName : "HP Probook 430 g2",
        processor : "Intel i5 6th",
        ram : "4gb",
        SSD : "1TB",
        price : 50000 
    }
  return (
    <>
    {/* Inline Comment */}
    <div style={{backgroundColor: "blue", fontSize: "1.2rem", border: "2px solid yellow", width: "700px", margin: "auto", padding: "20px", borderRadius: "20px"}}>
      <h1>This Data is Coming from Laptop Component</h1>
      <h2>{lap.brandName}</h2>
      <h2>{lap.price}</h2>
      <h2>{lap.processor}</h2>
    </div>
    </>
  );
}

export default Laptop;
