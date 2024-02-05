import { useState } from "react"
import Button from '@mui/material/Button';

function Person({ person }) {
	const [show, setShow] = useState(false)

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