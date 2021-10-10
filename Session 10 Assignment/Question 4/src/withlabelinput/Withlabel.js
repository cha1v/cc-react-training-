const Withlabel =({onSearch,type,label,id}) => (
    <div>
        <label htmlFor={id}>{label}</label> 
        <input id={id} type={type} onChange={onSearch}/>
        
       </div>
)
export default Withlabel