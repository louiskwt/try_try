package main

import "fmt"

func main() {
	
	// arr
	var ages = [3]int{0, 25, 30}

	names := [4]string{"Yoshi", "mario", "Hikaru", "Hyde"}

	names[1] = "Luigi"

	fmt.Println(ages, len(ages))

	fmt.Println(names, len(names))
	var lol string

	fmt.Printf("%v\n", lol)

	color := [3]string{"blue"}
	fmt.Println(color)

	// slice 
	var scores = []int{12, 28, 3, 9}
	scores = append(scores, 85)

	fmt.Println(scores, len(scores))
	
	// slice ranges
	rangeOne := names[1:3]
	fmt.Println(rangeOne)

	rangeTwo := names[2:]
	fmt.Println(rangeTwo)

	rangeThree := names[:3]
	fmt.Println(rangeThree)

	rangeOne = append(rangeOne, "Ayase")
	fmt.Println(rangeOne)
}