
    let arr=[
        "Push yourself, because no one else is going to do it for you.",
  "Failure is the condiment that gives success its flavor.",
  "Wake up with determination. Go to bed with satisfaction.",
  "It's going to be hard, but hard does not mean impossible.",
  "Learning never exhausts the mind.",
  "The only way to do great work is to love what you do."
    ];
    let text='';
    const msg=document.getElementById('msg');
    const btn=document.getElementById('btn');
    
    const typewords=document.getElementById('mywords');
    let startTime,endTime;
    const playgame=()=>{
        
        let date=new Date();
        startTime=date.getTime();
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        document.getElementById('starttime').innerText=time;
        btn.innerText="Done";
    }
    
    const endgame=()=>{
        let date=new Date();
        endTime=date.getTime();
        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        document.getElementById('endtime').innerText=time;
        let totaltime=((endTime-startTime)/1000);
        console.log(totaltime);
        let totalstr=typewords.value ;
        let wordscount=wordcount(totalstr);
        console.log(wordscount);
        let speed=Math.round((wordscount/totaltime)*60);
        let showmsg="your speed is "+speed+" words per minute";
       
        
        showmsg+=countcorrect(msg.innerText,totalstr);
        msg.innerText=showmsg;
    }
    
    const wordcount=(str)=>{
        let totalword=str.split(" ").length;
        return totalword;
    }
    const countcorrect=(str1,str2)=>{
        let word1=str1.split(" ");
        let word2=str2.split(" ");
        let cnt=0;
        word1.forEach(function(item,index){
            if(item==word2[index]){
                cnt++;
            }
        })
        let errorw=(word2.length-cnt);
        return (cnt+" correct out of "+word1.length+" words and total errors are "+errorw);
    }
    btn.addEventListener('click',function(){
        if(this.innerText=='start'){
            for(let i=0;i<10;i++){
                text+=arr[Math.floor(Math.random()*arr.length)];
                text+=" ";
                document.getElementById('msg').innerText=text;
            }
            typewords.disabled=false;
           
            playgame();
               }
               else if(this.innerText=="Done"){
                   typewords.disabled=true; 
                   btn.innerText="start";
                   endgame();
                   
               }
           
           
    })
    