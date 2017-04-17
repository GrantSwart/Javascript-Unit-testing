function quiz(Question,Choice1,Choice2,Choice3,Answer) {
    this.Question = Question;
    this.Choice1 = Choice1;
    this.Choice2 = Choice2;
    this.Choice3 = Choice3;
    this.Answer = Answer;
}

var Question1 = new quiz("Who has developed Javascript ?","Bill Gates","John Connor","Brendan Eich","2");
var Question2 = new quiz("Inside which element is the Javascript put in HTML ?","javascript","script","scripting","1");
var Question3 = new quiz("Which one is not a datatype in Javascript ?","Number","Boolean","Integer","2");

var score = 0;
var i= 1;

//alert( Object.keys(quiz.questions).length )
//alert( quiz.questions[0] )
//alert( eval("Question" + i + ".Question") )

//alert( Object.keys(quiz.questions).length )
//alert( quiz.questions[0] )

var listQuestion = function(){  
    if (typeof window['Question'+i] !== 'undefined'){
        document.getElementById("demo").innerHTML = '<p>'+eval("Question" + i + ".Question")+'</p>';
        var choicesOutput=[]; //new Array()
        for (var k=1; k<4; k++){
            choicesOutput.push(
                '<p><input type = "radio" name ="questionchoice">'+eval("Question" + i + ".Choice" + k)+'</p>');
        }
        document.getElementById("demo2").innerHTML =choicesOutput.join("");
        document.getElementById("demo3").innerHTML = 
            '<p><button onClick = "getSelectedValue()">Check</button></p> <br>';
    }
    else {
        switch(true) {
            case ((score/(i-1)) > 0.7):
                document.getElementById("demo3").innerHTML= "Good Job, your score is: " + score + " out of " + (i-1) + " !";
                break;
            case ((score/(i-1)) > 0.5):
                document.getElementById("demo3").innerHTML= "Not Bad, your score is: " + score + " out of " + (i-1) + " !";
                break;
            case ((score/(i-1)) > 0.2):
                document.getElementById("demo3").innerHTML= "Your score is: " + score + " out of " + (i-1) + " !";
                break;
            default:
                document.getElementById("demo3").innerHTML= "You have failed the test !";
        }
     document.getElementById("demo4").innerHTML =
            "<button input type = 'submit' onClick = 'location.reload()'> Try Again</button>";
    }
};
var getSelectedValue = function(){
    var value = '';
    for (var h = 0; 
        h < document.getElementsByName("questionchoice").length; h++){
        if (document.getElementsByName("questionchoice")[h]
            .checked==true){
            value = h;
        }
    }
    if (value == eval("Question" + i + ".Answer")){
        if(typeof window['Question'+(i+1)] !== 'undefined'){
            document.getElementById("demo4").innerHTML =
            "That is correct. </br><button input type = 'submit' onClick = 'loadContent()'> Next Question</button>";
            score++;
        }
        else {
            document.getElementById("demo4").innerHTML =
            "That is correct. </br><button input type = 'submit' onClick = 'loadContent()'> Finish</button>";
            score++;
        }
    }
    else {
        if(typeof window['Question'+(i+1)] !== 'undefined'){
            document.getElementById("demo4").innerHTML ="That is incorrect. </br><button input type = 'submit' onClick = 'loadContent()'> Next Question</button>";
        }
        else {
            document.getElementById("demo4").innerHTML ="That is incorrect. </br><button input type = 'submit' onClick = 'loadContent()'> Finish</button>";
        }
    }
};
function loadContent(){
    i++;
    document.getElementById("demo4").innerHTML="";
    listQuestion();
}
window.onload = listQuestion;