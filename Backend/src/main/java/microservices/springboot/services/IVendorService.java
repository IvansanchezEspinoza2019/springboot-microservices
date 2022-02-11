package microservices.springboot.services;

import microservices.springboot.entities.Vendor;

import java.util.Optional;

public interface IVendorService {
    Iterable<Vendor> getAll();
    Optional<Vendor> getVendor(Long id);
    void save(Vendor v);
    void delete(Long id);
}
