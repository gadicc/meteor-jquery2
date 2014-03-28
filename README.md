## jQuery 2.x for Meteor

This package includes jQuery 2.x, packaged for Meteor, and written
specifically to co-exist with jQuery1 (which is required by Meteor).  You
should only use this package if you're absolutely sure you need jQuery 2.
jQuery 1 is still sent down to the client too.  And your jQuery2 code won't
work on IE 6-8.

I took a different approach to the "[jquery](https://atmospherejs.com/package/jquery)"
smart package (this one is called "jquery2"), which overrides the jQuery package
included with Meteor.  This is quite dangerous, as it will break anything correctly
expecting jQuery 1.x, notably, Meteor itself (especially Blaze), e.g.

```
[Error] TypeError: 'undefined' is not an object (evaluating '$jq.event')
    (anonymous Function) (ui.js, line 506)
    (anonymous Function) (ui.js, line 593)
```

This package allows jQuery2 to co-exist side-by-side with jQuery1 in a Meteor
project.  Your app or smart package should require either `jquery` (the real
one included inside of Meteor, v1) or `jquery2` (this one), although your code
needs to refer to jQuery2 specifically (see below).

Take heed of the following message from jQuery (retrieved 2014-03-26):

> jQuery 2.x has the same API as jQuery 1.x, but (does not support Internet
Explorer 6, 7, or 8*. All the notes in the
[jQuery 1.9 Upgrade Guide](http://jquery.com/upgrade-guide/1.9/) apply here as well.
Since IE 6/7/8 are still relatively common, **we recommend using the 1.x version 
unless you are certain no IE 6/7/8 users are visiting the site**. Please read the
[2.0 release notes](http://blog.jquery.com/2013/04/18/jquery-2-0-released/) carefully.

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

```
meteor add jquery
```

#### In your smart package

**package.js**:
```js
api.use('jquery', 'client');
```

**smart.json**:

nothing!

### jQuery 2.x (this package)

#### In your app

```
mrt add jquery2
```

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
		"jquery2": "2.1.0-3"
	}
}
```

## Using

As you'll see below, you now have access to `jQuery2` and `$2` in your code.
You can also wrap existing code so that it can still refer to `jQuery` and `$`
but gets the jquery2 versions (you can wrap entire files like this).

```js
	console.log('I want jQuery 1.x and got jQuery ' + $.fn.jquery);
	console.log('I want jQuery 2.x and got jQuery ' + $2.fn.jquery);

    (function(jQuery, $) {
    	// `jQuery` and `$` in the code below is the jquery2 version
		console.log('I want jQuery 2.x and got jQuery ' + $.fn.jquery);
    }).call(this, jQuery2, $2);
```

Output:

```
I want jQuery 1.x and got jQuery 1.11.0
I want jQuery 2.x and got jQuery 2.1.0
I want jQuery 2.x and got jQuery 2.1.0 
```
