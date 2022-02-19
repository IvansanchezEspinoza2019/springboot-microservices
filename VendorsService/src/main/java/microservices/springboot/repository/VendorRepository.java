package microservices.springboot.repository;

import microservices.springboot.entities.Vendor;
import org.springframework.data.repository.CrudRepository;

public interface VendorRepository extends CrudRepository<Vendor, Long> {
}
