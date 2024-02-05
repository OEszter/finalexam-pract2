class Customer {
	constructor(name, purchases, registeredSince) {
		this.name = name
		this.purchases = purchases
		this.registeredSince = registeredSince
	}

	totalSpent() {
		let result = 0

		this.purchases.forEach(purchase => result += purchase.price)

		return result
	}

	isVip() {
		if (this.registeredSince <= 2020 && this.totalSpent() > 200000) {
			return true
		} else {
			return false
		}
	}
}

const customer1 = new Customer("Ricsi", [
	{
		item: "shoes",
		price: 2999
	},
	{
		item: "hat",
		price: 6000
	}
], 2019)

const customer2 = new Customer("Jani", [
	{
		item: "pencil",
		price: 10000
	},
	{
		item: "washing machine",
		price: 200000
	}
], 2015)

const customer3 = new Customer("Béci", [], 2002)
const customer4 = new Customer("Laca", [
	{
		item: "island",
		price: 1700000000
	}
], 2020)

/* console.log(customer1.totalSpent())
console.log(customer2.totalSpent())
console.log(customer3.totalSpent())
console.log(customer4.totalSpent())

console.log(customer1.isVip())
console.log(customer2.isVip())
console.log(customer3.isVip())
console.log(customer4.isVip()) */

class VipCustomers {
	static getNumberOfVipCustomers(customers) {
		let result = []

		customers.forEach(customer => {
			if (customer.isVip() === true) {
				result.push(customer)
			}
		})

		return result.length
	}
}

console.log(VipCustomers.getNumberOfVipCustomers([customer1, customer2, customer3, customer4]))