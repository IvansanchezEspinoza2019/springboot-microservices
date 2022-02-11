package microservices.springboot.services;

import microservices.springboot.entities.Customer;
import microservices.springboot.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerServices implements ICustomerService{
    @Autowired   // dependencies injection
    private CustomerRepository repository;

    @Override
    public Iterable<Customer> getAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Customer> getByID(Long id) {
        return repository.findById(id);
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
