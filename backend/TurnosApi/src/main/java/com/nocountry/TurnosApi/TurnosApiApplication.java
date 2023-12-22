package com.nocountry.TurnosApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
@EntityScan(basePackages = "com.nocountry.TurnosApi.model")
@EnableJpaRepositories(basePackages = "com.nocountry.TurnosApi.repository")
public class TurnosApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TurnosApiApplication.class, args);
	}

}
