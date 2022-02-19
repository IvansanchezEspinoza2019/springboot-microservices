package microservices.springboot.services;

import microservices.springboot.entities.Customer;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface ICustomerService {
     Iterable<Customer> getAll();
     Optional<Customer> getByID(Long id);
     void remove(Long id);
     void save(Customer c);
}
