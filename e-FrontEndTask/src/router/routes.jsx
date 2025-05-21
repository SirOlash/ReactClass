import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import StoreProducts from "../components/fakeStore/FakeStore.jsx";
import ProductDescription from "../components/productDescription/ProductDescription.jsx";
import DummyJson from "../components/dummyJson/DummyJson.jsx";
import DummyProductDescription from "../components/productDescription/DummyProductDescription.jsx";

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
                path: "/fake-api/product/:id",
                element: <ProductDescription data={StoreProducts.data}/>
            },
            {
                path: "/dummyJson",
                element: <DummyJson />
            },
            {
                path: "/dummyJson/product/:id",
                element: <DummyProductDescription data={DummyJson.data}/>
            }
        ]
    },

    ]);

    export default router;