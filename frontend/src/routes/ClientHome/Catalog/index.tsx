import './styles.css';
import SearchBar from '../../../components/SearchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNexPage from '../../../components/ButtonNextPage';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/products';
import * as productService from '../../../services/product-service';

type QueryParams = {
  page: number;
  name: string;
}


export default function Catalog() {
  const [isLastPage, setIsLastPage] = useState(false);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: ""
  });

  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        const nexPage = response.data.content;
        setProducts(products.concat(nexPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 })
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
        {
          !isLastPage &&
          <div onClick={handleNextPageClick}>
            <ButtonNexPage />
          </div>
        }
      </section>
    </main>
  );
}