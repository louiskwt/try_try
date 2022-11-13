package main

import (
	"fmt"
)

func updateName(n *string) {
	*n = "Auqa"
}

func main() {
	name := "Megumi"
	m := &name


	fmt.Println("Memory address of name is: ", &name)
	fmt.Println("Memory address of name is: ", *m)
	updateName(m)	
	fmt.Println(name)
}