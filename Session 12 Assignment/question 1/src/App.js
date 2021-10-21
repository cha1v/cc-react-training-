import Searchbar from "./components/Searchbar";
import List from "./components/List"
import React,{useEffect, useReducer} from "react";
import useSemiPersistenceState from "./hooks/useSemiPersistenceState";


  const stories =[
   {
      id:'a',
      name:"Kevin Mitnick",
      age:58,
    
      url:<a href="https://www.knowbe4.com/products/who-is-kevin-mitnick/">Biography</a>,
    },
    {
      id:'b',
      name:"Jonathan James",
      age:24,
      
      url:<a href="https://pantheon.world/profile/person/Jonathan_James/">Biography</a>,
  },
  {
    id:'c',
    name:" Matthew Bevan and Richard Pryce",
    age:40,
 
    url:<a href="https://www.wikiwand.com/en/Albert_Gonzalez">Biography</a>,
  },
{
    id:'d',
    name:" Jeanson James Ancheta",
    age:36,
   
    url:<a href="https://en.wikipedia.org/wiki/Jeanson_James_Ancheta">Biography</a>,
  },
   {
    id:'e',
    name:" Michael Calce",
    age:40,
   
    url:<a href="https://en.wikipedia.org/wiki/Michael_Calce">Biography</a>,
  },
  ];
  
  const storiesReducer =(state,action) => {
    switch (action.type){
        case "STORIES_FETCH":
          return { ...state,isLoading:true,isError: false};
        case "STORIES_FETCH_SUCCESS":
          return { ...state,data: action.payload,isLoading:false,isError: false};
        case "STORIES_FETCH_FAILURE":
          return { ...state,data:[], isLoading:false,isError: true};
        default:
          throw new Error();
    }
   
  };

  const getAsyncData=() => new Promise((res,rej)=> setTimeout(()=> res({data:stories}),3000));

  function App(){

  const [searchValue,setSearchTerm]=useSemiPersistenceState()

 
  const handleOnSearch=(event) => {
     setSearchTerm(event.target.value);
  }


  const [newstories, dispatchNewstories] =useReducer(storiesReducer,{
    data:[],
    isLoading:false,
    isError:false,
  });

  useEffect(
    () => {
      dispatchNewstories({type:"STORIES_FETCH"});
      getAsyncData().then((result) => {
      dispatchNewstories({type:"STORIES_FETCH_SUCCESS",payload:result.data});
       })
       .catch(() => {
        dispatchNewstories({type:"STORIES_FETCH_FAILURE"});
       });
      
    },[])
 
  function handleRemove(id) {
    const newList = newstories.data.filter((val) => val.id !== id);
    dispatchNewstories({type:"STORIES_FETCH_SUCCESS",payload:newList})
  }

  const newstory =newstories.data.filter((story) =>
  story.name.toLowerCase().includes(searchValue.toLowerCase()) 
  );

  return(
    <div>
    
   <Searchbar  onSearch={handleOnSearch}/>
   <h4>Searching For:{searchValue}</h4>
   {newstories.isLoading?(<p>Loading...</p>):
   (<List stories={newstory}  onRemove={handleRemove}></List>)}
   {newstories.isError && <p>something went wrong...</p>}
   </div>
  );
}

export default App