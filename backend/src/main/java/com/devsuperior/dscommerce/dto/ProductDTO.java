package com.devsuperior.dscommerce.dto;

import com.devsuperior.dscommerce.entities.Category;
import com.devsuperior.dscommerce.entities.Product;

import javax.validation.constraints.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDTO {
    private final Long id;
    @Size(min = 3, max = 80, message = "Nome precisa ter de 3 a 80 caracteres")
    @NotBlank(message = "Campo requerido")
    private final String name;
    @Size(min = 10, message = "mínimo de 10 caracteres")
    @NotBlank(message = "mensagem obrigatoria")
    private final String description;
    @NotNull(message = "Campo requerido.")
    @Positive(message = "Preço inválido.")
    private final Double price;
    private final String imgUrl;
    @NotEmpty(message = "Deve ter pelo menos uma categoria")
    private final List<CategoryDTO> categories = new ArrayList<>();

    public ProductDTO(Long id, String name, String description, Double price, String imgUrl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }

    public ProductDTO(Product entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.price = entity.getPrice();
        this.imgUrl = entity.getImgUrl();
        for (Category cat : entity.getCategories()) {
            categories.add(new CategoryDTO(cat));
        }
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Double getPrice() {
        return price;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public List<CategoryDTO> getCategories() {
        return categories;
    }
}
