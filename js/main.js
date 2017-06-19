/* a class to holds the todo methods*/

class ToDoApp {
	
	constructor() {}

	// add method 
	add(text) {
		var app = this;
		var li = document.createElement('li');
		var span  = document.createElement('span');
		span.innerHTML = text;

		var doneBtn = document.createElement('button');
		doneBtn.innerHTML = 'Done';
		doneBtn.setAttribute('class', 'done btn btn-success btn-xs');
		doneBtn.addEventListener('click', function() {
			app.markDone(this.parentNode, this)
			this.style.display = 'none';
			this.parentNode.children[2].style.display = 'inline';
		})

		var undoBtn = document.createElement('button');
		undoBtn.innerHTML = 'Undo';
		undoBtn.setAttribute('class', 'undo btn btn-success btn-xs');
		undoBtn.addEventListener('click', function() {
			app.undo(this.parentNode, this);
			this.style.display = 'none';
			this.parentNode.children[1].style.display = 'inline';
		})


		var removeBtn = document.createElement('button');
		removeBtn.innerHTML = 'Remove';
		removeBtn.setAttribute('class', 'remove btn btn-danger btn-xs');
		removeBtn.addEventListener('click', function() {
			app.remove(this.parentNode);
		})

		li.appendChild(span);
		li.appendChild(doneBtn);
		li.appendChild(undoBtn);
		li.appendChild(removeBtn);

		container.insertBefore(li, container.firstChild);

	}

	// remove method
	remove(element) {
		var parent = element.parentNode;
		parent.removeChild(element)
		console.log('removed')

	}

	// markDone
	markDone(element, btn) {
		element.setAttribute('class', 'doneTask');
	}

	// undo 
	undo(element, btn) {
		element.classList.remove("doneTask");
	}

}

/*
	Creating a new app
	the container must be defined as the HTML wrapper for the toto Tasks
*/

var app = new ToDoApp();
app.container = document.getElementById('container')


$(document).ready(function() {
	$('#addBtn').on('click', function() {
		var val = $('#task').val().trim();
		if(val) {
			app.add(val);
		}

		$('#task').val('')
	})
})

