

const Searchbar =({onSearch}) => (
    <div>
        <label htmlFor="search">Search for :</label> 
        <input id="search" type="text" onChange={onSearch}/>
        
       </div>
)
export default Searchbar