package com.bezkoder.spring.datajpa.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="paymentdetails")
public class payment {
    @Id
    private String card_holder_name;
    private String card_number;
    private String expiry_date;
    private String cvv;
    
    public String getCard_holder_name() {
        return card_holder_name;
    }
    public void setCard_holder_name(String card_holder_name) {
        this.card_holder_name = card_holder_name;
    }
    public String getCard_number() {
        return card_number;
    }
    public void setCard_number(String card_number) {
        this.card_number = card_number;
    }
    public String getExpiry_date() {
        return expiry_date;
    }
    public void setExpiry_date(String expiry_date) {
        this.expiry_date = expiry_date;
    }
    public String getCvv() {
        return cvv;
    }
    public void setCvv(String cvv) {
        this.cvv = cvv;
    }
   
}