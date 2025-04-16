import { useEffect, useState } from "react";
import axios from "axios";
import ProductTypes from "../types/virtualisedlist.types";

function Virtualiseddata() {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const productFetch = async () => {
      try {
        const dataResponse = await axios.get(
          "https://fakestoreapi.com/products"
        );
        console.log(dataResponse.data);
        setProducts(dataResponse.data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    productFetch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading server data</div>;
  }

  return (
    <div>
      <h1>Virtualised Data</h1>
      <div>
        <h2>Product List:</h2>
        {products.map((item) => (
          <div key={item.id}>{item.description}</div>
        ))}
      </div>
    </div>
  );
}

export default Virtualiseddata;
