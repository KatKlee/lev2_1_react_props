import './Product.css'

const Product = (props) => {
    return (
        <div className="productCard">
            <img src={props.image} />
            <h2>{props.name}</h2>
            <p>{props.price} $</p>
            <button>BUY NOW</button>
        </div>
    )
}

export default Product;