// JavaScript Document
var currentDate = new Date;
var CDay = currentDate.getDay();
var CTime = currentDate.getHours() + (currentDate.getMinutes() / 60);
var prompt = PGet();

function PGet()
{
	if(CDay == 0)
	{
		return "The studio is closed today! We will open in " +  (24 - CTime.toFixed() + 9) + " hours.";
	}
	else if(CTime < 9)
		{
			if(9 - CTime < 1)
				{
					return  "The studio will open in " + (9 - CTime) * 60 + " minutes!";
				}
			else
				{
					return  "The studio will open in " + (9 - CTime.toFixed()) + " hours!";
				}
		}
	else if(CTime >= 18)
		{
			if(CDay != 6)
				{
					return  "The studio will open in " + (33 - CTime.toFixed()) + " hours!";
				}
			else
				{
					return  "The studio will open in " + (57 - CTime.toFixed()) + " hours!";
				}
		}
	else
		{
			if(18 - CTime < 1)
				{
					return  "The studio is open for " + (18 - CTime) * 60 + " more minutes!";
				}
			else
				{
					return  "The studio is open for " + (18 - CTime.toFixed()) + " more hours!";
				}
		}
}