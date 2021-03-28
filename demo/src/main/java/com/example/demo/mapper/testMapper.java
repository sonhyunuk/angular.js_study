package com.example.demo.mapper;

import java.util.List;

import com.example.demo.dto.TestDto;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface testMapper {
    
    public List<TestDto> getUserInfo();    
    
}
