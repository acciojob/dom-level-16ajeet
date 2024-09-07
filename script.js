//your JS code here. If required.
let currentNode = document.getElementById('level')

let count = 0;

	while (currentNode.parentNode) {
	count++;
	currentNode = currentNode.parentNode;	
}

alert(`The level of the element is : ${count}`);