package microservices.springboot.controllers;
import microservices.springboot.entities.Employee;
import microservices.springboot.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeController {
    @Autowired
    private IEmployeeService service;

    @GetMapping("/api/employees")
    public Iterable<Employee> getAll(){
        return service.getEmployees();
    }

    @PostMapping("/api/employees")
    public void save(@RequestBody Employee e){
        service.save(e);
    }

    @GetMapping("/api/employees/{id}")
    public Optional<Employee> getEmployee(@PathVariable String id){
        return service.getEmployee(Long.parseLong(id));
    }

    @DeleteMapping("/api/employees/{id}")
    public void delete(@PathVariable String id){
        service.deleteEmployee(Long.parseLong(id));
    }
}
