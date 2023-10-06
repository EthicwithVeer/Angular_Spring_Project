package com.bezkoder.spring.datajpa.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.datajpa.model.payment;
import com.bezkoder.spring.datajpa.model.signin;
import com.bezkoder.spring.datajpa.repository.paymentrepo;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class paymentcontroller {

    @Autowired
    private paymentrepo signin_Paymentrepo;

  private List<payment> signins = new ArrayList<payment>();

	// @RequestMapping(value = "/signin", method = RequestMethod.GET, produces = "application/json")
	// public List<payment> saveproductadmin(Model model){
    //     signins=signin_Paymentrepo.findAll();
	// 	System.out.println(signins);
	// 	return signins;
    // }

	// @PostMapping
	// public payment create(@RequestBody payment user) {
	// 	signins.add(user);
	// 	signin_Paymentrepo.saveAll(signins);
	// 	System.out.println(signins);
	// 	return user;
	// }
}

