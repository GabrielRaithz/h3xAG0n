package com.exemple.hexagon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.aws.autoconfigure.context.ContextRegionProviderAutoConfiguration;


@SpringBootApplication(exclude = ContextRegionProviderAutoConfiguration.class)
public class HexagonApplication {
	public static void main(String[] args) {
		SpringApplication.run(HexagonApplication.class, args);
	}
}
