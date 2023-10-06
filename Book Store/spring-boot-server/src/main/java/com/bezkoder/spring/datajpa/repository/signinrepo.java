package com.bezkoder.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.datajpa.model.signin;

public interface signinrepo extends JpaRepository<signin,Integer> {
    
}
