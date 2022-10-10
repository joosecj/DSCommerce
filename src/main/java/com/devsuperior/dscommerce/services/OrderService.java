package com.devsuperior.dscommerce.services;

import com.devsuperior.dscommerce.dto.OrderDTO;
import com.devsuperior.dscommerce.dto.OrderItemDTO;
import com.devsuperior.dscommerce.entities.*;
import com.devsuperior.dscommerce.repositories.OrderItemRepository;
import com.devsuperior.dscommerce.repositories.OrderRepository;
import com.devsuperior.dscommerce.repositories.ProductRepository;
import com.devsuperior.dscommerce.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private UserService userService;

    @Transactional(readOnly = true)
    public OrderDTO findById(Long id) {
        Order orderEntity = orderRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Recurso não encontrando"));
        return new OrderDTO(orderEntity);
    }
    @Transactional
    public OrderDTO insert(OrderDTO dto) {
        Order orderEntity = new Order();
        orderEntity.setMoment(Instant.now());
        orderEntity.setStatus(OrderStatus.WAITING_PAYMENT);

        User userEntity = userService.authentiated();
        orderEntity.setClient(userEntity);
        for (OrderItemDTO itemDto : dto.getItems()) {
            Product productEntity = productRepository.getReferenceById(itemDto.getProductId());
            OrderItem orderItemEntity = new OrderItem(orderEntity, productEntity, itemDto.getQuantity(), productEntity.getPrice());
            orderEntity.getItems().add(orderItemEntity);
        }
        orderRepository.save(orderEntity);
        orderItemRepository.saveAll(orderEntity.getItems());

        return new OrderDTO(orderEntity);
    }
}
