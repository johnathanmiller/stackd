# Stackd.js Slider
[Demo](https://johnathanmiller.github.io/stackd/demo.html 'Stackd.js Slider Demo')

## HTML
```html
<ul id="stackd">
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>
```

## Integration
```js
<script src="./stackd.min.js"></script>
<script>
	let stackd = new Stackd({
		// options here
	});
	stackd.init();
</script>
```

## Options
| option | description | default |
| ------ | ----------- | ------- |
| id | id name for slider container | "stackd" |
| controls | displays previous/next buttons for slider | true |
| offset | offset of each visible slide | 15 |
| previousButtonContent | html/text inside previous button | "&amp;larr;"
| nextButtonContent | html/text inside next button | "&amp;rarr;"

---

## Todo
- Support for multiple sliders
- Keyboard left/right controls
- Option to change offset direction
- Option to change visible slide count
- Auto rotate and speed setting
- Support intergration as jQuery plugin