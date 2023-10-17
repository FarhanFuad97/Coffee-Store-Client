
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';

function App() {
 const loadedcoffees = useLoaderData();
 const [coffees,setCoffees] = useState(loadedcoffees);


  return (
    <>
      
      <h1 className='text-6xl text-purple-600 text-center mt-3'>Hot cold coffe: {coffees.length}</h1>
      <div className='m-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard 
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
