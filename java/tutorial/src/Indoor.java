import java.util.Scanner;


public class Indoor {
   public static void main(String[] args) {
        Scanner SC = new Scanner(System.in);
        System.out.print("Enter something...  ");
        String input = SC.nextLine();

        System.out.println(input.toUpperCase());

        SC.close();

   } 
}
