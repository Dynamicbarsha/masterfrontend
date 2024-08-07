function generateQuote()
{
    fetch ('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {console.log("this is the data we are getting from the server",data);

    const quote = ${data.content} - ${data.author};
    document.getElementById('quote').innerText =quote;

})

.catch(error =>{
    document.getElementById('quote').innerText = 'An error occured while fetching the quote. Please try again.';

});

}
//Generate an initial quote when the page loads
generateQuote();