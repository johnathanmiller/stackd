(function() {

	this.Stack = function() {

		this.stack = null;
		this.stackControls = null;
		this.prevButton = null;
		this.nextButton = null;

		var defaults = {
			id: 'stack',
			controls: true,
			offset: 15,
			previousButtonContent: '&larr;',
			nextButtonContent: '&rarr;'
		}

		if (arguments[0] && typeof arguments[0] === 'object') {

			for (let property in arguments[0]) {
				if (arguments[0].hasOwnProperty(property)) {
					defaults[property] = arguments[0][property];
				}
			}

			this.options = defaults;

		}

	}

	Stack.prototype.init = function() {
		construct.call(this);
		initializeStackEvents.call(this);
		sortStack.call(this);
	}

	Stack.prototype.previous = function(e) {
		e.preventDefault();
		this.stack.insertBefore(this.stack.children[this.stack.children.length - 1], this.stack.firstChild);
		sortStack.call(this);
	}

	Stack.prototype.next = function(e) {
		e.preventDefault();
		this.stack.appendChild(this.stack.children[0]);
		sortStack.call(this);
	}

	function construct() {

		if (this.options.id) {
			this.stack = document.getElementById(this.options.id);
		}

		if (this.options.controls) {

			this.stackControls = document.createElement('div');
			this.stackControls.id = 'stack-controls';

			this.prevButton = document.createElement('a');
			this.prevButton.href = '';
			this.prevButton.id = 'stack-prev';
			this.prevButton.innerHTML = this.options.previousButtonContent;

			this.nextButton = document.createElement('a');
			this.nextButton.href = '';
			this.nextButton.id = 'stack-next';
			this.nextButton.innerHTML = this.options.nextButtonContent;

			this.stackControls.appendChild(this.prevButton);
			this.stackControls.appendChild(this.nextButton);

			this.stack.parentNode.appendChild(this.stackControls);

		}

	}

	function sortStack() {

		for (var i = 0; i < this.stack.children.length; i++) {
			this.stack.children[i].style.top = i * -this.options.offset +'px';
			this.stack.children[i].style.left = i * this.options.offset +'px';
			this.stack.children[i].style.opacity = 1 / (i + 1);
			this.stack.children[i].style.zIndex = this.stack.children.length - i;
			this.stack.children[i].style.visibility = (i <= 2) ? 'visible' : 'hidden';
		}
	}

	function initializeStackEvents() {

		if (this.options.controls) {
			this.prevButton.addEventListener('click', this.previous.bind(this));
			this.nextButton.addEventListener('click', this.next.bind(this));
		}

	}

}());