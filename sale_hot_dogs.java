public class SaleHotdogs{
  
  //Complete a method in the SaleHotdogs class that returns the total cost based off of n, the number of hotdogs a person is buying. The price varies depending on how many are purchased: 100 cent, 95 cent, or 90 cent
  public static int saleHotdogs(final int n){
    if(n >= 10){
      return n*90;
    }
    else if(n<10 && n>=5){
      return n*95;
    }
    else{
      return n*100;
    }
  }
}
