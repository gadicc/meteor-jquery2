Package.describe({
	summary: 'jQuery 2.x (2.1.0), packaged for Meteor'
});

Package.on_use(function(api) {
	api.add_files('lib/jquery-2.1.0.js', 'client');
	api.export(['jQuery', '$'], 'client'); 
});
