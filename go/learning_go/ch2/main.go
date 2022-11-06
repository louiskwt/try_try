package main

import "fmt"

func main() {
	// Print

	fmt.Print("hello")
	fmt.Print("world! \n")

	age := 35

	// Println
	fmt.Println("may age is: ", age)
	
	// Printf (format)

	date := 5
	var name string = "Louis"

	fmt.Printf("today is %v and my name is %v\n", date, name)
	fmt.Printf("age is of type %T\n", age)
	fmt.Printf("You scored %0.1f points! \n", 255.55)

	// Sprintf (save formatted strings)
	var str = fmt.Sprintf("my age is %v and my name is %v", age, name)

	fmt.Println(str)
	
	
	// var num uint = 123
	// var num2 uint = 123
	// var out uint = num2 + num

	// fmt.Println(name, out)


}