import React, { useContext, useState } from "react";
import { ProductsContext, CartContext } from "../../Context/Context.tsx";
import { useParams } from "react-router-dom";
import NotFound from "../../Assets/not-found.jpg";
import "./Product.scss";

const Product = () => {
  const cart = useContext(CartContext);
  const items = useContext(ProductsContext);
  const products = [...items];
  const params = useParams();
  let id = params.id;
  const addToCart = cart.addToCart;
  const [product, setProduct] = useState(
    products.find((x) => x.id == id) || {
      image: NotFound,
      title: "Vehicle Not Found",
      price: 0,
    }
  );
  const addProduct = () => {
    addToCart(product);
  };

  return (
    <>
      <section>
        <div id="Product">
          <div className="left">
            <img src={product.image} alt={product.title} className="showcase" />

            <img src={product.image} alt={product.title} />
            <img src={product.image} alt={product.title} />
            <img src={product.image} alt={product.title} />
            <img src={product.image} alt={product.title} />
            <img src={product.image} alt={product.title} />
          </div>

          <div className="product-details">
            <h2>{product.title}</h2>
            <p>
              {/* {product.description} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse faucibus tortor sed venenatis efficitur. Quisque sit
              amet sapien congue, lobortis turpis consequat, auctor metus.
              Maecenas feugiat vulputate augue, a varius ligula maximus eu.
              Aliquam vitae diam neque. Praesent efficitur porttitor est, eget
              facilisis eros gravida vel. Mauris vel vestibulum tortor.
              Curabitur ac nisi lectus.
            </p>
            <p>
              ${product.price.toLocaleString("en", { useGrouping: true })}.00
            </p>
            {product && (
              <button onClick={() => addProduct()}>Add To Cart</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
