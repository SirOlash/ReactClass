import { useParams } from "react-router-dom";
import { useGetFakeStoreQuery } from "../../service/FakeStoreApi";
import { Link } from "react-router-dom";

const ProductDescription = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetFakeStoreQuery()

    console.log("ProductDescription render:", { id, data, isLoading, isError })

    if (isLoading) {
        return <div>Loading...</div>
    }
 
    if (isError) {
        return <div>Error fetching product details</div>
    }

    if (!data) {
        return <div>no product found</div>
    }
     console.log(data)
    const product = data.find(item => item.id === parseInt(id));
     console.log(data)
    console.log(id)

    if (!product) return <p>Product not found.</p>;
 
    return (
        <div >
            <button>Go Back</button>
            <img src={product.image} alt={product.title} />
            <p><b>Product Description: </b>{product.description}</p>

        </div>
    )
}

export default ProductDescription;




