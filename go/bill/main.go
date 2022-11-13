package main

import "fmt"

func main() {
	mybill := newBill("Mario's Bill")

	mybill.addItem("Onion Soup", 4.50)
	mybill.addItem("veg pie", 8.95)
	mybill.addItem("burrito", 12.99)

	mybill.updateTip(10)
	fmt.Println(mybill.format())
}