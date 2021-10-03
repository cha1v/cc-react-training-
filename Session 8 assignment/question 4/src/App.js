
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

