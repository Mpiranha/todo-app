import App from './App';
import fetch from 'isomorphic-unfetch';



const Index = (props) => (
    <div className="container">
     
      <App/>
      <h1>Long Term Goals</h1>
      <ul>
        {props.items.map(todo => (
          <li key={todo.id}>
              {todo.item}
          </li>
        ))}
      </ul>
    </div>
  )

  




Index.getInitialProps = async function() {
  // const response;
  // fetch('./array.json')
  // .then(res => res.json())
  // .then(data => console.log(data));
  const res = await fetch('https://raw.githubusercontent.com/Mpiranha/todo-app/feature/okeke_chukwubueze/add-express-server/pages/array.json');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(`Show data fetched. Count: ${JSON.stringify(data)}`);

  return {
    items: data.map(entry => entry.todos[0])
  }
}


export default Index
  
