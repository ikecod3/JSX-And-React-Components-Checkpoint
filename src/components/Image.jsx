import { Card } from "react-bootstrap";

import { productJSON } from "../product";

export default function Image() {
  const product = JSON.parse(productJSON);
  return (
    <>
      <div className="d-flex flex-wrap border-2 align-items-center justify-content-center rounded">
        <Card.Img
          alt="produuct image"
          src={product.image}
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </>
  );
}
