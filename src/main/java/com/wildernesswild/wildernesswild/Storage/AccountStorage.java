package com.wildernesswild.wildernesswild.Storage;

import com.wildernesswild.wildernesswild.repositories.AccountRepository;

import org.springframework.stereotype.Service;

@Service
public class AccountStorage  {
    private AccountRepository accountRepo;
    public AccountStorage (AccountRepository accountRepo) {
        this.accountRepo = accountRepo;
    }

    public void addAccount(Account accountToAdd) {
        accountRepo.save(accountToAdd); 
    }
}
