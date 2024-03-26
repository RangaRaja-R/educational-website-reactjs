package com.mgr.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
