1 - First thing to do is run "npm install" to install packages
2 - Second thing to do is run "sequelize db:migrate" to migrate table
3 - Third thing to do is run "sequelize db:seed --seed 20220112181143-user-seeder" to generate data in the table
4 - Run the "npm test" to check if the api endpoint is working
5 - To run the application you can use "npm start" or if you want to run in developement mode you can use "npm run dev"

Note: Do not run "npm test" if you did not run seeder because you will recieve error
      You can also import this file "User API Collection.postman_collection.json" in your postman


