import style from './FakeStoreCard.module.css'
import Style from './DummyJsonCard.module.css';
import { Link } from 'react-router'

const FakeStoreCard = (props) => {
    const {data, isLoading, isError} = props.data
    console.log(data)

    if (isLoading) {
        return   <div className={Style.loadingContainer}>
                        <div className={Style.loader}></div>
                    </div>
    }

    if (isError) {
        return <div>Error occurred</div>
    }


    return (
        <div className={style.productsContainer}>
            {data.map(item => (
                <div key={item.id} className={style.card}>
                    <img src={item.image} alt={item.title} />
                    <p><b>Title: </b>{item.title}</p>
                    <p><b>Category: </b>{item.category}</p>
                    <p><b>Price: ₦</b>{item.price * 1500}</p>
                    {/* <a href={`/products/${item.id}`} className={style.viewDescription}>View Product Description</a> */}
                    <Link className= {style.viewDescription} to={`/fake-api/product/${item.id}`} >View Product Description</Link>
                </div>
            ))}
        </div>
    );
}

export default FakeStoreCard