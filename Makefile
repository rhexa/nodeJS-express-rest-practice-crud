build:	config
	heroku apps:destroy --app "${APP_NAME}" --confirm "${APP_NAME}" && echo 0 || echo 1
	heroku create apps:create --app "${APP_NAME}" --region eu | cut -d '|' -f1 | xargs > url.txt
	cat url.txt

deploy-heroku:	config
	heroku git:remote --app "${APP_NAME}" 
	git restore .
	git checkout -b main || echo 1
	git push -u heroku main

config:
	sudo chmod u+x ./cred.sh
	sh ./cred.sh

cleanup:
	rm ~/.netrc
