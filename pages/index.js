import App from './App';
import fetch from 'isomorphic-unfetch';



const Index = (props) => (
    <div className="container">
     
      <App online=
        {
          props.items.map(todo => (
          
              todo.content
        ))
      } />
      </div>
      /* <ul>
        
      </ul> */
    
  )

  




Index.getInitialProps = async function() {
 
  const res = await fetch('http://localhost:3000/todos');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(`Show data fetched. Count: ${JSON.stringify(data)}`);

  return {
    items: data.map(entry => entry)
  }
}


export default Index
  
