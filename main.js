var config={kcAllowedFuncNames: ["zendeskchat"]};
function zendeskchat(){
// api call for the chat bot
var head = document.getElementsByTagName( 'head' ) [0];
var script = document.createElement('script');
script.id = "ze-snippet";
script.src="https://static.zdassets.com/ekr/snippet.js?key=325c6c7f-2396-4b87-b88d-f6a78c0a7134" ;
script.onreadystatechange= handler1;
script.onload = handler1;
head.appendChild(script);

function handler1(){
  console. log ("chatbot added");
}
}


function triggerAnimation(){
const box = document.getElementById('box');
  if (box) {
    // Remove the class if it exists to re-trigger
    box.classList.remove('animate');
    
    // Force reflow to restart animation
    void box.offsetWidth;

    // Add the class to trigger animation
    box.classList.add('animate');
  }
}

(function (n, t, a, e, co) {
  var i = "aptrinsic"; n[i] = n[i] || function () {
    (n[i].q = n[i].q || []).push(arguments)
  }, n[i].p = e; n[i].c = co;
  var r = t.createElement("script"); r.async = !0, r.src = a + "?a=" + e;
  var c = t.getElementsByTagName("script")[0]; c.parentNode.insertBefore(r, c)
})(window, document, "https://web-sdk.aptrinsic.com/api/aptrinsic.js", "AP-Z57KBTR9DEZC-2", config,{"enableIdentifyFromIFrame":true});

