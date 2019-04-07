import App from './App';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';



const Index = (props) => (
    <div className="container">
      <h1>Todo's</h1>
      <App/>
    
      <ul>
        {/* {props.items.map(show => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))} */
        props.items
        }
      </ul>
    </div>
  )

  




Index.getInitialProps = async function() {
  // const response;
  // fetch('./array.json')
  // .then(res => res.json())
  // .then(data => console.log(data));
  const res = await fetch('https://drive.google.com/file/d/15nsWAlSIkBpRj_L9KViqaJTLB3Cgyb-w/view?usp=sharing');
  const data = await res.text();

  console.log(`Show data fetched. Count: ${data.length}`);
  console.log(`Show data fetched. Count: ${data}`);

  return {
    items: data//map(entry => entry.todos)
  }
}

Index.getInitialProps();

export default Index
  
