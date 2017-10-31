# stock-quotes
Get the latest closing of any company stock in the NYSE.

The program made using jQuery. Input a stock symbol in the form and the app will make an AJAX call to the [Quandl](https://www.quandl.com/) API and display the stock price at the latest closing. If the stock closing price is equal or higher than the opening price, the price will be displayed in a green background. If not, the background will be red.

Since AJAX calls to Quandl are subject to the same origin policy it may be necessary to download the [Allow-Control-Allow-Origin Chrome plug-in](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) in order to make this app work in your browser.

Follow this link to go to a [Live Demo](http://mariobox.github.io/stock-quotes/).
 
