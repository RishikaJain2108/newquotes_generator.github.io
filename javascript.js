AOS.init();
var quotes= document.getElementById("quotes");
var author= document.getElementById("author");
var newQ= document.getElementById("newQ");
var tweetme=document.getElementById("tweetme");
  let realData="";
  let quotesData="";

  const tweetNow =() =>
  {
    let tweetPost =`https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(tweetPost);


  };


    const getNewQuotes = () => {
      let rnum = Math.floor(Math.random()*1000);
    quotesData=realData[rnum];
      quotes.innerText=`${quotesData.text}`;
      if(quotesData.author== null)
      {
        author.innerText= "Unknown"  ;
      }
      else
      author.innerText=`${quotesData.author}`;
    };






var getQuotes = async () => {
  var api="https://type.fit/api/quotes";
  try{
    let data= await fetch(api);
    realData= await data.json();
    getNewQuotes();
    // console.log(realData[10].text );
    // console.log(realData[10].author);
  }
  catch(error){}

};
tweetme.addEventListener("click",tweetNow);
newQ.addEventListener("click",getNewQuotes);
getQuotes();
