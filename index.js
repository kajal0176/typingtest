//  (actualWords / totalTimeTaken) * 60;

const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;


const calculateTypingSpeed = (time_taken) => {
    //trim()  is used to remove leading and trailing whitespace
    let  totalWords = typing_ground.value.trim();
    //split(" ") function splits the sentence string into an array of words using a space (" ") as the delimiter.
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}


const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();
//totaltime is in milisecond thats why we are dividing it byy 1000 so that it will be in second
    totalTimeTaken = (endTime -startTime) / 1000;

    // console.log(totalTimeTaken);

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}



let list=[];
//fetch() function to make an HTTP request to the "Bacon Ipsum" API and retrieve random sentences
// Initiating an HTTP GET request to the specified URL
fetch('https://baconipsum.com/api/?type=all-meat&sentences=5') //It's trying to get data from the API.
  //.then() method is used to handle the response after the fetch request is complete
  //It takes a callback function as an argument. 
  //In this line, it takes the response object returned by the fetch request and uses
  // its .json() method to parse the response data as JSON.
.then(response => response.json())

// the second .then() method handles the JSON data 
//received from the previous step. 
//It takes the parsed data (which should be an array of sentences) 
//and assigns it to the variable list
  .then(data => {
   list = data;
   // console.log(list);
  })
  //.catch() method is used to handle errors that might occur during the fetch process
  .catch(error => console.error('Error fetching data:', error));

  //arrow function
const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * list.length);
    // console.log(randomNumber);
    show_sentence.innerHTML = list[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}




//A JavaScript event listener is a function or method 
//that waits for a specific event to occur on a particular HTML
// element and then executes a designated piece of code (callback function) in response to 
//that event. Events can be user interactions like clicks, key presses, mouse movements, or changes in the state of an element.
const handleClick=()=>{
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled' , 'true');
            endTypingTest();
            break;
    }
}
btn.addEventListener('click',handleClick);