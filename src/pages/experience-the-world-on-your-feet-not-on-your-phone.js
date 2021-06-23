import React, {useEffect} from "react"
import BaseLayout from '../components/layouts/base';
import { createGlobalStyle } from 'styled-components';
import Meta from '../components/Meta';

// CONTENT PORTED FROM PREVIOUS RECONNECT PROJECT
// https://github.com/wsoeltz/reconnect/tree/master/wp-content/themes/reconnect/why-reconnect-assets

const ReconnectStyle = createGlobalStyle`
/***********************
      Base Styles
***********************/


body {
  background-image: url("/images/background1.jpeg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center 0px;
}


/***********************
      Alignment
**********************/
  #post-2 .entry-content, #post-12 .entry-content {
    max-width: 100%;
    padding: 0;
  }
  #post-2 .entry-content a, #post-12 .entry-content a {
    color: inherit;
    text-decoration: none;
  }
  #post-2 .entry-content a:hover, #post-12 .entry-content a:hover {
    color: inherit;
    text-decoration: inherit;
  }
  #post-2 .entry-content p, #post-12 .entry-content p {
    font-size: 24px;
  }

  /*************
      Header
  *************/
  #post-2 header.entry-header, #post-12 header.entry-header {
    display: none;
  }

  /* position header to stretch across screen and be static */
  div#header{
    width:100%;
    height:45px;
    padding-top: 11px;
    background-color: #1b1816; /* warm black */
    position: fixed;
    top: 0px;
    z-index: 100000;
  }

  div#headerWrapper{
    width: 1040px;
    margin: 0 auto;
    color: #d7e2e8; /* blue white */
  }

  div#logoHome{
    float: left;
  }

  div#header ul{
    list-style-type: none;
    margin: 0;
    padding: 0;

  }

  div#header li{
    float: right;
    margin: 10px;
    font-size: 14pt;
    font-weight: 300;
  }

  div#header a{
    color: #d7e2e8; /* blue white */
    text-decoration: none;
  }

  div#header a:hover{
    text-decoration: underline;
  }


  /*************
      Section 1
  *************/

  div#topLogo{
    text-align: center;
    color: #d7e2e8; /* blue white */
    font-weight: 300;
    height: 700px;
    cursor: pointer;
  }
  div#topLogo p {
    color: #d7e2e8; /* blue white */
  }
    div#logoCircle{
      border-radius: 50%;
        behavior: url(PIE.htc);
        width: 408px;
        height: 408px;
        background: #191919; /* slightly red black */
        opacity:0.8;
      filter:alpha(opacity=80); /* For IE8 and earlier */
        margin: 0 auto;
        margin-top: 160px;
        margin-bottom: 70px;
        position: relative;

    }

    div#logoCircle h1 {
      background-image: url('/images/logoMain.png');
      background-size: 100%;
      width: 349px;
      height: 172px;
      margin: auto;
      position: absolute;
      left: 8px;
      right: 0;
      top: 0;
      bottom: 0;
      font-size: 0;
      color: rgba(0,0,0,0);
      text-indent: -10000px;
      overflow: hidden;
    }

      div#logoCircle img{
        margin-top: 80px;

      }


  /*************
      Section 2
  *************/
div#pageExpander{
    width: 100%;
    height: 10760px;
  }

div#question{
  width: 100%;
  padding: 15px;
  text-align: center;
  background-color: #366454;
  font-size: 20pt;
  font-weight: 300;
  opacity:0.9;
  filter:alpha(opacity=90); /* For IE8 and earlier */
  position: absolute;
  top: 790px;
  display: none;

}
div#question p {
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  color: #f8f5f3;
}


div#statistics{
  /*position: relative;*/
  max-width: 1280px;
  margin: 0 auto;
}



  div#clock{
    width: 284px;
    height: 284px;
    border-radius: 50%;
      behavior: url(PIE.htc);
      background-color: #304843; /*dark green */
      position: absolute;
      /*left: 50px;*/
      display: none;
      z-index: 200;
      margin-left: 50px;
      margin-top: 20px;

  }
    div#clockScreen{
      width: 185px;
      height: 185px;
      border-radius: 50%;
        behavior: url(PIE.htc);
        background-color: #63928a; /* teal */
        position: absolute;
        left: 49px;
        top: 49px;
    }

    div#clockWhite{
      width: 285px;
      height: 285px;
      border-radius: 50%;
        behavior: url(PIE.htc);
        background-color: #e5e0de; /* warm white */
        position: absolute;
        left: 0px;
        top: 0px;
    }
    div#clockText{
      width: 68px;
      height: 68px;
      margin: 0 auto;
      font-weight: 800;
      color: #304843; /*dark green */
      text-align:center;
      position: relative;
      padding-top: 88px;
      font-size:45pt;

    }

    .clockSub{
      display: block;
      font-size: 20pt;
    }

  div#basedAverage_holder{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 50px;
    left: 0px;
    display: none;
    z-index: 100;
    padding-left: 200px;
  }

    div#basedAverage{
      max-width: 714px;
      margin: 0 auto;
      background-color: #e5e0de; /* warm white */
      text-align: right;
      font-size: 24pt;
      font-weight: 300;
      color: #304843; /* dark teal */
      padding: 13px 10px;
    }

    div#basedAverage:hover{
      background-color: #304843; /* dark teal */
      color: #e5e0de;
      cursor: pointer;
    }

  div#subtract_holder{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 108px;
    left: 0px;
    display: none;
    padding-left: 200px;
      margin-top: -1px;
  }

    div#subtract{
      max-width: 714px;
      margin: 0 auto;
      background-color: #e5e0de; /* warm white */
      text-align: right;
      font-size: 24pt;
      font-weight: 300;
      color: #304843; /* dark teal */
      padding: 13px 10px;
    }

  div#necessities{
    width: 100%;
    text-align: right;
    position: absolute;
    top: 164px;
    right: -25px;
    display: none;
    padding-left: 200px;
  }

    div#necessities ul{
      display: block;
      width: 724px;
      margin: 0 auto;
      text-align: right;
      padding-left: 0;
        margin-top: -1px;
    }

    div#necessities li{
      display: inline-block;
      margin-left: 434px;
      margin-bottom: 0;
      width: 260px;
      padding: 10px 10px;
      font-size: 14pt;
      font-weight: 300;
      color: #304843; /* dark teal */
      text-align: right;
      background-color: #e5e0de; /* warm white */
      display: none;
    }
    div#necessities li a{
      font-weight: 400;
    }

    div#necessities li:hover{
      color: #e5e0de; /* warm white */
      background-color: #304843; /* dark teal */
      cursor: pointer;
    }
    div#necessities li:hover a {
      color: #e5e0de; /* warm white */
    }

  div#only33{
    width: 100%;
    text-align: left;
    color: #304843; /* dark teal */
    font-size: 22pt;
    font-weight: 400;
    opacity:0.9;
    filter:alpha(opacity=90); /* For IE8 and earlier */
    position: absolute;
      top: 590px;
    display: none;
    padding-left: 400px;
  }

  div#sixtyPercent{
    width: 100%;
    text-align: left;
    color: #304843; /* dark teal */
    font-size: 22pt;
    font-weight: 700;
    opacity:0.9;
    filter:alpha(opacity=90); /* For IE8 and earlier */
    position: absolute;
      top: 630px;
    display: none;
    padding-left: 400px;
  }

  div#sixtyPercent:hover{
    text-decoration: underline;
    cursor: pointer;
  }

  /*************
      Section 3
  *************/

  div#timeRemains{
    width: 100%;
    padding: 20px;
    text-align: center;
    color: #f8f5f3;
    font-size: 20pt;
    font-weight: 300;
    background-color: #366454;
    opacity:0.9;
    filter:alpha(opacity=90); /* For IE8 and earlier */
    position: absolute;
      top: 1690px;
      display: none;

  }


  /*************
      Footer
  *************/

  div#footer{
    width:100%;
    background-color: #1b1816;  /* warm black */
    opacity:0.87;
    filter:alpha(opacity=87); /* For IE8 and earlier */
    /*height: 608px;*/
    height: 400px;
    color: #d7e2e8; /* blue white */
    position: relative;
    top: 46px;
    display: flex;
    align-items: center;
  }

  div#footerWrapper{
    width: 100%;
    margin: 0 auto;
  }

  div#feetNotPhone{
    width: 100%;
    text-align: center;
    font-weight: 800;
    font-size: 42px;
    padding-top: 125px;
    /*margin-bottom: 230px;*/
    opacity:1;
    line-height: 1.7em;
    padding: 40px;
    filter:alpha(opacity=100); /* For IE8 and earlier */

  }

  div#footer ul{
    list-style-type: none;
    margin: 0;
    padding: 0;

  }

  div#footer li{
    display: inline-block;
    margin-right: -4px;
    width: 640px;
    text-align: center;
    font-size: 19pt;
    font-weight: 300;
  }

  div#footer a{
    color: #d7e2e8; /* blue white */
    text-decoration: none;
  }

  div#footer a:hover{
    text-decoration: underline;
  }


  a.credits{
    text-align: center;
    display: block;
    width: 100%;
    height: 3em;
    padding-top: 2em;
    background-color: #1b1816;  /* warm black */
    color: #666;
    text-decoration: none;
  }

  a.credits:hover{
    text-decoration: underline;
  }

  div#bottomNav {
    display: none;
  }

/***********************
      Formatting
***********************/
.semibold{
  font-weight: 600;
}

.bold{
  font-weight: 700;
}

.sub{
  font-size: 9px;
    vertical-align: top;
    color: #95908d; /* darker gray */
}

.darkteal{
    color: #304843; /* dark teal */
}

div#basedAverage:hover a {
  color: #e5e0de; /* warm white */
}
/* left adjustments */

div#question, div#timeRemains{
    padding-left: 224px;
    left: 0;
}


@media (min-width: 990px) and (max-width: 1350px)  {
  div#clock {
    top: 425px !important;
    left: 224px;
    right: 0;
    margin: auto;
  }
  div#only33, div#sixtyPercent {
    width: 100%;
    padding-left: 224px;
    left: 0;
    text-align: center;
  }
}

@media (max-width: 990px) {
  div#question, div#timeRemains {
    padding-left: 0;
  }
}


@media (max-width: 933px) {
  div#clock {
    top: 425px !important;
    left: 0;
    right: 0;
    margin: auto;
  }
  div#only33, div#sixtyPercent {
    padding: 0 20px;
    text-align: center;
  }
  div#necessities {
    right: 0;
  }
  div#necessities ul {
    width: auto;
    position: absolute;
    right: 0;
  }
  div#necessities ul li {
    margin-left: 0;

  }
  div#basedAverage_holder {
    padding-left: 0;
    width: 100%;
  }
  div#subtract_holder {
    padding-left: 0;
    width: 100%;
  }
  div#basedAverage {
    max-width: 100%;
  }
  div#subtract {
    max-width: 100%;
  }
}

@media (max-width: 750px) {
  div#logoCircle {
    margin-top: 20px;
  }
  #post-2 .entry-content p, #post-12 .entry-content p, div#basedAverage, div#subtract, div#necessities ul li, div#only33, div#sixtyPercent {
    font-size: 14px;
    text-align: center;
    line-height: 1.2em;
  }
  div#timeRemains {
    font-size: 16px;
    line-height: 1.2em;
  }
  div#necessities ul {
    left: 0;
    margin: auto;
  }
  div#necessities ul li {
    left: 0;
    right: 0;
    margin: auto;
  }
  div#clockWrapper {
    display: none;
  }
  div#footer {
    width: 100%;
  }
  div#feetNotPhone {
    font-size: 30px;
  }
}


@media (max-width: 445px) {
  div#logoCircle {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }
  div#logoCircle h1 {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: 40% center;
  }
}
`;

