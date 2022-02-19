package microservices.springboot.services;

import microservices.springboot.entities.Vendor;
import microservices.springboot.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class VendorServices implements IVendorService{

    @Autowired
    private VendorRepository repository;

    @Override
    public Iterable<Vendor> getAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Vendor> getVendor(Long id) {
        return repository.findById(id);
    }

    @Override
    public void save(Vendor v) {
        repository.save(v);
    }

    @Override
    public void delete(Long id) {
        if(repository.findById(id).isPresent()){
            repository.deleteById(id);
        }
    }
}
