deploy-heroku:
	sudo chmod u+x ./cred.sh
	sh ./cred.sh
	
	git config --global user.name "rhexa"
	git config --global user.email "${EMAIL}"
	# heroku create "rhexa-$(date +'%d-%m-%H%M')" > text
	heroku git:remote --app "${APP_NAME}" 
	git branch -r
	cat ~/.netrc
	git push heroku main -f

cleanup:
	rm ~/.netrc
