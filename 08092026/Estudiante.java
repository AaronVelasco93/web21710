public class Estudiante{
    public String nombre;
    public int edad;
    public double peso;
    private String RFC;
    private String numeroCuenta;

    // Constructor
    public Estudiante(String Nombre,int Edad ){
        this.nombre=Nombre;
        this.edad = Edad;

    }
    // metodo de tipo GET
    public String getRfc(){
        return  RFC;
    }
}