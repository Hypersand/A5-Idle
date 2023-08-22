package com.autoever.idle;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class IdleApplication {

	public static void main(String[] args) {
		SpringApplication.run(IdleApplication.class, args);
	}
}