export default function WhyReconnect() {
  useEffect(() => {
    var position = document.documentElement.scrollTop; //value used to determine current screen position, should start at 0
    var clockSize;
    var clockCenter;
    var clockTime;

    function onWindowScroll() {
      var scroll = document.documentElement.scrollTop;
      position = scroll; //changes position to current position on screen

      var windowwidth = window.innerWidth;

      //updates the css to allow for slow scrolling
      document.querySelector('body').style.backgroundPosition = "center "+(-position/5.25)+"px";
      const questionNode = document.querySelector("#question");
      const clockNode = document.querySelector("#clock");
      const basedAverageHolderNode = document.querySelector("#basedAverage_holder");
      const subtractHolderNode = document.querySelector("#subtract_holder");
      const clockWhiteNode = document.querySelector("#clockWhite");
      const clockTextNode = document.querySelector("#clockText");

      //"How much time is spent on screen?"
      elementPositioning(questionNode, 200, 800, 5500, 0.9, 100, 900);
      if (windowwidth > 990) {
        if (questionNode.style.position === 'fixed') {
          questionNode.style.paddingLeft = '200';
          questionNode.style.left = '0';
        } else {
          questionNode.style.paddingLeft = '0';
          questionNode.style.left = '-12';
        }
      }

      //Clock
      elementPositioning(clockNode, 900, 1140, 8000, 1, 250, 1400);

      //Take the average life span of 79 years
      if (position < 1700) {
        elementPositioning(basedAverageHolderNode, 1200, 1200, 5500, 1, 350, 1500);
        if (windowwidth > 990) {
          if (basedAverageHolderNode.style.position === 'fixed') {
            basedAverageHolderNode.style.paddingLeft =  200;
            basedAverageHolderNode.style.left = 0;
          } else {
            basedAverageHolderNode.style.left = -12;
          }
        }
      } else {
        elementPositioning(basedAverageHolderNode, 1200, 1880, 5500, 1, 168, 2050);
        if (windowwidth > 990) {
          if (basedAverageHolderNode.style.position === 'fixed') {
            basedAverageHolderNode.style.paddingLeft = 200;
            basedAverageHolderNode.style.left = 0;
          } else {
            basedAverageHolderNode.style.left = -12;
          }
        }
      }

      //and subtract
      if (position < 2200) {
        elementPositioning(subtractHolderNode, 1650, 1650, 5500, 1, 350, 1500);
        if (windowwidth > 990) {
          if (subtractHolderNode.style.position === 'fixed') {
            subtractHolderNode.style.paddingLeft = 200;
            subtractHolderNode.style.left = 0;
          } else {
            subtractHolderNode.style.left = -12;
          }
        }
      }
      else {
        elementPositioning(subtractHolderNode, 1650, 2325, 5500, 1, 226, 2550);
        if (windowwidth > 990) {
          if (subtractHolderNode.style.position === 'fixed') {
            subtractHolderNode.style.paddingLeft = 200;
            subtractHolderNode.style.left = 0;
          } else {
            subtractHolderNode.style.left = -12;
          }
        }
      }

      //show necessities list
      elementPositioning(document.querySelector("#necessities"), 2150, 2450, 5500, 1, 284, 4550);
      showListItem(document.querySelector("li#sleeping"), 2700)
      showListItem(document.querySelector("li#eating"), 2950)
      showListItem(document.querySelector("li#cleaning"), 3300)
      showListItem(document.querySelector("li#school"), 3550)
      showListItem(document.querySelector("li#driving"), 3700)
      showListItem(document.querySelector("li#working"), 3950)

      //You are left with only 33 years
      elementPositioning(document.querySelector("#only33"), 5800, 5800, 8000, 1, 275, 6200);

      //60% will be spent in front of a screen
      elementPositioning(document.querySelector("#sixtyPercent"), 6500, 6500, 8000, 1, 325, 6200);

      //You are left with only 9 years to live
      elementPositioning(document.querySelector("#timeRemains"), 8500, 8500, 11000, 0.8, 325, 6200);

      //adjusts clock colors & text inside
      if (position > 2800 && position < 4500){
        clockSize = (((4500-position)/1700)*100)+185;
        clockCenter = 142-(clockSize/2);
        clockTime = Math.round(79*clockSize/285*.65);
        clockWhiteNode.style.width = clockSize+"px";
        clockWhiteNode.style.height = clockSize+"px";
        clockWhiteNode.style.top =clockCenter+"px";
        clockWhiteNode.style.left = clockCenter+"px";
        clockTextNode.innerHTML = clockTime+"<span class='clockSub'>years</span>";
      }
      else if (position < 2800) {
        clockWhiteNode.style.width = "285px";
        clockWhiteNode.style.height = "285px";
        clockWhiteNode.style.top = "0px";
        clockWhiteNode.style.left =  "0px";
        clockTime = 79;
        clockTextNode.innerHTML = clockTime+"<span class='clockSub'>years</span>";
      }
      else if (position > 4500) {
        clockWhiteNode.style.width = "185px";
        clockWhiteNode.style.height = "185px";
        clockWhiteNode.style.top = "49px";
        clockWhiteNode.style.left =  "49px";
        clockTime = 33;
        clockTextNode.innerHTML = clockTime+"<span class='clockSub'>years</span>";
        if (position > 6550 && position < 6900) {
          clockSize = (((6900-position)/400)*100)+100;
          clockCenter = 142-(clockSize/2);
          clockTime = Math.round(79*clockSize/285*.6);
          clockWhiteNode.style.width = clockSize+"px";
          clockWhiteNode.style.height = clockSize+"px";
          clockWhiteNode.style.top =clockCenter+"px";
          clockWhiteNode.style.left = clockCenter+"px";
          clockTextNode.innerHTML = clockTime+"<span class='clockSub'>years</span>";
        }
      }
      if (position >= 6900) {
        clockWhiteNode.style.width = "100px";
        clockWhiteNode.style.height = "100px";
        clockWhiteNode.style.top = "92px";
        clockWhiteNode.style.left =  "92px";
        clockTextNode.innerHTML = "9<span class='clockSub'>years</span>";
      }
    }

    function elementPositioning(node, startposition, minposition, maxposition, maxopacity, fixedposition, absoluteposition){
      if (position > startposition && position < maxposition) {//hides and shows
        node.style.display = "block";

        //fade in element
        if (position < startposition+100) {
          node.style.opacity ="0.2";
        } else if (position < startposition+200) {
          node.style.opacity ="0.4";
        }
        else if (position < startposition+300) {
          node.style.opacity ="0.7";
        }
        //fade out element
        else if (position > maxposition-100) {
          node.style.opacity ="0.2";
        }
        else if (position > maxposition-200) {
          node.style.opacity ="0.4";
        } else if (position > maxposition-300) {
          node.style.opacity ="0.7";
        }
        //set the maxopacity of the element
        else {
          node.style.opacity = maxopacity;  
        }
      } else {
        node.style.display = "none";
      }

      //sets between what range the element is static to static at set position
      if (position > minposition && position < maxposition){
        node.style.position = "fixed";
        node.style.top = fixedposition+"px";
      }
      //sets the otherwise position of the element on the page
      else {
        node.style.position = "absolute";
        node.style.top = absoluteposition+"px";
      }
    }

    function showListItem(node, startposition){
      var endposition = 5800;
      if (position > startposition && position < endposition) {
          node.style.display = "block";
      } else {
          node.style.display = "none";
      }
      //fade in element
      if (position < startposition+100) {
        node.style.opacity = "0.2";
      } else if (position < startposition+200) {
        node.style.opacity = "0.4";
      } else if (position < startposition+300) {
        node.style.opacity = "0.7";
      }
      //fade out element
      else if (position > endposition-100) {
        node.style.opacity = "0.2";
      }
      else if (position > endposition-200) {
        node.style.opacity = "0.4";
      }
      else if (position > endposition-300) {
        node.style.opacity = "0.7";
      }
      //set the maxopacity of the element
      else {
        node.style.opacity= "1";
      }
    }

    onWindowScroll();
    window.addEventListener("scroll", onWindowScroll);
    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    }
  }, []);

  const onLogoClick = () => {
    console.log('onLogoClick')
    window.scroll({
      top: window.innerHeight * 0.75,
      behavior: 'smooth'
    });
  }

  return (
    <BaseLayout>
      <Meta
        description={'How are you really spending your time? The answer is more depressing than you might think.'}
      />
      <ReconnectStyle />
        {/*<!-- Section 1, contains logo and scroll down prompt -->*/}
        <div id="topLogo" onClick={onLogoClick} role="button" tabIndex={-1} onKeyDown={() => {}}>
          <div id="logoCircle">
            <h1 title="reconnect" alt="reconnect">Reconnect</h1>
          </div>
          scroll down
          <br/><br/>
          ↓
        </div>

        {/*<!-- Section 2, contains statisitcs -->*/}
        <div id="pageExpander"></div>
        <div id="question">
          <p>How are you <strong>really</strong> spending your <strong>time</strong>?</p>
        </div>
        <div id="statistics">
          
          <div id="clockWrapper">
            <div id="clock">
              <div id="clockScreen"></div>
              <div id="clockWhite"></div>
              <div id="clockText">79<span class="clockSub">years</span></div>
            </div>
          </div>
          <div id="basedAverage_holder">
            <div id="basedAverage">
              <a href="https://www.npr.org/sections/health-shots/2016/12/08/504667607/life-expectancy-in-u-s-drops-for-first-time-in-decades-report-finds" target="_blank" rel="noreferrer">Take the average life span of <span class="bold">79</span> years</a>
            </div>
          </div>
          <div id="subtract_holder">
            <div id="subtract">
              and subtract&nbsp;
            </div>
          </div>
          <div id="necessities">
            <ul>
              <li id="sleeping"><a href="https://www.theguardian.com/notesandqueries/query/0,5753,-50504,00.html" target="_blank" rel="noreferrer">Sleeping - 24 years</a></li>
              <li id="eating"><a href="https://www.thefreelibrary.com/How+much+time+do+Americans+spend+eating%3F-a0190462486" target="_blank" rel="noreferrer">Eating - 4 years</a></li>
              <li id="cleaning"><a href="https://www.bls.gov/TUS/CHARTS/HOUSEHOLD.HTM" target="_blank" rel="noreferrer">Cleaning - 2 years</a></li>
              <li id="school"><a href="http://www.centerforpubliceducation.org/Main-Menu/Organizing-a-school/Time-in-school-How-does-the-US-compare" target="_blank" rel="noreferrer">Grade School - 2 years</a></li>
              <li id="driving"><a href="http://blog.tempo.io/2013/7-time-consuming-things-an-average-joe-spends-in-a-lifetime/" target="_blank" rel="noreferrer">Driving - 4 years</a></li>
              <li id="working"><a href="http://blog.tempo.io/2013/7-time-consuming-things-an-average-joe-spends-in-a-lifetime/" target="_blank" rel="noreferrer">Working - 10 years</a></li>
            </ul>
          </div>
          <div id="only33">
            You are left with only <span class="bold">33</span> years,
          </div>
          <div id="sixtyPercent">
            <a href="http://bgr.com/2014/05/29/smartphone-computer-usage-study-chart/" target="_blank" rel="noreferrer">24 years will be spent in front of a screen.</a>
          </div>
        </div>
        {/*<!-- Section 3, states time remaining -->*/}
        <div id="timeRemains">
          Leaving you with only <span class='semibold'>9 years to live</span> your life.
        </div>

        {/*<!-- Footer. Will scroll up once statistics are done -->*/}
        <div id="footer">
          <div id="footerWrapper">
            <div id="feetNotPhone">
              Experience the world on your feet, not on your phone.
            </div>
          </div>
        </div>
    </BaseLayout>
  )
}
