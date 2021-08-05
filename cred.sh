echo "machine api.heroku.com
  login $EMAIL
  password $HEROKU_API_KEY
machine git.heroku.com
  login $EMAIL
  password $HEROKU_API_KEY" > ~/.netrc
