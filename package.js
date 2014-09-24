Package.describe({
  summary: 'A Winston Papertrail transport for Meteorite on top of Meteor.',
  version:'0.0.6',
  git: "https://github.com/edwardupton/meteor-winston-papertrail"
});

Npm.depends({
    "winston": "0.7.2",
    "winston-papertrail": "0.1.4"
});

Package.onUse(function (api, where) {
  // api.use('winston', 'server');

  api.add_files('winston-papertrail.js', 'server');
  if (api.versionsFrom) {
  	api.versionsFrom('METEOR@0.9.0');
  }
  if(api.export){
    api.export('Winston_Papertrail');
  }
});