package com.contact.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.contact.entities.Contact;


@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "contact", path = "contact")
public interface ContactRepository extends PagingAndSortingRepository<Contact, Long>{
	
	List<Contact> findByFirstNameOrLastName(@Param("firstname") String firstName,
											@Param("lastname") String lastName);
	

}
