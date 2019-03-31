import React, { Component } from 'react';

const ulStyle = {
    padding: '0',
    marginTop: '10px',
    padding: '20px'
};

const listStyle = {
    backgroundColor: 'yellow',
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
    padding: '20px',
    fontSize: '25px',
    textAlign: 'center',
    position: 'relative',
    marginTop: '3px',
    listStyleType: 'none'

};

const delStyle = {
    fontSize: '20px',
    color: 'white',
    backgroundColor: 'red',
    border: 'none',
    marginLeft: '30px',
    cursor: 'pointer',
    position: 'absolute',
    right: '10px',
    top: '20px'
    
};



export default class List extends Component {
    removeItem(item, i) {
        this.props.removeTodo(item, i);
    }

    render() {
        return(
            
            <ul style={ulStyle}>
                {

                this.props.items.map((item, index) => <li style={listStyle} key={index}>{item}
                    <button onClick={() => this.removeItem(item, index)} style={delStyle}>X</button>
                </li>)
                }
            </ul>
        );
    }
}



// const List = props => (
    
//   <ul style={ulStyle}>
//     {
//       props.items.map((item, index) => <li style={listStyle} key={index}>{item}
//         <button onClick={(e) => { this.removeItem(props, item)}} style={delStyle}>X</button>
//       </li>)
//     }
// //   </ul>
// );

// export default List;