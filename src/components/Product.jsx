import PropTypes from 'prop-types';

const Product = ({ name, img = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder", price }) => {

    return (
        <div>
            <img src={img} alt={name} width="480" />
            <h2>{name}</h2>

            <p>Price: {price} credits</p>
        </div>
    );

};
Product.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    price: PropTypes.number.isRequired,
};

export default Product;     