window['_fs_host'] = 'fullstory.com';
window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
window['_fs_org'] = 'o-237SPK-na1';
window['_fs_namespace'] = 'FS';
!function(m,n,e,t,l,o,g,y){var s,f,a=function(h){
return!(h in m)||(m.console&&m.console.log&&m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'),!1)}(e)
;function p(b){var h,d=[];function j(){h&&(d.forEach((function(b){var d;try{d=b[h[0]]&&b[h[0]](h[1])}catch(h){return void(b[3]&&b[3](h))}
d&&d.then?d.then(b[2],b[3]):b[2]&&b[2](d)})),d.length=0)}function r(b){return function(d){h||(h=[b,d],j())}}return b(r(0),r(1)),{
then:function(b,h){return p((function(r,i){d.push([b,h,r,i]),j()}))}}}a&&(g=m[e]=function(){var b=function(b,d,j,r){function i(i,c){
h(b,d,j,i,c,r)}r=r||2;var c,u=/Async$/;return u.test(b)?(b=b.replace(u,""),"function"==typeof Promise?new Promise(i):p(i)):h(b,d,j,c,c,r)}
;function h(h,d,j,r,i,c){return b._api?b._api(h,d,j,r,i,c):(b.q&&b.q.push([h,d,j,r,i,c]),null)}return b.q=[],b}(),y=function(b){function h(h){
"function"==typeof h[4]&&h[4](new Error(b))}var d=g.q;if(d){for(var j=0;j<d.length;j++)h(d[j]);d.length=0,d.push=h}},function(){
(o=n.createElement(t)).async=!0,o.crossOrigin="anonymous",o.src="https://"+l,o.onerror=function(){y("Error loading "+l)}
;var b=n.getElementsByTagName(t)[0];b&&b.parentNode?b.parentNode.insertBefore(o,b):n.head.appendChild(o)}(),function(){function b(){}
function h(b,h,d){g(b,h,d,1)}function d(b,d,j){h("setProperties",{type:b,properties:d},j)}function j(b,h){d("user",b,h)}function r(b,h,d){j({
uid:b},d),h&&j(h,d)}g.identify=r,g.setUserVars=j,g.identifyAccount=b,g.clearUserCookie=b,g.setVars=d,g.event=function(b,d,j){h("trackEvent",{
name:b,properties:d},j)},g.anonymize=function(){r(!1)},g.shutdown=function(){h("shutdown")},g.restart=function(){h("restart")},
g.log=function(b,d){h("log",{level:b,msg:d})},g.consent=function(b){h("setIdentity",{consent:!arguments.length||b})}}(),s="fetch",
f="XMLHttpRequest",g._w={},g._w[f]=m[f],g._w[s]=m[s],m[s]&&(m[s]=function(){return g._w[s].apply(this,arguments)}),g._v="2.0.0")
}(window,document,window._fs_namespace,"script",window._fs_script);


function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}


var selectedValue = null;
function selectOption(value) {
    if (selectedValue !== value) {
      selectedValue = value;
    document.getElementsByClassName("dropdown-toggle")[0].innerText = selectedValue;
    toggleDropdown();
    aptrinsic('track', 'ports', {
      portName: value,
     });
  }
 }




function PXPageTimer(maxSecondsTracked, trackPagesOverMax) {
  this.pageName = null;
  this.startTime = null;
  this.maxSecondsTracked = maxSecondsTracked || 3600 * 24;
  this.trackPagesOverMax = trackPagesOverMax !== false;
  this.startTimer = function (pageName) {
    try {
      if (this.pageName && this.pageName !== pageName) {
        this.endTimer();
      }
      this.pageName = pageName;
      this.startTime = Date.now();
    } catch (e) {
      console.log("Unable to start timer on ", this.pageName);
    }
  };
  this.endTimer = function (pageUnloaded) {
    try {
      if (this.pageName) {
        let endTime = Date.now();
        let secondsOnPage = (endTime - this.startTime) / 1000;
        if (secondsOnPage <= this.maxSecondsTracked || this.trackPagesOverMax) {
          window.aptrinsic('track', 'timeOnPage', {
            'pageName': this.pageName,
            'seconds': Math.min(secondsOnPage,this.maxSecondsTracked),
            'pageUnloaded': pageUnloaded
          });
        }
        this.pageName = undefined;
      }
    } catch (e) {
      console.log("Unable to log time on page", this.pageName);
    }
  };
}

(function InitializeTimer() {
  let maxSecondsTracked = 60 * 60; // Track time on page for up to one hour
  let trackPagesOverMax = false;  // Ignore any pages over one hour
  let featureTimer = new PXPageTimer(maxSecondsTracked, trackPagesOverMax);
  
  // Initial page
  featureTimer.startTimer(window.location.href);

  window.addEventListener('hashchange', () => {
    featureTimer.startTimer(window.location.href);
  });
  window.addEventListener('popstate', () => {
    featureTimer.startTimer(window.location.href);
  });
  window.addEventListener('beforeunload', () => {
    featureTimer.endTimer(true);
  });
  let realPushState = window.history.pushState;
  window.history.pushState = function (state, title, newLocation) {
    featureTimer.startTimer(newLocation.href);
    return realPushState.apply(window.history, arguments); // Call the original
  };
})();

/*
if(location = "https://dimplesaigurivelli.github.io/pxdemo/visitor.html"){

  aptrinsic("identify",
            {
              id: "visitor"
            },
          )
} */


function aboutGC() {
  aptrinsic('set', 'globalContext', {'URL' : 'about'});

}
function contactGC() {
  aptrinsic('set', 'globalContext', {'URL' : 'contact'});

}
function bmiGC() {
  aptrinsic('set', 'globalContext', {'URL' : 'bmi'});

}


function login() {
  var a = document.getElementById('UserEmail').value;
  

  const accounts = ["1001", "1002", "1003", "1004", "1005","1006"];
  const mailId = ["dimple@gmail.com", "monica@gmail.com", "chandler@gmail.com", "ross@gmail.com", "phoebe@gmail.com","dimple23@gmail.com","dimplesaig@gmail.com"];

  for (var i = 0; i < accounts.length; i++) {
    if (a == mailId[i]) {
        var userid = mailId[i].substring(4, 9);
        if (a == "dimple@gmail.com") {
          
          aptrinsic("identify",
            {
              id: userid,
              email: a,
              "firstName": "dimple"
            },
            
            {
              id:"1009",
              name:"AmazonNew",
             

            });

            aptrinsic('set', 'globalContext', {"package": "elite"});

        }

       
        else if (a == "monica@gmail.com") {
         
          aptrinsic("identify",
            {
              id: userid,
              email: a,
              "firstName": "monica"
            },
            
            {
              id:"1002",
              name:"Cadbury",
          
            });
            aptrinsic('set', 'globalContext', {"package": "elite"});

        }
        else if (a == "chandler@gmail.com") {
         
          aptrinsic("identify",
            {
              id: userid,
              email: a,
              "firstName":"chandler"
            },
            
            {
              id:"1003",
              name:"Microsoft",
             
            });
            aptrinsic('set', 'globalContext', {"package": "premier"});

        }
        else if (a == "ross@gmail.com") {
          
          aptrinsic("identify",
            {
              id: userid,
              email: a,
              "firstName":"ross"
            },
            
            {
              id:"1004",
              name:"Myntra",
            
            });
            aptrinsic('set', 'globalContext', {"package": "standard"});

        }
        else if (a == "phoebe@gmail.com") {
         
          aptrinsic("identify",
            {
              id: userid,
              email: a,
              "firstName":"phoebe"
            },

            {
              id:"1005",
              name:"Tata",
             
            }
            );
            aptrinsic('set', 'globalContext', {"package": "standard"});

        }
 else if (a == "dimple23@gmail.com") {
          
          aptrinsic("identify",
            {
              id: userid,
              email: a,
              "firstName":"dimple"
            },

            {
              id:"1123",
              name:"Sony",
             
            }
            );
            aptrinsic('set', 'globalContext', {"package": "standard"});

        }

        else if (a == "dimplesaig@gmail.com") {
          
          aptrinsic("identify",
            {
              id: userid,
              email: a,
              "firstName":"dimplesai"
            },

            {
              id:"1006",
              name:"Apple",
             
            }
            );
            aptrinsic('set', 'globalContext', {"package": "standard"});

        }
        alert("Your Unique Id is : " + " " + userid);
        location = "index.html"
      }

    
    }
  }
  




function message() {
  var email = document.getElementById('email');
  if (email.value === '') {
  }
  else {
    alert("Details saved succesfully!");
    aptrinsic('track', 'userDetails', {"version" :111,"Submitted" : true}); 

  }
}


function calculate() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;
  var bmi;

  var bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi >= 17 & bmi < 18.5) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as THIN, Eat well sweet!');
  }
  else if (bmi >= 18.5 & bmi < 25) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as NORMAL, You are perfect sweet!');
  }
  else if (bmi >= 25 & bmi <= 30) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as OVERWEIGHT, Go gym sweet!');
  }
  else if (bmi > 30) {
    alert(bmi + ' ' + 'is your BMI' + ' ' + '. Classified as OBESE, Go gym sweet!');
  }
}

function logout(){
  aptrinsic('reset');
}




