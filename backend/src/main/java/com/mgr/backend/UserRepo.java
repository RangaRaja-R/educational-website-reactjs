package com.mgr.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<UserModel, String> {
    UserModel findByUsername(String username);
    UserModel findByMail(String mail);
}
