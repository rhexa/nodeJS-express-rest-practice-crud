deploy-heroku:
	chmod u+x ./cred.sh
	sh ./cred.sh
	git config --global user.name "rhexa"
	git config --global user.email $EMAIL
	heroku create
	git push heroku main

cleanup:
	rm ~/.netrc