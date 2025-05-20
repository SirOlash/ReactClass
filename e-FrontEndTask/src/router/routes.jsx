import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import StoreProducts from "../components/fakeStore/FakeStore.jsx";
import ProductDescription from "../components/productDescription/ProductDescription.jsx";

  const router = createBrowserRouter([
  {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/fake-api",
                element:<StoreProducts/>
            },
            {
                path: "/product/:id",
                element: <ProductDescription data={StoreProducts.data}/>
            }
        ]
    },

    ]);

    export default router;