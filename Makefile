app_exists = $(heroku apps:info -a ${APP_NAME} && echo 1 || echo 0)

build:	config
	ifeq($(app_exists), 1)
		heroku apps:destroy --app "${APP_NAME}" --confirm "${APP_NAME}"
	endif
	heroku create apps:create --app "${APP_NAME}" --region eu | echo "::set-output name=deployUrl::$(awk {'print $1'})"
	# heroku create apps:create --app "${APP_NAME}" --region eu | echo "DEPLOYED_URL=$(awk {'print $1'})" >> GITHUB_ENV

deploy-heroku:	config
	# git config --global user.name "rhexa"
	# git config --global user.email "${EMAIL}"
	# heroku create apps:create --region eu | echo "DEPLOYED_URL=$(awk {'print $1'})" >> GITHUB_ENV
	# heroku create "rhexa-$(date +'%d-%m-%H%M')" > text
	heroku git:remote --app "${APP_NAME}" 
	# git branch -ra
	git restore .
	# git status
	git checkout -b main
	git push -u heroku main

config:
	sudo chmod u+x ./cred.sh
	sh ./cred.sh

cleanup:
	# heroku apps:destroy --app "${APP_NAME}" --confirm "${APP_NAME}"
	rm ~/.netrc
