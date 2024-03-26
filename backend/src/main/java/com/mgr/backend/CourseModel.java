package com.mgr.backend;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("course")
public class CourseModel {
    @Id
    private String id;
    private String name;
    private String details;
    private String longdetails;
    private String author;
    private String authorLink;
    private Boolean free;
    private String img;
    private List<String>requirement;
    private List<String>languages;
    private String duration;
    private List<String>courseLayout;
    private String link;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getLongdetails() {
        return longdetails;
    }

    public void setLongdetails(String longdetails) {
        this.longdetails = longdetails;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAuthorLink() {
        return authorLink;
    }

    public void setAuthorLink(String authorLink) {
        this.authorLink = authorLink;
    }

    public Boolean getFree() {
        return free;
    }

    public void setFree(Boolean free) {
        this.free = free;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public List<String> getRequirement() {
        return requirement;
    }

    public void setRequirement(List<String> requirement) {
        this.requirement = requirement;
    }

    public List<String> getLanguages() {
        return languages;
    }

    public void setLanguages(List<String> languages) {
        this.languages = languages;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public List<String> getCourseLayout() {
        return courseLayout;
    }

    public void setCourseLayout(List<String> courseLayout) {
        this.courseLayout = courseLayout;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
