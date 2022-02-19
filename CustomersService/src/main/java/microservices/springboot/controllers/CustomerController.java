package microservices.springboot.controllers;

import microservices.springboot.entities.Customer;
import microservices.springboot.services.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CustomerController {
    @Autowired
    private ICustomerService service;

    @GetMapping("/api/customers")  //  entry point for customer list
    public Iterable<Customer> getAll() {
        return service.getAll();
    }

    @GetMapping("/api/customers/{id}")  //  entry point for customer list
    public Optional<Customer> getByID(@PathVariable String id) {
        return service.getByID(Long.parseLong(id));
    }

    @PostMapping("/api/customers")  //  entry point for customer list
    public void save(@RequestBody Customer c) {
        service.save(c);
    }

    @DeleteMapping("/api/customers/{id}")
    public void delete(@PathVariable String id) {
        service.remove(Long.parseLong(id));
    }


}
