import {
  ABOUT_US_ROUTE_PATH,
  PRODUCTS_ROUTE_PATH,
  STORES_ROUTE_PATH,
  WARRANTY_ROUTE_PATH,
} from "@/const/route-paths.const";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && (
        <Link href="/" className="hover:underline underline-offset-4">
          หน้าแรก
        </Link>
      )}
      <Link
        href={PRODUCTS_ROUTE_PATH}
        className="hover:underline underline-offset-4"
      >
        สินค้า
      </Link>
      <Link
        href={WARRANTY_ROUTE_PATH}
        className="hover:underline underline-offset-4"
      >
        การรับประกัน
      </Link>
      <Link
        href={STORES_ROUTE_PATH}
        className="hover:underline underline-offset-4"
      >
        สั่งซื้อสินค้า
      </Link>
      <Link
        href={ABOUT_US_ROUTE_PATH}
        className="hover:underline underline-offset-4"
      >
        เกี่ยวกับเรา
      </Link>
      <span>ติดต่อเรา 1277</span>
    </>
  );
};

export default MainMenu;
