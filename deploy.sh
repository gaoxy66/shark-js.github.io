#!/bin/bash
if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then
	rm -rf build || exit 0;
	mkdir build;
	./node_modules/shark-cli/bin/shark site/build-project
	( cd build
	 git init
	 git config user.name "${GIT_NAME}"
	 git config user.email "${GIT_EMAIL}"
	 git add .
	 git commit -m "Travis build $TRAVIS_BUILD_NUMBER deployed"
	 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master > /dev/null 2>&1
	)
fi
