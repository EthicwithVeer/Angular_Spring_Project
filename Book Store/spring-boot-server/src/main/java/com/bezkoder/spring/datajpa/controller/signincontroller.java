package com.bezkoder.spring.datajpa.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.spring.datajpa.model.signin;
import com.bezkoder.spring.datajpa.repository.signinrepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class signincontroller {

	@Autowired
    private signinrepo signin_repo;

	private List<signin> signins = new ArrayList<signin>();

	@RequestMapping(value = "/signin", method = RequestMethod.GET, produces = "application/json")
	public List<signin> saveproductadmin(Model model){
        signins=signin_repo.findAll();
		System.out.println(signins);
		return signins;
    }

	@PostMapping
	public signin create(@RequestBody signin user) {
		signins.add(user);
		signin_repo.saveAll(signins);
		System.out.println(signins);
		return user;
	}
}