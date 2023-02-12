package com.devsuperior.dscommerce.services;

import com.devsuperior.dscommerce.dto.OrderDTO;
import com.devsuperior.dscommerce.dto.OrderItemDTO;
import com.devsuperior.dscommerce.entities.*;
import com.devsuperior.dscommerce.repositories.OrderItemRepository;
import com.devsuperior.dscommerce.repositories.OrderRepository;
import com.devsuperior.dscommerce.repositories.ProductRepository;
import com.devsuperior.dscommerce.services.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class OrderService {
  private final OrderRepository orderRepository;
  private final ProductRepository productRepository;
  private final OrderItemRepository orderItemRepository;
  private final UserService userService;

  public OrderService(OrderRepository orderRepository, ProductRepository productRepository,
                      OrderItemRepository orderItemRepository, UserService userService) {
    this.orderRepository = orderRepository;
    this.productRepository = productRepository;
    this.orderItemRepository = orderItemRepository;
    this.userService = userService;
  }

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
