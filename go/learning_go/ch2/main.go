package main

import (
	"fmt"
	"math"
	"strings"
)

// func greet(n string) {
// 	fmt.Printf("Good morning %v \n", n)
// }

// func bye(n string) {
// 	fmt.Printf("Good bye %v \n", n)
// }

// func cycleNames(n []string, f func(string)) {
// 	for _, v := range n {
// 		f(v)
// 	}
// }

func circleArea(r float64) float64 {
	return math.Pi * r * r
}

func getInitials(n string) (string, string) {
	s := strings.ToUpper(n)
	names := strings.Split(s, " ")

	var initials []string
	for _, v := range names {
		initials = append(initials, v[:1])
	}

	if len(initials) > 1 {
		return initials[0], initials[1]
	}

	return initials[0], "_"
}

func main() {

	a1 := circleArea(10.5)
	a2 := circleArea(2)

	fn1, sn1 := getInitials("tifa lockhart")
	fn2, sn2 := getInitials("cloud strife")
	fn3, sn3 := getInitials("Asuna")

	fmt.Printf("Circle 1: %0.3f and Circle 2: %0.3f \n", a1, a2)
	fmt.Println(fn1, sn1)
	fmt.Println(fn2, sn2)
	fmt.Println(fn3, sn3)
}