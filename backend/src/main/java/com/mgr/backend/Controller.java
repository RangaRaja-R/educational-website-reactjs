package com.mgr.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Controller {
    @Autowired
    private Service service;
    @GetMapping("/degree/get")
    public DegreeModel display_degree(@RequestParam String id){
        return  service.get_degree_by_id(id);
    }

    @GetMapping("/college/get-all")
    public List<CollegeModel> display_college(){
        return service.get_college();
    }

    @GetMapping("/course/get-all")
    public List<CourseModel> display_course(){
        return service.get_course();
    }

    @PostMapping("/user/signup")
    public String create_acc(@RequestBody UserModel m){
        return service.create_user(m);
    }

    @PostMapping("/user/login")
    public String verify(@RequestBody UserModel m){
        return service.verify(m.getUsername(), m.getHash());
    }

}
