package main

import "fmt"

// Struct -- similar to object / class
type bill struct {
	name string
	items map[string]float64
	tip float64
}

// Make new bills
func newBill(name string) bill {
	b := bill{
		name: name,
		items: map[string]float64{},
		tip: 0,
	}

	return b
}

// format the bill using receiver function
func (b *bill) format() string {
	fs := "Bill breakdown: \n"
	var total float64 = 0

	// list items
	for k, v := range b.items {
		fs += fmt.Sprintf("%-25v ...$%v \n", k+":", v)
		total += v
	}

	// tip
	fs += fmt.Sprintf("%-25v ...$%0.2f \n", "tip:", b.tip)
	// total
	fs += fmt.Sprintf("%-25v ...$%0.2f", "total:", total+b.tip)

	return fs
}

// update tip
func (b *bill) updateTip(tip float64) {
	b.tip = tip
}

// Add items 
func (b *bill) addItem(name string, price float64) {
	b.items[name] = price
}