import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetFakeStoreQuery } from "../../service/FakeStoreApi";
import { Link } from "react-router-dom";
import Style from "./description.module.css";
import style from "../../reuseable/DummyJsonCard.module.css";



const ProductDescription = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetFakeStoreQuery()

    console.log("ProductDescription render:", { id, data, isLoading, isError })

     useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto"; 
        };
      }, []);

    if (isLoading) {
        return <div className={style.loadingContainer}>
                                <div className={style.loader}></div>
                            </div>
    }
 
    if (isError) {
        return <div>Error fetching product details</div>
    }
 
    if (!data) {
        return <div>no product found</div>
    }
     console.log(data)
    const product = data.find(item => item.id === parseInt(id));
    console.log(product)
    console.log(id)

    if (!product) return <p>Product not found.</p>;
 
    return (
        <div className={Style.productDescription}>
            <button><Link to="/fake-api">Go Back</Link></button>
            <img src={product.image} alt={product.title} />
            <p><b>Product Description: </b>{product.description}</p>

        </div>
    )
}

export default ProductDescription;




