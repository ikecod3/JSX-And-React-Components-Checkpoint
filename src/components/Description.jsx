import { Card } from "react-bootstrap";
import { productJSON } from "../product";

export default function Description() {
  const product = JSON.parse(productJSON);
  return (
    <Card.Text className="m-2 fs-3 text-justify">
      {product.description}
    </Card.Text>
  );
}
