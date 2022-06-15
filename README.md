# ApiRestNoYesSql
E uma api que serve de base para um sistema de musica, onde se usa 2 tipos de bases de dados uma sql e uma nosql.

## Storage api in Postman:
https://documenter.getpostman.com/view/21410139/Uz5Nhsdv 

## Tracks api in Postman:
https://documenter.getpostman.com/view/21410139/Uz5Nhsdv


## Login api in Postman:
https://documenter.getpostman.com/view/21410139/Uz5Nhsdv

![image](https://user-images.githubusercontent.com/40031403/173818937-2ab23985-d302-485f-af6a-40dbd31c7dae.png)
api rest, created to receive music and serves in a way that can be used for both Mysql and mongoDb.

For your use it was created in nodejs, to start use:

install the dependencies

npm install

You must manually create the database according to the models in :

https://www.mongodb.com/atlas/database

or

mysql

to change database create .env using exampleEnv

at the post office
ENGINE_DB=mysql or nosql

the whole process is done with Tokens so you must use the tokens in postman.
