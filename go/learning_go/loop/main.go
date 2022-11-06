package main

import (
	"fmt"
)

func main() {
	// var x int = 0
	// While loop...
	// for x < 5 {
	// 	fmt.Println("value of x: ", x)
	// 	x++
	// }

	// for loop
	for i := 0; i < 5; i++ {
		fmt.Println("value of i is ", i)
	}

	// loop over a slice
	names := []string{"mario", "lugi", "yoshi", "peach"}

	// for i := 0; i < len(names); i++ {
	// 	fmt.Println(names[i])
	// }

	for _, value := range names {
		fmt.Printf("The value is: %v \n",  value)
		
	}

}