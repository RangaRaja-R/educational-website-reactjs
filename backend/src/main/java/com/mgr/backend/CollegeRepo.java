package com.mgr.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CollegeRepo extends MongoRepository<CollegeModel, String> {
}
