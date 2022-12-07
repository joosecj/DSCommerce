import HeaderClient from '../../components/HeaderClient';
import './styles.css';
import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';
import ButtonNexPage from '../../components/ButtonNextPage';
import { ProductDTO } from '../../models/products';

const product: ProductDTO = {
  id: 2,
  name: "Smart Tv",
  description: "Este tv e bonita",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/10-small.jpg",
  price: 2500.99,
  categories: [
    {
      id: 1,
      name: "Eletrônicos"
    },
    {
      id: 2,
      name: "Computadores"
    }
  ]
}

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
          </div>

          <ButtonNexPage />
        </section>
      </main>
    </>
  );
}