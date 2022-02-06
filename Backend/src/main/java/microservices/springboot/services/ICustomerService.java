package microservices.springboot.services;

import microservices.springboot.entities.Customer;

import java.util.List;

public interface ICustomerService {
     List<Customer> getAll();
     Customer getByID(Long id);
     void remove(Long id);
     void save(Customer c);
}
