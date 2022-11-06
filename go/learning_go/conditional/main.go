package main

import (
	"fmt"
)

func main() {
	age := 45

	fmt.Println(age <= 50)

	// if age > 45 {
	// 	fmt.Println("You're old")
	// } else if age < 40 {
	// 	fmt.Println("You're young")
	// } else {
	// 	fmt.Println("You're in middle age")
	// }

	names := []string{"mario", "lugi", "yoshi", "goku"}

	for index, value := range names {
		if index == 1 {
			// skip the value at pos 1
			fmt.Println("Continuing at pos", index)
			continue
		}

		if index > 2 {
			fmt.Println("breaking at pos", index)
			break
		}

		fmt.Printf("The value at pos %v is %v \n", index, value)
	}
}