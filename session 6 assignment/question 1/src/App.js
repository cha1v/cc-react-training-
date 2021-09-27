


  function App() {
    const Fruits = ["apple", "orange", "banana"];
  
    return (
      <ol>
        {Fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ol>
    );
  
        }
  
  export default App;