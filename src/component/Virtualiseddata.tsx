import { useEffect, useState } from "react";
import axios from "axios";
import ProductTypes from "../types/virtualisedlist.types";
import {
  PageWrapper,
  SectionTitle,
  StyledCard,
  FilterButton,
} from "../styles/Virtualiseddata.styles.ts";
import { Typography } from "@mui/material";

function Virtualiseddata() {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false); // false: < $100, true: >= $100

  useEffect(() => {
    const productFetch = async () => {
      try {
        const dataResponse = await axios.get("https://fakestoreapi.com/products");
        setProducts(dataResponse.data);
        setFilteredProducts(dataResponse.data); // Show all products on load
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    productFetch();
  }, []);

  const priceToggle = () => {
    const filtered = toggle
      ? products.filter((item) => item.price < 100)
      : products.filter((item) => item.price >= 100);

    setFilteredProducts(filtered);
    setToggle(!toggle);
  };

  const handleResetProducts = () => {
    setFilteredProducts(products);
    setToggle(false);
  };

  if (loading) return <PageWrapper>Loading...</PageWrapper>;
  if (error) return <PageWrapper>Error loading server data</PageWrapper>;

  return (
    <PageWrapper>
      <SectionTitle variant="h4">Virtualised Data</SectionTitle>

      <FilterButton variant="contained" onClick={priceToggle}>
        {toggle ? "Show Products less than $100" : "Show Products more than $100"}
      </FilterButton>

      <FilterButton variant="outlined" onClick={handleResetProducts}>
        Reset Products
      </FilterButton>

      {filteredProducts.map((item) => (
        <StyledCard key={item.id}>
          <Typography variant="subtitle1">{item.title}</Typography>
          <Typography variant="body2">${item.price}</Typography>
          <Typography variant="body2">{item.description}</Typography>
        </StyledCard>
      ))}
    </PageWrapper>
  );
}

export default Virtualiseddata;
