package ismu.baikal.ru.calc.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable();


        http.authorizeRequests()
                .antMatchers("/",
                        "/checkUser",
                        "/checkUser/**",
                        "/login",
                        "/login/**",
                        "/oauth_login",
                        "/js/public/**",
                        "/css/**",
                        "/doc/**"
                        ,"/registration",
                        "/nav",
                        "/success_unsubscrube",
                        "/unsuccess_unsubscrube",
                        "/politic",
                        "/unsubscribe",
                        "/unsubscribe/**",
                        "/registration",
                        "/passwordrequest",
                        "/patent",
                        "/useragreement",
                        "/manual",
                        "/help",
                        "/markerApi").permitAll()
                .anyRequest().authenticated();


    }

}
