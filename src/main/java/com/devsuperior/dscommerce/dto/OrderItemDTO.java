package com.devsuperior.dscommerce.dto;

import com.devsuperior.dscommerce.entities.OrderItem;

public class OrderItemDTO {
    private Long productId;
    private String name;
    private Double price;
    private Integer quantity;

    public OrderItemDTO(Long productId, String name, Double price, Integer quantity) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public OrderItemDTO(OrderItem orderItemEntity) {
        productId = orderItemEntity.getProduct().getId();
        name = orderItemEntity.getProduct().getName();
        price = orderItemEntity.getPrice();
        quantity = orderItemEntity.getQuantity();
    }

    public Long getProductId() {
        return productId;
    }

    public String getName() {
        return name;
    }

    public Double getPrice() {
        return price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public Double getSubtotal() {
        return price * quantity;
    }
}
