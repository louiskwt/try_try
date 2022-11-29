import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Input your age");
        Scanner SC = new Scanner(System.in);
        String s = SC.nextLine();

        int age = Integer.parseInt(s);

        if (age >= 13) {
            System.out.println("You can ride");
        } 
        else {
            System.out.println("You cannot ride");
        }

        String[] arr = {"Hello", "world"};

        String ans = arr[1];

        System.out.println(ans);

        SC.close();
    }
}
