package microservices.springboot.services;

import microservices.springboot.entities.Employee;
import microservices.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeServices implements IEmployeeService{
    @Autowired
    private EmployeeRepository repository;

    @Override
    public Optional<Employee> getEmployee(Long id) {
        return repository.findById(id);
    }

    @Override
    public Iterable<Employee> getEmployees() {
        return repository.findAll();
    }

    @Override
    public void deleteEmployee(Long id) {
        if (repository.findById(id).isPresent()){
            repository.deleteById(id);
        }
    }

    @Override
    public void save(Employee e){
        repository.save(e);
    }
}
