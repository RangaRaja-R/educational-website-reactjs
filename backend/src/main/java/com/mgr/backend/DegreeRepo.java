package com.mgr.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface DegreeRepo extends MongoRepository<DegreeModel, String> {
}
