package com.nocountry.TurnosApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"controller", "services", "configure"})
@EntityScan("com.my.sso.server.models")
public class TurnosApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(TurnosApiApplication.class, args);
	}

}
