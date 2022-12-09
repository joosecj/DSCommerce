import './styles.css';
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { ProductDTO } from '../../../models/products';

const produc: ProductDTO = {
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

export default function ProductDetails() {
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCard product={produc} />
        <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar" />
          <ButtonInverse text="Início" />
        </div>
      </section>
    </main>
  )
}