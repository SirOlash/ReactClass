import Style from './DummyJsonCard.module.css';
import style from './FakeStoreCard.module.css'
import { Link } from 'react-router-dom';

import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
    return (
        <div>
            {[...Array(5)].map((_, i) => (
                <span key={i}>
                    {i < rating ? <FaStar color="gold" /> : <FaRegStar />}
                </span>
            ))}
        </div>
    );
};


const DummyJsonCard = (props) => {
    const { data, isLoading, isError } = props.data;
    console.log(data);

    if (isLoading) {
        return (
            <div className={Style.loadingContainer}>
                <div className={Style.loader}></div>
            </div>
        )
    }

    if (isError) {
        return (
            <div>Error Occurred</div>
        )
    }

    return (
            <div className={style.productsContainer}>
                {data.products.map(item => (
                    <div key={item.id} className={style.card}>
                        <img src={item.images} alt={item.title} />
                        <p><b>Title: </b>{item.title}</p>
                        <p><b>Category: </b>{item.category}</p>
                        <p><b>Price: ₦</b>{(item.price * 1500).toFixed(2)}</p>
                       <p><b>Rating:</b></p>
                        <StarRating rating={Math.round(item.rating)} />
                        {/* <a href={`/products/${item.id}`} className={style.viewDescription}>View Product Description</a> */}
                        <Link className= {style.viewDescription} to={`/dummyJson/product/${item.id}`} >View Product Description</Link>
                    </div>
                ))}
            </div>
        );
    
}

export default DummyJsonCard;