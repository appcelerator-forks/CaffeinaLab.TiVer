#!/usr/bin/env node

var program = require('commander');
var package = require('./package.json');
var logger = require('./lib/logger');
var fs = require('fs');
var ticons = require('ticons');

// var notifier = updateNotifier();
// if (notifier.update) notifier.notify();

program
.version(package.version, '-v, --version')
.description(package.description)
.usage('-t <VERSION>')
.option('-t, --type <type>', 'Release type')
.parse(process.argv);

var VER = program.type;
if (!VER) {
	program.help();
	process.exit();
}

if (fs.existsSync('./tiapp.'+VER+'.xml')) {
	fs.unlinkSync('tiapp.xml');
	fs.symlinkSync('./tiapp.'+VER+'.xml', 'tiapp.xml');
} else {
	console.warn('A tiapp.'+VER+'.xml not exists');
}

if (fs.existsSync('icon.'+VER+'.png')) {
	ticons.icons({
		input: 'icon.'+VER+'.png'
	}, function(err, out) {
		if (err) {
			return console.error(err);
		}

		console.log("Generated files: "+out.join('\n'));
	});
}