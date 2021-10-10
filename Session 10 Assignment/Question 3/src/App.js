import React,{ useState,useEffect,useRef} from "react";

function App() {
  const [name, setName] = useState('Hello')
  const previousName = useRef(null)

  useEffect(() => {
    previousName.current = name
  }, [name])

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div><h1>previous value: {previousName.current}</h1></div>
    </>
  )
}
export default App;
