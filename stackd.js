(function() {

	this.Stackd = function() {

		this.stackd = null;
		this.stackdControls = null;
		this.prevButton = null;
		this.nextButton = null;

		var defaults = {
			id: 'stackd',
			controls: true,
			keyboard: false,
			offset: 15,
			visible: 3,
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

	Stackd.prototype.init = function() {
		construct.call(this);
		initializeStackdEvents.call(this);
		sortStackd.call(this);
	}

	Stackd.prototype.previous = function(e) {
		e.preventDefault();
		this.stackd.insertBefore(this.stackd.children[this.stackd.children.length - 1], this.stackd.firstChild);
		sortStackd.call(this);
	}

	Stackd.prototype.next = function(e) {
		e.preventDefault();
		this.stackd.appendChild(this.stackd.children[0]);
		sortStackd.call(this);
	}

	Stackd.prototype.keyPress = function(e) {
		e.preventDefault();

		if (e.keyCode === 37) {
			this.stackd.insertBefore(this.stackd.children[this.stackd.children.length - 1], this.stackd.firstChild);
			sortStackd.call(this);

		} else if (e.keyCode === 39) {
			this.stackd.appendChild(this.stackd.children[0]);
			sortStackd.call(this);

		}
	}

	function construct() {

		if (this.options.id) {
			this.stackd = document.getElementById(this.options.id);
		}

		if (this.options.controls) {

			this.stackdControls = document.createElement('div');
			this.stackdControls.id = 'stackd-controls';

			this.prevButton = document.createElement('a');
			this.prevButton.href = '';
			this.prevButton.id = 'stackd-prev';
			this.prevButton.innerHTML = this.options.previousButtonContent;

			this.nextButton = document.createElement('a');
			this.nextButton.href = '';
			this.nextButton.id = 'stackd-next';
			this.nextButton.innerHTML = this.options.nextButtonContent;

			this.stackdControls.appendChild(this.prevButton);
			this.stackdControls.appendChild(this.nextButton);

			this.stackd.parentNode.appendChild(this.stackdControls);

		}

	}

	function sortStackd() {

		for (var i = 0; i < this.stackd.children.length; i++) {
			this.stackd.children[i].style.top = i * -this.options.offset +'px';
			this.stackd.children[i].style.left = i * this.options.offset +'px';
			this.stackd.children[i].style.opacity = 1 / (i + 1);
			this.stackd.children[i].style.zIndex = this.stackd.children.length - i;
			this.stackd.children[i].style.visibility = (i <= (this.options.visible - 1)) ? 'visible' : 'hidden';
		}
	}

	function initializeStackdEvents() {

		if (this.options.controls) {
			this.prevButton.addEventListener('click', this.previous.bind(this));
			this.nextButton.addEventListener('click', this.next.bind(this));
		}

		if (this.options.keyboard) {
			document.onkeydown = this.keyPress.bind(this);
		}

	}

}());