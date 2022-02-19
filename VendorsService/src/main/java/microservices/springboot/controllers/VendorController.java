package microservices.springboot.controllers;
import microservices.springboot.entities.Vendor;
import microservices.springboot.services.IVendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class VendorController {

    @Autowired
    private IVendorService service;

    @GetMapping("/api/vendors")
    public Iterable<Vendor> getAll(){
        return service.getAll();
    }

    @GetMapping("/api/vendors/{id}")
    public Optional<Vendor> getVendor(@PathVariable Long id){
        return service.getVendor(id);
    }

    @PostMapping("/api/vendors")
    public void saveVendor(@RequestBody Vendor v){
        service.save(v);
    }

    @DeleteMapping("/api/vendors/{id}")
    public void deleteVendor(@PathVariable Long id){
        service.delete(id);
    }


}
