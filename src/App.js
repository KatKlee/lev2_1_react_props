import './App.css';
import Product from './components/Product';
import { v4 as uuidv4 } from 'uuid';

let products = [
  {
    image: 'https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg',
    productname: 'Coco oil',
    price: 30,
  },
  {
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    productname: 'Polaroid',
    price: 60,
  },
  {
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    productname: 'Maui Moisture',
    price: 20,
  },
]

function App() {
  return (
    <div className="App">
      <h1>Super Shop</h1>
      <div className='Products'>
        {products.map((elt) =>
          <Product
            key={uuidv4()}
            image={elt.image}
            name={elt.productname}
            price={elt.price}
          />)}
      </div>
    </div>
  );
}

export default App;
