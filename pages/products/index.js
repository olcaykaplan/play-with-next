//Link is special for nextjs. It prevents to reload the page and making a request for new html dom,
// with the link its change the route but acting like a single page
import Link from "next/link";

function ProductList() {
  return (
    <div>
      Product List Page <br/>
      <Link href="/products/1">Product 1</Link> <br/>
      <Link href="/products/2">Product 2</Link> <br/>
      <Link href="/products/3">Product 3</Link> <br/>
      <Link href="/products/4">Product 4</Link> <br/>
    </div>
  );
}
export default ProductList;
