import { productJSON } from "../product";
export default function Price() {
  const product = JSON.parse(productJSON);
  const currencyFormat = Intl.NumberFormat("en-US");
  return (
    <div
      className="text-primary-emphasis m-2 my-3 font-weight-bold"
      style={{ fontSize: "3rem", fontWeight: 600 }}
    >
      &#8358; {currencyFormat.format(product.price)}
    </div>
  );
}
