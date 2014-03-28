Package.describe({
	summary: 'jQuery 2.x (2.1.0) that co-exists with jquery package (v1)'
});

Package.on_use(function(api) {
	api.add_files('lib/jquery-2.1.0.js', 'client');
	api.add_files('jquery2.js', 'client');
	api.export(['jQuery2', '$2'], 'client'); 
});
