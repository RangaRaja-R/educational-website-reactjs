package com.mgr.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CourseRepo extends MongoRepository<CourseModel, String> {
}
