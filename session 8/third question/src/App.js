
import Ex from './components/Ex'
import Searchbar from './components/Searchbar'
import './App.css'
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
function App(){  

 return (
    <div>   
    <div className="app">
      <h1 >Hacker Stories</h1></div>
      <Searchbar/>
      <Ex stories={stories}/>
      
    </div>
  );
}
export default App;