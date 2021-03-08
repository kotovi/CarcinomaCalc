package ismu.baikal.ru.calc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {
    @GetMapping("/")
    public String greeting(){
        return  "/greeting";
    }

    @GetMapping("/manual")
    public String manual(){
        return  "/manual";
    }

    @GetMapping("/useragreement")
    public String useragreement(){
        return  "/useragreement";
    }
    @GetMapping("/patent")
    public String patent(){
        return  "/patent";
    }
}
