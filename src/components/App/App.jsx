import { Alert } from "../Alert/Alert";
import Product from "../Product/Product";
import ClickCounter from "../Handle/Handle";
import LoginForm from "../LoginForm/LoginForm";
import MyComponent from "../MyComponent/MyComponent";


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
      <ClickCounter />
      <LoginForm />
      <MyComponent />
    </>
  );
}

{/*// src/components/App.jsx

import { Routes, Route, NavLink } from "react-router-dom";
import clsx from 'clsx';
import Home from "path/to/pages/Home";
import About from "path/to/pages/About";
import Products from "path/to/pages/Products";
import NotFound from 'path/to/pages/NotFound';
import css from './App.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
  		<Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};


 */}


{/*const App = () => {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
	  });
	
	const updateX = () => {
			setValues({
			...values,
			x: values.x + 1
		});
	};

	const updateY = () => {
		setValues({
			...values,
			y: values.y + 1
		});
	};

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update x</button>
      <button onClick={updateY}>Update y</button>
    </div>
  );

-------------------------------------------
  const App = () => {

  useEffect(() => {
    setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);
  }, []);

  return <div>App</div>;
};
---------------------------------
const Modal = () => {
  useEffect(() => {
		// Зберігаємо ідентифікатор інтервалу в змінну
    const intervalId = setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
		  }, 2000);

		return () => {
			// Очищаємо інтервал за його ідентифікатором
			clearInterval(intervalId);
		};
  }, []);

  return <div>Modal</div>;
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal />}
    </div>
  );
};

  */
};
