link:
	gulp --cwd node_modules/gulp-npm-module-publisher link

build:
	gulp --cwd node_modules/gulp-npm-module-publisher build

clean:
	gulp --cwd node_modules/gulp-npm-module-publisher clean

publish:
	gulp --cwd node_modules/gulp-npm-module-publisher publish

publish_patch:
	gulp --cwd node_modules/gulp-npm-module-publisher publish:patch

publish_minor:
	gulp --cwd node_modules/gulp-npm-module-publisher publish:minor

publish_major:
	gulp --cwd node_modules/gulp-npm-module-publisher publish:major