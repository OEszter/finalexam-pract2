import { useState } from "react"
import Person from "./Person"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function People({ people }) {
	const [searchString, setSearchString] = useState("")//ez a keresőfunkcióhoz kell
	const [peopleData, setPeopleData] = useState(people)
	const [sortBy, setSortBy] = useState("asc")  ///ez egy kapcsoló asc = növekvő

	console.log(people)

// ----- KERESő --- 
	const handleSort = () => {
		setPeopleData([...people]  //azért nem a peopleData-t vesszük, mert a ...people mindig megőrzi az eredeti értékét
			.sort((a, b) => sortBy === "asc" 
				? /* a.name.localeCompare(b.name) */ a.height - b.height
				: /* b.name.localeCompare(a.name) */ b.height - a.height
			))
		setSortBy(sortBy === "asc" ? "desc" : "asc")  //vált, hogy melyiket kérhetem le, attól függően, hogy melyiket listáztattam épp ki. A 26. sorba beillesztettem a gombab az "asc"/"desc" szöveget
	}

	return (
		<>
			<TextField variant="outlined" label="search" type="text" onChange={e => setSearchString(e.target.value)}/>
			<Button variant="outlined" onClick={handleSort}>sort by {sortBy}</Button>
			{peopleData  
				.filter(person => person.name.toLowerCase().includes(searchString.toLowerCase()))
				.map((person, index) => <Person key={index} person={person}/>)}
		</>
	)
}

export default People