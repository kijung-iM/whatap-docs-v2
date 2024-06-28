import { Content, useLang, useLocation } from 'rspress/runtime';

const InDoc = ({children, product, pages}) => {
  const location = useLocation();
  const currentLocale = useLang();

  if (product) {
    const prods = Array.isArray(product) ? product : product.split(',');
    const cProd = currentLocale === "ko" ? location.pathname.split("/")[1] : location.pathname.split("/")[2]
    const isProduct = prods.includes(cProd);
    return isProduct ? <>{children}</> : null;
  } else if (pages) {
    const Pages = Array.isArray(pages) ? pages : pages.split(',');
    const cPage = location.pathname.split("/");
    const lastPath = cPage[cPage.length - 1] !== "" ? cPage.length - 1 : cPage.length - 2;
    const isPage = Pages.includes(cPage[lastPath]);

    return isPage ? <>{children}</> : null;
  }
  
}

export default InDoc