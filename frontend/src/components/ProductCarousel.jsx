// import { Link } from "react-router-dom";
// import { Carousel, Image } from "react-bootstrap";
// import Message from "./Message";
// import Loader from "./Loader";
// import { useGetTopProductsQuery } from "../slices/productsApiSlice";

// const ProductCarousel = () => {
//   const { data: products, isLoading, error } = useGetTopProductsQuery();

//   return isLoading ? (
//     <Loader />
//   ) : error ? (
//     <Message variant="danger">{error}</Message>
//   ) : (
//     <Carousel
//       pause="hover"
//       className="bg-primary mb-4"
//       data-bs-theme="dark"
//       slide={false}
//     >
//       {products.map((product) => (
//         <Carousel.Item key={product._id}>
//           <Link to={`/product/${product._id}`}>
//             <Image src={product.image} alt={product.name} fluid />
//             <Carousel.Caption>
//               <h2>
//                 {product.name} (${product.price})
//               </h2>
//             </Carousel.Caption>
//           </Link>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// };

// export default ProductCarousel;

import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import Loader from "./Loader";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel
      pause="hover"
      className="bg-primary mb-4"
      data-bs-theme="dark"
      style={{ background: "white" }}
    >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image
              src={product.image}
              alt={product.name}
              fluid
              className="d-block mx-auto"
              style={{ maxHeight: "100%" }}
            />
            <Carousel.Caption>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
