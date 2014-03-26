## jQuery 2.x for Meteor

This package includes jQuery 2.x, packaged for Meteor.

It takes a different approach to the "[jquery](https://atmospherejs.com/package/jquery)
smart package" (this one is called "jquery2"), which overrides the jQuery package
included with Meteor.  This is quite dangerous, as it will break anything correctly
expecting jQuery 1.x, notably, Meteor itself (especially Blaze), e.g.

```
[Error] TypeError: 'undefined' is not an object (evaluating '$jq.event')
    (anonymous Function) (ui.js, line 506)
    (anonymous Function) (ui.js, line 593)
```

This package allows jQuery2 to co-exist side-by-side with jQuery1 in a Meteor
project.  Your app or smart package should require either `jquery` (the real
one included inside of Meteor, v1) or `jquery2` (this one), and will be
provided a `jQuery` and `$` object of the requested version.

## Previous install of jquery atmosphere package

You'll need to repair your current installation if your app or a smart package
used by your app previously requested the jquery smart package.  In your
project root:

```
rm -rf packages/jquery
```

and ensure that no smart package you use mentions jquery in it's `smart.json`.

## Full install Instructions for both options

### jQuery 1.x (internal, provided with Meteor)

#### In your app

meteor add jquery

#### In your smart package

**package.js**:
```js
api.use('jquery', 'client');
```

**smart.json**:
nothing!

### jQuery 2.x (this package)

#### In your app

mrt add jquery2

#### In your smart package

**package.js**:
```js
api.use('jquery2', 'client');
```

**smart.json**:
```js
{
	...
	"packages": {
		...
		'jquery2': '2.1.0-1'
	}
}
```
