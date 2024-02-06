import { useEffect, useState } from 'react'
import './App.css'
import LoadingMask from './components/LoadingMask'
import People from './components/People'

function App() {
  const [people, setPeople] = useState(null)  //kimentjük egy tstbe a fetchet

  // ------- FETCH ------ 10-14. sor
  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then(res => res.json())
      .then(data => setPeople(data))
  }, [])


  //---- amíg nincsen adatunk, addig kiírja: loading... VAGY a LoadinMask-ot
  /* ehhez eredetileg elög ez is: 
  return (
    <>
      {people 
        ? 
        <div className='people><div/>
        :
        <p>loading...<p/>
      }
    </>
  )
   */
  return (
    <>
      {people 
        ? 
        <People people={people.results}/> //Ha van adatunk, akkor a People komponenst futtatjuk
        :
        <LoadingMask />  //Ameddig nem töltődik be a fetchünk, addig a LoadingMask fog megjelenni.
      }
    </>
  )
}

export default App