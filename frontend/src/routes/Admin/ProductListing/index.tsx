import './styles.css';
import editIcon from '../../../assets/img/edit.svg';
import deleteIcon from '../../../assets/img/delete.svg';
import product from '../../../assets/img/computer.png';
import { useEffect, useState } from 'react';
import * as productService from '../../../services/product-service';
import { ProductDTO } from '../../../models/products';

type QueryParams = {
  page: number;
  name: string;
}

export default function ProductListing() {
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


  return (
    <main>
      <section id="product-listing-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Cadastro de produtos</h2>

        <div className="dsc-btn-page-container dsc-mb20">
          <div className="dsc-btn dsc-btn-white">Novo</div>
        </div>

        <form className="dsc-search-bar">
          <button type="submit">🔎︎</button>
          <input type="text" placeholder="Nome do produto" />
          <button type="reset">❌</button>
        </form>

        <table className="dsc-table dsc-mb20 dsc-mt20">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => (
                <tr>
                  <td className="dsc-tb576">{product.id}</td>
                  <td><img className="dsc-product-listing-image" src={product.imgUrl} alt={product.name} /></td>
                  <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                  <td className="dsc-txt-left">{product.name}</td>
                  <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar" /></td>
                  <td><img className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <div className="dsc-btn-next-page">Carregar mais</div>
      </section>
    </main>
  );
}