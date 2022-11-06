package main

import (
	"fmt"
	"sort"
)

func main() {
	// greeting := "hello there friends!"

	//fmt.Println(strings.Contains(greeting, "hello"))
	//fmt.Println(strings.ReplaceAll(greeting, "hello", "hi"))
	
	// fmt.Println(strings.Split(greeting, " "))
	// fmt.Println(strings.ToUpper(greeting))

	ages := []int{23, 21, 30, 19, 18, 20}

	sort.Ints(ages) // change the original slice

	fmt.Println(ages)
	
	// index := sort.SearchInts(ages, 18)

	// fmt.Println(index)

	names := []string{"yoshi", "mario", "goku", "bowser"}
	sort.Strings(names)

	fmt.Println(names)
	fmt.Println(sort.SearchStrings(names, "goku"))
}