console.log(cars)

const rootElement = document.querySelector("#root")

cars.forEach((car, index) => rootElement.insertAdjacentHTML("beforeend", `
	<div class="car">
		<h2>${car.type}</h2>
		<p>${car.runTime} km</p>
		<div class="price">${car.price}.00 HUF</div>
		<div class="number">${index + 1} </div>
	</div>
`))