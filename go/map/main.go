package main

import "fmt"

func main() {
	menu := map[string]float64{
		"soup": 4.99,
		"pie": 7.99,
		"salad": 6.99,
		"toffee pudding": 3.55,
	}

	fmt.Println(menu)

	fmt.Println(menu["soup"])

	// looping map
	for k, v := range menu {
		fmt.Println(k, "-", v)
	}

	// int as key
	phoneBook := map[int]string{
		23123322: "mario",
		98567343: "Yoshi",
		32832940: "Luigi",
	}

	fmt.Println(phoneBook)

	phoneBook[32832940] = "Louis"
	

	for k, v := range phoneBook {
		fmt.Println(k, "--", v)
	}
}