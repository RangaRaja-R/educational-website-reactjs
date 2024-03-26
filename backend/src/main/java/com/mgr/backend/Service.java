package com.mgr.backend;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class Service {
    @Autowired
    private CourseRepo courseRepo;
    @Autowired
    private CollegeRepo collegeRepo;
    @Autowired
    private DegreeRepo degreeRepo;


    public DegreeModel get_degree_by_id(String id) {
        return degreeRepo.findById(id).orElse(null);
    }

    public List<CollegeModel> get_college() {
        return collegeRepo.findAll();
    }

    public List<CourseModel> get_course() {
        return courseRepo.findAll();
    }
}
