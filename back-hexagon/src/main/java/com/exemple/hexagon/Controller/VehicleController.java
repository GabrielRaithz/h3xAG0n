package com.exemple.hexagon.Controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.exemple.hexagon.Model.Vehicle;
import com.exemple.hexagon.Repository.VehicleRepository;

@RestController
@RequestMapping({ "/vehicle" })
@CrossOrigin(origins = "http://ec2-18-231-109-21.sa-east-1.compute.amazonaws.com:4200", maxAge = 3600)
public class VehicleController {

	private VehicleRepository repository;
	
	VehicleController(VehicleRepository vehicleRepository) {
		this.repository = vehicleRepository;
	}

	@GetMapping
	public List<Vehicle> findAll() {
		return repository.findAll();
	}
	
	@GetMapping(path = {"/{id}"})
	public ResponseEntity<Vehicle> findById(@PathVariable long id){
		 return repository.findById(id).map(record -> ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public Vehicle create(@RequestBody Vehicle vehicle){
	    return repository.save(vehicle);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<Vehicle> update(@PathVariable("id") long id, @RequestBody Vehicle vehicle){
	    return repository.findById(id).map(record -> {
	            record.setName(vehicle.getName());
	            record.setDescr(vehicle.getDescr());
	            record.setPlate(vehicle.getPlate());
	            record.setVehicle_type(vehicle.getVehicle_type());
	            Vehicle updated = repository.save(record);
	            return ResponseEntity.ok().body(updated);
	        }).orElse(ResponseEntity.notFound().build());
	  }
	
	@DeleteMapping(path ={"/{id}"})
	public ResponseEntity<?> delete(@PathVariable("id") long id) {
	  return repository.findById(id)
	      .map(record -> {
	          repository.deleteById(id);
	          return ResponseEntity.ok().build();
	      }).orElse(ResponseEntity.notFound().build());
	}

}
