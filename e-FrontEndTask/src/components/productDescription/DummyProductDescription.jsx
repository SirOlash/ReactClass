import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Style from "./description.module.css";
import { useGetDummyJsonQuery } from "../../service/DummyJsonApi";
import style from "../../reuseable/DummyJsonCard.module.css";
import { Link } from "react-router-dom";
const DummyProductDescription = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetDummyJsonQuery();

     useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, []);


    if (isLoading) {
        return  <div className={style.loadingContainer}>
                        <div className={style.loader}></div>
                    </div>
    }

    const product = data.products.find(item => item.id === parseInt(id));
    if (!product) return <p>Product not found.</p>;

    return (
        
        <div className={Style.productDescription}>
            <button><Link to="/dummyJson">Go Back</Link></button>  
            <img src={product.images} alt={product.title} />
            <p><b>Product Description: </b>{product.description}</p>
        </div>

    )

}
export default DummyProductDescription;
