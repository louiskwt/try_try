package main

import (
	"fmt"
)

func updateName(x string) string {
	// a copy of the parameter
	x = "Amiya"
	return x
}

func updateMenu(y map[string]float64) {
	y["pizza"] = 3.99
}

func main() {
	// group A type --> strings, ints, bools, floats, arrays, structs
	name := "Tifa"
	name = updateName(name)
	fmt.Println(name)

	// group B type --> slices, maps, functions
	menu := map[string]float64{
		"pie": 5.99,
		"pizza": 12.99,
	}

	updateMenu(menu)
	fmt.Println(menu)
}