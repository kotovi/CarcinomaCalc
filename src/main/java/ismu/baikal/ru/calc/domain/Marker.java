package ismu.baikal.ru.calc.domain;

public class Marker {
    private Integer age;
    private Integer gender;
    private Double erythrocytes;
    private Double alt;
    private Double afp;
    private Double opn;
    private Boolean badNews;

    public Marker(){

    }

    public Marker(Integer age,
                  Integer gender,
                  Double erythrocytes,
                  Double alt,
                  Double afp,
                  Double opn,
                  Boolean badNews) {
        this.age = age;
        this.gender = gender;
        this.erythrocytes = erythrocytes;
        this.alt = alt;
        this.afp = afp;
        this.opn = opn;
        this.badNews = badNews;
    }

    public Boolean getBadNews() {
        return badNews;
    }

    public void setBadNews(Boolean badNews) {
        this.badNews = badNews;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }

    public Double getErythrocytes() {
        return erythrocytes;
    }

    public void setErythrocytes(Double erythrocytes) {
        this.erythrocytes = erythrocytes;
    }

    public Double getAlt() {
        return alt;
    }

    public void setAlt(Double alt) {
        this.alt = alt;
    }

    public Double getAfp() {
        return afp;
    }

    public void setAfp(Double afp) {
        this.afp = afp;
    }

    public Double getOpn() {
        return opn;
    }

    public void setOpn(Double opn) {
        this.opn = opn;
    }


}
