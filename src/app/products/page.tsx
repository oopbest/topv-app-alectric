// import allproducts from "@mockup/allproducts.json";
import { cookies } from "next/headers";
import ProductItem from "@/components/products/product-item";
import {
  PRODUCT_DEFAULT_PAGE,
  PRODUCT_DEFAULT_SORT_BY,
  PRODUCT_PAGE_SIZE,
} from "@/const/product.const";
import { ProductDisplayConfig } from "@/interfaces/product-filter.interface";
import {
  composeQueryParams,
  getPageQuery,
  getFilterQuery,
} from "@/utils/query.util";

const fetchProducts = async () => {
  // Get Admin Token
  const cookieStore = cookies();
  const accessToken = cookieStore.get("ACCESS_TOKEN")?.value;

  // compose Query
  const brandId = String(process.env.NEXT_PUBLIC_DEFAULT_CATEGORY_ID);
  const productDisplayConfig: ProductDisplayConfig = {
    pageSize: PRODUCT_PAGE_SIZE,
    currentPage: PRODUCT_DEFAULT_PAGE,
    sortBy: PRODUCT_DEFAULT_SORT_BY,
    sortDirection: "ASC",
  };
  let query: string | undefined = undefined;
  if (brandId) {
    const queryCat = getFilterQuery({
      field: "brand",
      value: brandId.toString(),
      layer: 3,
      cond: "in",
    });
    const { pageSize, currentPage, sortBy, sortDirection } =
      productDisplayConfig;
    const queryPage = getPageQuery({
      pageSize: pageSize,
      currentPage: currentPage,
      sortBy: sortBy,
      sortDirection: sortDirection,
    });

    query = composeQueryParams([queryCat, queryPage]);
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/nextapi/products?${query}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    }
  );
  if (res.status !== 200) {
    console.log(res.status);
    throw new Error("Failed to fetch products");
  }
  return res.json();
};

const ProductList = async () => {
  const products = await fetchProducts();
  return (
    <div>
      <section className="flex mx-auto bg-theme-container">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ProductItem products={products?.items} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
