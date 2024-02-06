import { useState } from "react"
import Button from '@mui/material/Button';

function Person({ person }) {
	const [show, setShow] = useState(false) //ez azt jelenti, hogy alapvetően ne mutassuk ezeket az adatokat
/* Amennyiben a show true a 14. sorban ()a feltételben, akkor jelenjen meg az alatta lévő komponens, mint people.height, stb.
Előtte, a 13. sorban megírtuk, mi történjen onClick esemény hatására: Ha a show more gombra kattintunk, akkor ashow state értéke falsból true-ra áll át, és fordítva. */


	return (
		<div>
			{person.name}
			<Button variant="outlined" onClick={() => setShow(show => !show)}>show more</Button> 
			{show && 
				<>
					{person.height}cm
					{person.mass}kg
				</>
			}
		</div>
	)
}

export default Person