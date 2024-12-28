export default function Product() {
    const price = 999;
    const img = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
    return (
        <div>
            <h2>Tacos</h2>
            <img src={img} alt="Tacos With Lime" width="640" />
            <p>Price: {price} credits</p>
        </div>
    );
};