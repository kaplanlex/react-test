export default function Product({ name, img, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt="Tacos With Lime" width="640" />
            <p>Price: {price} credits</p>
        </div>
    );
};