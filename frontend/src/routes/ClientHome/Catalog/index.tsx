import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNexPage from '../../../components/ButtonNextPage';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/products';
import * as productService from '../../../services/product-service';


export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [productName, setProductsName] = useState("");


  useEffect(() => {
    productService.findPageRequest(0, productName)
      .then(response => {
        setProducts(response.data.content);
      })
  }, [productName]);

  function handleSearch(searchText: string) {
    setProductsName(searchText)
  }


  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />
            )
          }
        </div>
        <ButtonNexPage />
      </section>
    </main>
  );
}