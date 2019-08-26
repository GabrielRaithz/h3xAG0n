package com.exemple.hexagon.Controller;

import java.util.List;

import javax.validation.Valid;

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

import com.exemple.hexagon.Model.VehicleType;
import com.exemple.hexagon.Repository.VehicleTypeRepository;

@RestController
@RequestMapping({ "/vehicle_type" })
@CrossOrigin(origins = "http://ec2-18-231-109-21.sa-east-1.compute.amazonaws.com:4200", maxAge = 3600)
public class VehicleTypeController {

	private VehicleTypeRepository repository;

	VehicleTypeController(VehicleTypeRepository vehicleTypeRepository) {
		this.repository = vehicleTypeRepository;
	}

	@GetMapping
	public List<VehicleType> findAll() {
		return repository.findAll();
	}
	
	@GetMapping(path = {"/{id}"})
	public ResponseEntity<VehicleType> findById(@PathVariable long id){
		 return repository.findById(id).map(record -> ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public VehicleType create(@RequestBody @Valid VehicleType vehicleType){
	    return repository.save(vehicleType);
	}
	
	@PutMapping(value="/{id}")
	public ResponseEntity<VehicleType> update(@PathVariable("id") long id, @RequestBody VehicleType vehicleType){
	    return repository.findById(id).map(record -> {
	            record.setName(vehicleType.getName());
	            record.setDescr(vehicleType.getDescr());
	            VehicleType updated = repository.save(record);
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
