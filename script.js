const people = [
	{
		name: "Ricsi",
		age: 29,
		latestPurchases: [
			{
				item: "shoe",
				price: 2999,
			},
			{
				item: "computer",
				price: 199999
			},
			{
				item: "beer",
				price: 349
			}
		] 
	},
	{
		name: "Jakab",
		age: 14,
		latestPurchases: [
			{
				item: "book",
				price: 1999
			}, 
			{
				item: "ticket",
				price: 999
			}
		]
	},
	{
		name: "Kálmán",
		age: 22,
		latestPurchases: [
			{
				item: "computer",
				price: 250000
			},
			{
				item: "computer",
				price: 390000
			}
		]
	}
]

const newItem = {
	item: "beer",
	price: 179
}

function getPossibleCustomers(people, newItem) {
	let result = []

	people.forEach(person => {
		if (person.age >= 18) {
			let possibleCustomer = false

			person.latestPurchases.forEach(purchase => {
				if (purchase.item === newItem.item && purchase.price > newItem.price) {
					possibleCustomer = true
				}
			})

			if (possibleCustomer) {
				result.push(person.name)
			}
		}
	})

	if (result.length === 0) {
		return null
	} else {
		return result
	}
}

console.log(getPossibleCustomers(people, newItem))

/* 

FELADAT:
Kapunk egy ember objectekből álló arrayt, amelyek így néznek ki:
{
	name: "Ricsi",
	age: 29,
	latestPurchases = [
		{
			item: "shoe",
			price: 2999,
		},
		{
			item: "computer",
			price: 199999
		},
		{
			item: "beer",
			price: 349
		}
	] 
}

{
	name: "Jakab",
	age: 14,
	latestPurchases: [
		{
			item: "book",
			price: 1999
		}, 
		{
			item: "ticket"
			price: 999
		}
	]
}

az a feladatunk, hogy kiderítsük, hogy az új termék kiknek lenne jó ajánlat

jó ajánlat a termék, ha:
 - a vásárló legalább 18 éves,
 - a legutóbbi vásárlásai között van:
   - ugyanolyan item
	 - olcsóbb az új termék mint az ugyanolyan item

visszatérési érték: arrayben a lehetséges vásárlók neve, minden vásárló maximum 1x, vagy null, ha nincs lehetséges vásárló

*/