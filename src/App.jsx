const list =[
  {
    title: 'Bhushita',
    url:'bhushita.com',
    father: 'Hari inamadugu'
  },
  {
    title: 'Sai Ashrita',
    url:'inamadugu.com',
    father: 'Sri Hari Reddy Inamadugu'
  },
];

function App() {


  return (
    <div><h1>My hacker Stories </h1>

      <label htmlFor="search"> Search: </label>
      <input id="search" type="text" / >
      <hr/>
      <ul>
  {list.map(function(item, idx) {
    return (
      <li key={idx}>
        {item.title} - {item.father}
      </li>
    );
  })}
</ul>
      </div>
  );
}

export default App
