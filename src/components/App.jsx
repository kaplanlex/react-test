import { Alert } from "./Alert";
import Product from "./Product";

export default function App() {
    return (
        <>
            <Alert variant="info">
                Would you like to browse our recommended products?
            </Alert>
            <Alert variant="error">
                There was an error during your last transaction
            </Alert>
            <Alert variant="success">
                Payment received, thank you for your purchase
            </Alert>
            <Alert variant="warning">
                Please update your profile contact information
            </Alert>

            <div>
                <h1>Best selling</h1>
                <Product
                    name="Tacos With Lime"
                    img="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
                    price={10.99}
                />
                <Product
                    name="Fries and Burger"
                    img="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
                    price={14.29}
                />
            </div>
        </>
    );
}
