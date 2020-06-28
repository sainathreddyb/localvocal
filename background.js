var obj;
chrome.runtime.onInstalled.addListener(function() {
	const url = chrome.runtime.getURL('data/data.json');

	fetch(url)
	  .then(
	    function(response) {
	      if (response.status !== 200) {
	        console.log('Looks like there was a problem. Status Code: ' +
	          response.status);
	        return;
	      }
	      response.json().then(function(data) {
	    		var strBuilder = [];
				for(key in data) {
				  if (data.hasOwnProperty(key)) {
				    strBuilder.push("Key is " + key + ", value is " + data[key] + "\n");
				    localStorage.setItem(key, data[key]);
      
				  }
				}
				alert(strBuilder.join(""));

				obj=data;
	      });
	    }
	  )
	  .catch(function(err) {
	    console.log('Fetch Error :-S', err);
	  });

});
