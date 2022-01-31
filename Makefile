link:
	gulp --cwd node_modules/gulp-npm-publisher link

build:
	gulp --cwd node_modules/gulp-npm-publisher build

clean:
	gulp --cwd node_modules/gulp-npm-publisher clean

publish:
	gulp --cwd node_modules/gulp-npm-publisher publish

publish_patch:
	gulp --cwd node_modules/gulp-npm-publisher publish:patch

publish_minor:
	gulp --cwd node_modules/gulp-npm-publisher publish:minor

publish_major:
	gulp --cwd node_modules/gulp-npm-publisher publish:major