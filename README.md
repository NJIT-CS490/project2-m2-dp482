Git clone part 1 of the project or copy the required files 

- React Setup

1) npm install
2) sudo pip install flask-socketio
2) sudo pip install eventlet
3) npm install -g webpack
4) npm install --save-dev webpack
4) npm install socket.io-client --save


- Setting up OAuth with Google 

1) Go to https://console.developers.google.com/ and sign up using your PERSONAL google account.
2) Create Project -> Select a Project -> NEW PROJECT
3) Project name - "" || 'No Organization'
4) Credentials -> + CREATE CREDENTIALS -> OAuth client ID
5) Credentials -> Create Credentials -> OAuth client ID / Click "Web application"

- Run part 1 to make sure everything is working 
1) sudo service postgresql start
2) npm run watch 
3) New terminal - cd to project and then (python app.py)
4) Preview and check it

- Add codes to link GoogleButton (Login is required to chat)
1) scripts -> GoogleButton.jsx && scripts -> Content_Auth.jsx
2) Update the code of the following files according to the requiremnets: (Button.jsx, python.py, Main.jsx, Content.jsx)

!! Don't forget to add .gitignore (files in the folder = node_modules/  ,  package-lock.json , sql.env , __pycache__ )

(Add Procfile and Requirements.txt)

Design your app using HTML and CSS file.

Upload the Work to github
1) git init
2) git Status
3) git Add
4) git commit -m ""
5) git pull
6) git push

Last Push the App to Heroku for everyone's access
- heroku create
- git push heroku main

Technical Issues

1) The first technical issue that I faced was getting the Google OAuth login page. The chat app was loading the chat before the user sign-in, and not only that, but the user was able to chat without logging in. I asked one of my graduate friends for help, and we were successfully able to solve the issue by adding React Dom (render) and updating a few lines of code in three different files.

2)	The second technical issue that I faced was getting the URL in a chat. If the user enters a URL it was not showing up on the chat display, but it was received by the server in AWS. I was successfully able to solve the issue by passing the function in the content file. Another small issue was the link was not clickable, and I solved that by looking it up on stack overflow.

3)	The last issue is regarding the number of user counts. The app was not counting the user even after someone successfully logs-in the chat app. I was able to fix this by updating the user counts code in the python file.


Ways to Improve

1)	If I had more time, I would use it on the part regarding the “Images are rendered inline”. I would have reached out to TA for help because I am not able to get that part done at all.

2)	If I had more time, I would use it on overall styling and make the app look more realistic to actual chatting apps.









