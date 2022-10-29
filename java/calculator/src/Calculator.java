import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ender the first number: ");
        double number1 = scanner.nextDouble();
        scanner.nextLine();

        System.out.print("Enter the second number: ");
        double number2 = scanner.nextDouble();
        scanner.nextLine();

        System.out.print("Operation to perform: ");
        String operation = scanner.nextLine();

        if (!operation.equals("+") && !operation.equals("-") && !operation.equals("*") && !operation.equals("/")) {
            System.out.println("Operations not supported");
        }

        if (operation.equals("+")) {
            double output = number1 + number2;
            System.out.printf("%.1f + %.1f = %.1f \n", number1, number2, output);
        }

        if (operation.equals("-")) {
            double output = number1 - number2;
            System.out.printf("%.1f - %.1f = %.1f \n", number1, number2, output);
        }

         if (operation.equals("*")) {
            double output = number1 * number2;
            System.out.printf("%.1f * %.1f = %.1f \n", number1, number2, output);
         }
         
         if (operation.equals("/")) {
            if (number2 == 0) {
                System.out.println("Cannot divide by 0");
            } else {
                double output = number1 / number2;
                System.out.printf("%.1f * %.1f = %.1f \n", number1, number2, output);
            }
         }

         scanner.close();
    }
}
