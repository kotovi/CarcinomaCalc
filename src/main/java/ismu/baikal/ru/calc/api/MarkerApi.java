package ismu.baikal.ru.calc.api;

import ismu.baikal.ru.calc.domain.Marker;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLOutput;

@RestController
@RequestMapping("/markerApi")
public class MarkerApi {

    @PostMapping
    public Marker calc(@RequestBody Marker marker){
        System.out.println("Fuck");
        System.out.println("marker.getAfp(): " + marker.getAfp());
        System.out.println("marker.getAge(): " + marker.getAge());
        System.out.println("marker.getAlt(): " + marker.getAlt());
        System.out.println("marker.getErythrocytes(): " + marker.getErythrocytes());
        System.out.println("marker.getGender(): " + marker.getGender());
        System.out.println("marker.getOpn(): " + marker.getOpn());

        if(
                (marker.getAfp()!=null)&
                (marker.getAge()!=null)&
                (marker.getAlt()!=null)&
                (marker.getErythrocytes()!=null)&
                (marker.getGender()!=null)&
                (marker.getOpn()!=null)
        ){
            /*
            *
            * */
            Double f1 = -73.1676 +
                    (0.4846 * marker.getAge()) +
                    (6.5932 * marker.getGender()) +
                    (22.3483 * marker.getErythrocytes()) +
                    (0.024 * marker.getAlt()) +
                    (0.0015 * marker.getAfp()) +
                    (0.056 * marker.getOpn());

            Double f2 = -72.7678 +
                    (0.2393 * marker.getAge())+
                    (9.9954 * marker.getGender())+
                    (24.3663 * marker.getErythrocytes())+
                    (0.0018 * marker.getAlt())+
                    (0.0012 * marker.getAfp()) -
                    (0.0009 * marker.getOpn());
            if(f1>f2){
                marker.setBadNews(true);

            } else {
                marker.setBadNews(false);
            }
            System.out.println("F1: "+ f1);
            System.out.println("F2: "+ f2);

            return marker;
        }
        else return  null;
    }
}
