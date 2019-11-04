package com.calendar.repositories;

import java.util.List;
//import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.calendar.entities.Appointment;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "appointment", path = "appointment")
public interface CalendarRepository extends PagingAndSortingRepository<Appointment, Long> {
	
	List<Appointment> findByTitle(@Param("title") String title);	

}
