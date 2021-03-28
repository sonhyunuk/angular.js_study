package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.TestDto;
import com.example.demo.mapper.testMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class TestService {
    
    @Autowired
    private testMapper mapper;

    public List<TestDto> getUserInfo(){
        System.out.println("test");
        List<TestDto> test = mapper.getUserInfo();
        return test;
        
    }
}
