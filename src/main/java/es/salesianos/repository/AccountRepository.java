package es.salesianos.repository;

import java.util.List;
import java.util.Optional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import es.salesianos.model.Account;
import es.salesianos.model.User;

@Component
public class AccountRepository {

	private static Logger log = LogManager.getLogger(AccountRepository.class);

	@Autowired
	JdbcTemplate jdbcTemplate;

	@Autowired
	NamedParameterJdbcTemplate namedJdbcTemplate;

	public void insert(Account account) {
		String sql = "INSERT INTO ACCOUNTS (numAccount, balance)" + "VALUES ( :numAccount, :balance)";
		MapSqlParameterSource params = new MapSqlParameterSource();
		params.addValue("numAccount", account.getNumAccount());
		params.addValue("balance", account.getBalance());
		namedJdbcTemplate.update(sql, params);
	}

	public void update(Account account) {
		String sql = "UPDATE ACCOUNTS SET " + "numAccount = ?, balance = ? WHERE numAccount = ?";
		jdbcTemplate.update(sql, account.getNumAccount(), account.getBalance());
	}

	public List<Account> listAllAccounts() {
		String sql = "SELECT * FROM ACCOUNTS";
		List<Account> accounts = jdbcTemplate.query(sql, new BeanPropertyRowMapper(Account.class));
		return accounts;
	}
}
