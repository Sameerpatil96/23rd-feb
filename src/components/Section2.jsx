import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
function Section2(props) {
  if (!props.selectedProduct) {
    return <div style={{ color: "gray" }}>Please Select a product first</div>;
  }
  return (
    <div className="d-flex flex-column">
      <h1> Showing Details for {props.selectedProduct.name}</h1>
      <h4>Price:{props.selectedProduct.price}</h4>
      <button
        variant="primary"
        onClick={() => {
          propTypes.setShowImage(true);
        }}
      >
        Photo Dikhao
      </button>{" "}
    </div>
  );
}
export default Section2;
