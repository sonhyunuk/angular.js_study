package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import com.example.demo.dto.TestDto;
import com.example.demo.service.TestService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
    @Autowired
    private TestService service;

    @RequestMapping(value ={

        "/",
        "/components",
        "/gg"
         } 
        )
    public String index(){
        return "index";
    }
    
    @RequestMapping(value = "/test")
    @ResponseBody
    public List<TestDto> test(){
        List<TestDto> test = new ArrayList<>();
        test = service.getUserInfo();
        return test;
    }
}

