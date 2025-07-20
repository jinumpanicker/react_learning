function getTitle(greeting,title){
    return greeting + " " + title;
}

 

function App() {


  return (
    <div><h1>
       {getTitle("Hi","Bhushita")} </h1>

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" / >
      </div>
  );
}

export default App
