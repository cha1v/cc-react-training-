import Searchbar from "./components/Searchbar";
import List from "./components/List"
import React,{useState} from "react";

function App(){
  const stories =[
    {
      name:"Kevin Mitnick",
      age:58,
      position:1,
      url:<a href="https://www.knowbe4.com/products/who-is-kevin-mitnick/">Biography</a>,
    },
    {
      name:"Jonathan James",
      age:24,
      position:2,
      url:<a href="https://pantheon.world/profile/person/Jonathan_James/">Biography</a>,
  },
  {
    name:" Albert Gonzalez",
    age:40,
    position:3,
    url:<a href="https://www.wikiwand.com/en/Albert_Gonzalez">Biography</a>,
  },
  ];

  
  const [searchValue,setSearchTerm]=useState('')
  const handleOnSearch=(event) => {
     setSearchTerm(event.target.value);
  }

  const newstory =stories.filter((story) =>
  story.name.toLowerCase().includes(searchValue.toLowerCase()) );

  return(
    <div>
   <Searchbar  onSearch={handleOnSearch}/>
   <h4>Searching For:{searchValue}</h4>
   <List stories={newstory}></List>
   </div>
  );
}

export default App




















































/*4: The following React Component accepts many props as show below:

<Car engine={car.engine} gearBox={car.gearBox} type={car.type} spareWheel={car.spareWheel} seatingCapacity={car.seatingCapacity} bhp={car.bhp} torque={car.torque} />

How would you refactor this component to make it more readable? How will you optimize sending the props, 
as well as receiving the props?

Provide necessary default values where suitable. Ignore properties 'seatingCapacity' and 'spareWheel' 
and put those items in an array called 'ignoredProperties'  and display the same in the browser console.*/

 /*

export default function  App() {
  const car={
    engine:"engine",
    gearBox:"gearBox",
    type:"type",
    spareWheel:"spareWheel",
    seatingCapacity:"seatingCapacity",
    bhp:'bhp',
    torque:'torque',
  };
  return(
    <div>
   
      <Car {...car}/> 
    </div>
  );
}

const Car=({engine,gearBox,type, ...other}) => (
  <div>
   < Ignoredproperties {...other}/>
   
  </div>
);

const Ignoredproperties =({...other}) =>
{
  return(
    <div><ul>
      <h1>Ignored Properties:</h1>
 <li>{other.spareWheel}</li>
<li>{other.seatingCapacity}</li>
</ul>
 </div>
);
  }

  console.log({Ignoredproperties});*/