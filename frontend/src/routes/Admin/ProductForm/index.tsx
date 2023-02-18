import './styles.css';
import { Link, useParams } from 'react-router-dom';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms';
import { useEffect, useState } from 'react';
import * as productService from '../../../services/product-service'
import FormTextArea from '../../../components/FormTextArea';
import { CategoryDTO } from '../../../models/category';
import * as categoryService from '../../../services/category-service';
import FormSelect from '../../../components/FormSelect';


export default function ProductForm() {
  const params = useParams();
  const isEditing = params.productId !== 'create';
  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const [formData, setFormData] = useState<any>({
    name: {
      value: "",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nome",
      validation: function (value: string) {
        return /^.{3,80}$/.test(value);
      },
      message: "Favor informar um nome de 3 a 80 caracteres"
    },
    price: {
      value: "",
      id: "price",
      name: "price",
      type: "number",
      placeholder: "Preço",
      validation: function (value: any) {
        return Number(value) > 0;
      },
      message: "Favor informar um valor positivo!"
    },
    imgUrl: {
      value: "",
      id: "imgUrl",
      name: "imgUrl",
      type: "text",
      placeholder: "Image",
    },
    description: {
      value: "",
      id: "description",
      name: "description",
      type: "text",
      placeholder: "Descrição",
      validation: function (value: string) {
        return /^.{10,}$/.test(value);
      },
      message: "A descrição com minimo de 10 caracteres!"
    },
    categories: {
      value: [],
      id: "categories",
      name: "categories",
      placeholder: "categorias",
      validation: function (value: CategoryDTO[]) {
        return value.length > 0;
      },
      message: "Escolha ao menos uma categoria!"
    }
  });
  useEffect(() => {
    categoryService.findAllPageRequest()
      .then(response => {
        setCategories(response.data)
      })
  }, []);

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId))
        .then(response => {
          const newFormData = forms.updateAll(formData, response.data);
          setFormData(newFormData);
        })
    }
  }, [])

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData(forms.updateAndValidate(formData, name, value));
  }

  function handleInputTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="dsc-form-control"
                  onTurnDirty={handleInputTurnDirty}
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>
                  {formData.name.message}
                </div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  className="dsc-form-control"
                  onTurnDirty={handleInputTurnDirty}
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>
                  {formData.price.message}
                </div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="dsc-form-control"
                  onTurnDirty={handleInputTurnDirty}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormSelect
                  {...formData.categories}
                  className="dsc-form-control"
                  options={categories}
                  onChange={(obj: any) => {
                    const newFormData = forms.updateAndValidate(formData, "categories", obj);
                    setFormData(newFormData);
                  }}
                  onTurnDirty={handleInputTurnDirty}
                  isMulti
                  getOptionLabel={(obj: any) => obj.name}
                  getOptionValue={(obj: any) => String(obj.id)}
                />
                <div className='dsc-form-error'>
                  {formData.categories.message}
                </div>
              </div>
              <div>
                <FormTextArea
                  {...formData.description}
                  className="dsc-form-control dsc-textarea"
                  onTurnDirty={handleInputTurnDirty}
                  onChange={handleInputChange}
                />
                <div className='dsc-form-error'>
                  {formData.description.message}
                </div>
              </div>
            </div>
            <div className="dsc-product-form-buttons">
              <Link to="/admin/products">
                <button type="reset" className="dsc-btn dsc-btn-white">Cancelar</button>
              </Link>
              <button type="submit" className="dsc-btn dsc-btn-blue">Salvar</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}