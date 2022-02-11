package microservices.springboot.services;

import microservices.springboot.entities.Customer;
import microservices.springboot.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerServices implements ICustomerService{
    @Autowired   // dependencies injection
    private CustomerRepository repository;

    @Override
    public List<Customer> getAll() {
        return (List<Customer>) repository.findAll();
    }

    @Override
    public Customer getByID(Long id) {
        return (Customer) repository.findById(id).get();
    }
    @Override
    public void remove(Long id){
        repository.deleteById(id);
    }

    @Override
    public void save(Customer c){
        repository.save(c);
    }
}
