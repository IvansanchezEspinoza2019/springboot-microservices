package microservices.springboot.services;
import microservices.springboot.entities.Employee;

import java.util.Optional;


public interface IEmployeeService {
    Optional<Employee> getEmployee(Long id);
    Iterable<Employee> getEmployees();
    void deleteEmployee(Long id);
    void save(Employee e);
}
