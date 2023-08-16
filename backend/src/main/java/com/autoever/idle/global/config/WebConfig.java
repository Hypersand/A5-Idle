package com.autoever.idle.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(
                        "http://localhost:5173",
                        "http://127.0.0.1:5173",
                        "http://i-want-to-go-autoever.shop",
                        "http://i-want-to-go-autoever.shop:80",
                        "http://www.i-want-to-go-autoever.shop",
                        "http://www.i-want-to-go-autoever.shop:80",
                        "https://i-want-to-go-autoever.shop",
                        "https://i-want-to-go-autoever.shop:443",
                        "https://www.i-want-to-go-autoever.shop",
                        "https://www.i-want-to-go-autoever.shop:443"
                )
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}
