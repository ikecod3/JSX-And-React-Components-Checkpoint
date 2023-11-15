import { Card } from "react-bootstrap";
import { productJSON } from "../product";

export default function Name() {
  const product = JSON.parse(productJSON);
  return (
    <Card.Title className="text-primary-emphasis m-2" style={{ fontSize: 40 }}>
      {product.name}
    </Card.Title>
  );
}
