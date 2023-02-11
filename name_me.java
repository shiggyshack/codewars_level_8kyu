//Create a constructor of class NameMe which takes in two parameters to update a fullName property = first + last

public class NameMe {
    public String firstName;
    public String lastName;
    public String fullName;

    public NameMe(String first, String last) {
        this.firstName = first;
        this.lastName = last;
        //Concatenate the two parameters together to update the value fullName
        this.fullName = first + " " + last;
   }
 }
