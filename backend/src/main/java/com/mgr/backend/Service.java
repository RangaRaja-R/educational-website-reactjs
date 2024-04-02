package com.mgr.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    private CourseRepo courseRepo;
    @Autowired
    private CollegeRepo collegeRepo;
    @Autowired
    private DegreeRepo degreeRepo;

    @Autowired
    private UserRepo userRepo;

    public String encoder(String password){
        String encryptedpassword = null;
        try
        {
            MessageDigest m = MessageDigest.getInstance("MD5");


            m.update(password.getBytes());
            byte[] bytes = m.digest();
            StringBuilder s = new StringBuilder();
            for (byte aByte : bytes) {
                s.append(Integer.toString((aByte & 0xff) + 0x100, 16).substring(1));
            }
            encryptedpassword = s.toString();
        }
        catch (NoSuchAlgorithmException e)
        {
            e.printStackTrace();
        }
        return encryptedpassword;
    }

    public DegreeModel get_degree_by_id(String id) {
        return degreeRepo.findById(id).orElse(null);
    }

    public List<CollegeModel> get_college() {
        return collegeRepo.findAll();
    }

    public List<CourseModel> get_course() {
        return courseRepo.findAll();
    }

    public String create_user(UserModel m) {
        String pass = m.getHash();
        m.setHash(encoder(pass));
        userRepo.save(m);
        return "Created Succesfully";
    }

    public Boolean verify(String user, String pass){
        UserModel u = userRepo.findByUsername(user);
        if(null == u) u = userRepo.findByMail(user);
        return encoder(pass).equals(u.getHash());
    }

    public List<UserModel> get_users() {
        return userRepo.findAll();
    }
}
