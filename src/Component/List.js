import React from "react";
import './List.css';
function List() {

// Declared an array of items
const fruits = [
	'Apple',
	'Mango',
	'Banana',
	'Grapes',
	'Cherry',
	'Papaya',
	'Kiwi',
	'Orange'
];

// Some styling for the items
const styles = {
	backgroundColor: 'black',
	width: '150px',
	marginTop:'2rem',
	marginBottom: '10px',
	padding: '10px', 
	color: 'white',
	boxShadow: 'rgb(0,0,0,0.44) 0px 5px 5px',
};

return <>
	{
	/* This maps each array item to it */
	fruits.map(fruit => <div key= {fruit}
			style={styles} className="map">
                
              {fruit}</div>)
	}
</>;
}

export default List;
