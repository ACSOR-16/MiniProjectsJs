console.log("Hello World");
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem("items")) || [];

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone)

function addItem(event) {
	// cancels the submit event from reloading
	event.preventDefault()

	const text = (this.querySelector('[name=item]')).value;
	const item = {
		text,
		done: false
	}
	console.log(item);

	items.push(item);
	populateList(items, itemsList);
	localStorage.setItem('items', JSON.stringify(items));
	this.reset();
}

function populateList(plates = [], plateList) {
	plateList.innerHTML = plates.map( (plate, i) => {
		return` 
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
				<label for="item${i}">${plate.text}</label>
			</li>
		`
	}).join('');
}

function toggleDone(event) {
	if (!event.target.matches('input')) return; // skip this unless it's an input
	const element = event.target;
	const index = element.dataset.index;
	items[index].done = !items[index].done;
	localStorage.setItem("items", JSON.stringify(items));
	populateList(items, itemsList);
}

populateList(items, itemsList);