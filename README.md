# StockX

## API Intro
#### http://localhost:8081/api/truetosize/insert
1. Type: POST
2. Input Parameters & types as below: 
* **brand**: String, e.g. Nike
* **style**: String, e.g. Jordan
* **fullName**: String, e.g. Jordan 1 Retro High
* **size** : String or Number, e.g. 2
3. Responses:
* **200**: Success.
* **400**: Bad Request. Please find whether fullName, OR brand and style are given in input. Make sure Size is given as well.
* **500**  Internal Error. This is when backend service lost connection to db or other internal errors. 
4. **Special Notes: Either fullName alone or brand and style together should be given.** If only brand is given, the request will be treated as bad request.

#### http://localhost:8081/api/truetosize/get
1. Type: POST
2. Input Parameters & types as below: 
* **brand**: String, e.g. Nike
* **style**: String, e.g. Jordan
* **fullName**: String, e.g. Jordan 1 Retro High
3. Responses:
* **200**: JSON string of {"avgTrueToSize":VALUE}. VALUE is a number. If VALUE is -1 meaning there is currenly no data for the specific shoes.
* **400**: Bad Request. Please find whether fullName, OR brand and style are given in input.
* **500**  Internal Error. This is when backend service lost connection to db or other internal errors.
4. **Special Notes: Either fullName alone or brand and style together should be given.** If only brand is given, the request will be treated as bad request.

## How to Run it locally
1. Please make sure your machine has **node** installed, **npm** installed and **mongodb** installed. 
2. Start your mongodb server by cmd **"mongod"**.
3. Install PM2 globally (**sudo npm install -g pm2**). [More infos PM2](http://pm2.keymetrics.io/).
4. After git clone, go to the folder //devmachine/StockX and run **"npm install"** to install all the necessary packages.
5. Run **"pm2 start server.js"** inside folder //devmachine/StockX

## How to issue the query?
You can use [Postman](https://www.getpostman.com/) or [Fiddler](https://www.telerik.com/fiddler). 

## How to serve the web service from my own dev box?
Use [ngrok](https://ngrok.com/) to expose the 8081 port

## Where to find logs?
1. Use pm2 logs to find real time logs
2. cd //HOME/.pm2/logs

## Where to check DB?
1. In terminal, type **mongo**
2. type **use stockx**
3. sample query **db.SneakerSize.find()**


