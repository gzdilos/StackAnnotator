Twitter Aux Documentation
----------------------

**Features**
- send_tweet([message])
- Todo: add more




Set Up
-----------------------
**Python libraries**

Run `pip install -r requirements.txt` to install requests and requests_oauthlib

**Environment Variables**

Must set up the following variables that can be accessed at https://apps.twitter.com/ (use the developer account)

 - `CONSUMER_KEY`
 - `CONSUMER_SECRET` 
 - `ACCESS_TOKEN`
 - `ACCESS_TOKEN_SECRET`


Example Usage
-----------------------

`from twitteraux import tweeter`

`tweeter.send_tweet("This is a tweet")`



