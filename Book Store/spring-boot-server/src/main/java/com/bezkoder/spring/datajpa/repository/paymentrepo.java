package com.bezkoder.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.datajpa.model.payment;

public interface paymentrepo extends JpaRepository<payment,Integer>{
    
}
