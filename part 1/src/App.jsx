import Button from "./Button"
import List from "./List"
// import Header from "./Header";
import Person from "./Person"

function App() {
  

  return (
    <>
      <Person name="Ramgopal Patel" age="22" />
      
      <Button text={'Click Me'} onClick={()=>alert('Hey! Ram, I am working fine.')}/>
      {/* <Header title={'Title assignment Q3'}/> */}
      <List items={['Apple','Banana','Papaya','Mango','Orange']}/>
      
    </>
  );
}

export default App
