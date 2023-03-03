# test-user

Run ``npm CI`` to intall all the dependencys 
create a .env file and add 
``DATABASE_URL="mysql://root:12345@localhost:3306/users?schema=public"``
in it  
run
``npx prisma migrate up``
to migrate the tables
run npm start to get the project up and runing
