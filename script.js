//your JS code here. If required.
function daysOfAYear(n) {
	let x=365;
	let y=366;
	if(n%4 === 0)
	{
		if(n%100 === 0)
		{
			if(n%400 === 0)
				{
				return y;
				}
			else
				{
				return x;
				}
		}
		else
		{
			return y;
		}
	}
	else{
		return x;
	}
	
	}

daysOfAYear(2002);
	
}