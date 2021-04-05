# WWUB (What Would U Buy/Watch What U Buy)

## Installation Instructions
  1. Copy URL from Github
  2. Open git terminal in your directory of choice
  3. run git clone https://github.com/PaulSender/wwub.git
  4. Open a termnial/command prompt and navigate to the cloned repository (i.e: C:/users/senderp/desktop/wwub)
  5. run the following command: ```cd client && npm install``` 
  6. After all dependencies have been installed, run the following command: ```cd ../server && npm install```
  7. After all dependencies have been isntalled run ```npm start``` in wwub/server then open a new terminal and navigate to wwub/client and run ```npm start```
  8. Both servers are now running. The front-end should open in your default browser

## Local set up MongoDB
  1. [Follow this article](https://medium.com/@LondonAppBrewery/how-to-download-install-mongodb-on-windows-4ee4b3493514)
  2. When you can run the "mongo" command in cmd set up a database called "wwub"
    - Enter mongo termnial: ```mongo```
    - Create new database: ```use wwub```
    - Check currently selected database: ```db```
  3. Create a collection to hold users
    - ```db.createCollection("users")```
  4. Crete a collection to hold items
    - ```db.createCollection("items")```
  5. Backend code should attempt to connect to the "wwub database on localhost" so we should need to change anything in the code.

## TODO
  - Handle tasks/todo items in Github : https://github.com/PaulSender/wwub/projects/1
## Notes
  - to protect a route, need to add auth function to the route in the back end. See routes/api/items edit route.
  - Deployment: 
    - Run npm run build for front-end changes
    - commit and push all
    - VM bash script takes care of the rest (sh deploy.sh)
