

	var words=["cat","dog"];
	var word=words[Math.floor(Math.random()*words.length)];
	var answerarray=[];
	for(var i=0;i<word.length;i++)
	{
		answerarray[i]='_';
	}
	var remainingletter=word.length;
	while(remainingletter>0)
	{
		alert(answerarray.join(" "));
		var guess=prompt("enter your guess");
	if(guess===null)
	{
		break;
	}
	else if(guess.length!=1)
	{
		alert("please enter the single letter");
	}
	else{
		for(var j=0;j<word.length;j++)
		{
			if(guess===word[j])
			{
					answerarray[j]=guess;
					remainingletter--;
			}
		}
	}
}
	alert(answerarray.join(" "));
alert("Good job! The answer was " + word);

