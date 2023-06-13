var gmail;

/*function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
    console.log("loading...");
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}*/

function refresh(f) {
  var interval = setInterval(function() {
    //if (!(/in/.test(document.readyState)) && typeof Gmail !== 'undefined') {
    if (document.querySelector('.nH') && typeof Gmail !== 'undefined') {      
      console.log("Close Interval");
      clearInterval(interval);
      f();
    }
  }, 100);
}


var main = function(){  
  console.log("create gmail js");
  gmail = new Gmail();
  console.log('Hello,', gmail.get.user_email())
}

console.log("refresh main");
refresh(main);
