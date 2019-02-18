package es.salesianos.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import es.salesianos.model.Account;
import es.salesianos.repository.AccountRepository;

@Component
@Profile("zaragoza")
public class AccountService {
	
	@Autowired
	private AccountRepository repository;
	
	public void insertAccount(Account account) {
		repository.insert(account);
	}

}
