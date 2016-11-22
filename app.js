var state = {
	questionList : [question('5+5', choice(1 , 55 , 0 , 10), 4), question('5+5', choice(1 , 55 , 0 , 10), 4), question('5+5', choice(1 , 55 , 0 , 10), 4), question('5+5', choice(1 , 55 , 0 , 10), 4),
	question('5+5', choice(1 , 55 , 0 , 10), 4), question('5+5', choice(1 , 55 , 0 , 10), 4), question('5+5', choice(1 , 55 , 0 , 10), 4)],
	currentQuestion : 1,
	currentRight : 0
};

function question(question, choices , correctChoice)
{
	return {
		question: question, 
		choices: choices ,
		correctChoice: correctChoice 
	};
}
function choice(choice1, choice2, choice3, choice4) {
	return {
		choice1 : choice1 ,
		choice2 : choice2 ,
		choice3 : choice3 ,
		choice4 : choice4 ,
	};
}

function nextQuestion(isCorrect)
{	
	if(state.currentQuestion === state.questionList.length)
	{
		$('.questionContent').addClass('hidden');
		return;
	}
	$('.choice').css('background-color' , 'blue');
	state.currentQuestion += 1;
	updateChoices();
	if(isCorrect)
	{
		state.currentRight += 1;
	}
	$('.counter').text(state.currentQuestion - 1 - state.currentRight + ' incorrect, ' + state.currentRight + ' correct');
	$('.currentQuestion').text(state.currentQuestion + ' out of ' + state.questionList.length);
}

function correctAnswer(event)
{
	nextQuestion(true);
}

function incorrectAnswer(event)
{
	console.log('incorrectAnswer');
	$(event.currentTarget).css('background-color' , 'red');
	var elementText = '.choice' + state.questionList[state.currentQuestion - 1].correctChoice;
	$(elementText).css('background-color' , 'green');
	setTimeout(function() { nextQuestion(false); }, 1000);
}

function updateChoices()
{
	$('.question').text(state.questionList[state.currentQuestion - 1].question);
	$('.choice1').text(state.questionList[state.currentQuestion - 1].choices.choice1);
	$('.choice2').text(state.questionList[state.currentQuestion - 1].choices.choice2);
	$('.choice3').text(state.questionList[state.currentQuestion - 1].choices.choice3);
	$('.choice4').text(state.questionList[state.currentQuestion - 1].choices.choice4);
}

$(document).ready(function()
{
	$('.start').click(function(event)
	{
		this.remove();
		$('.questionBox').removeClass('hidden');
	});
	updateChoices();
	$('.choice1').click(function(event)
	{
		if(state.questionList[state.currentQuestion - 1].correctChoice === 1)
			correctAnswer(event);
		else
			incorrectAnswer(event);
	});

	$('.choice2').click(function(event)
	{
		if(state.questionList[state.currentQuestion - 1].correctChoice === 2)
			correctAnswer(event);
		else
			incorrectAnswer(event);
	});

	$('.choice3').click(function(event)
	{
		if(state.questionList[state.currentQuestion - 1].correctChoice === 3)
			correctAnswer(event);
		else
			incorrectAnswer(event);
	});

	$('.choice4').click(function(event)
	{
		if(state.questionList[state.currentQuestion - 1].correctChoice === 4)
			correctAnswer(event);
		else
			incorrectAnswer(event);
	});
});