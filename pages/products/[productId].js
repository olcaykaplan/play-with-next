// Dynamic page :
// [] => www.doman-name.com/products/product-id-here

import { useRouter } from "next/router";
function DyamicPage() {
  const router = useRouter();
  const productId = router.query.productId;
  // send a request to do Backedn API
  // to fetch information of the selected product in product list page
  return (
    <div>
      Selected Product Info Here <br />
      Product : {productId}
    </div>
  );
}



export default DyamicPage;
