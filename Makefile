deploy-heroku:
	sudo chmod u+x ./cred.sh
	sh ./cred.sh
	git config --global user.name "rhexa"
	git config --global user.email "${EMAIL}"
	# heroku create "rhexa-$(date +'%d-%m-%H%M')" > text
	heroku git:remote --app "${APP_NAME}" 
	git branch -ra
	git status
	git restore .
	# git checkout -b m/heroku --track heroku/main
	git push -u heroku HEAD:master

cleanup:
	rm ~/.netrc
