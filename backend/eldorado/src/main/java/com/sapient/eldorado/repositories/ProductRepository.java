package com.sapient.eldorado.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sapient.eldorado.entities.Product;

public interface ProductRepository extends MongoRepository<Product,String>{

}
