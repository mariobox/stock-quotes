$(document).ready(function() {

$("#stockprice").hide();

$('input[type="submit"]').click(function (event) {
    event.preventDefault();

// Put stock symbol in a variable:
symbol = $('input[name="symbol"]').val();

var today = new Date();

console.log(today);

if(today.getDay() == 0) {
  today -= (2 * 86400000); // By turning the date to numerical format and subtract days, we avoid problem of potential different months
  console.log(today);
  today = new Date(today);  
}

else {  if(today.getDay() == 6) {
  today -= 86400000;
  console.log(today);
  today = new Date(today);
  }
  
  else { if(today.getDay() == 1) {
  today -= (3 * 86400000);
  console.log(today);
  today = new Date(today)
}

}; // close second else

}; // close first else

console.log(today);

var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd
}

if (mm < 10) {
  mm = '0' + mm
}

dd = dd.toString();
mm = mm.toString();
yyyy = yyyy.toString();

var datepick = yyyy + mm + dd;

console.log(datepick);

// the AJAX part 

    // The URL of the resource we will use to get our info, in this case the stock price of a company:

      var quandlAPI = "https://www.quandl.com/api/v3/datatables/WIKI/PRICES.json?api_key=k2d89waWvBcN32ubxex8";  
      
    // The data we want to pass as a GET parameter to the URL. Must be in Object notation form:
   
      var info = {
        "ticker":symbol,
        "date": datepick        
      };  
      
    // The callback function: what do we want to do with the data received from the server:
    
      function displayStock(data) {    
      
      $('#stocksymbol').text(symbol);
      
      if(parseFloat(data.datatable.data[0][2]) > parseFloat(data.datatable.data[0][5])) {
          $('#stockprice').css("background-color", "red");
      }
      
      else {
          $('#stockprice').css("background-color", "green");
      }
      
      $("#stockprice").text(data.datatable.data[0][5]); // access date and get info in index 5, which is the last closing stock price
      $("#stockprice").show();
      $('form')[0].reset();
      }

    // The AJAX call:

       $.getJSON(quandlAPI, info, displayStock);    // the first argument is the URL of the resource where we'll get ourinfo, the second one is the data we want to send along with the URL (in this case the stock symbol and date) and the third one is a callback function

}); // end click event

}); // end ready
	


