var currentDay = new Date;
var today = currentDay.getDay();
var ctime = currentDay.getHours() + (currentDay.getMinutes() / 60);
var prompt;
if(this.today == 0 || this.ctime >= 18)
{
	let OpenTime = (24 - ctime) + 9;
	prompt = "<center><p>We will open in " + (OpenTime < 1? (OpenTime * 60).toFixed() + " Minutes!</p><center>": OpenTime.toFixed() + " hours!</p><center>");
}
else if(ctime > 9)
{
	let closeT = (18 - ctime);
	prompt = "<center><p>We will close in " + (closeT < 1? (closeT * 60).toFixed() + " Minutes!</p><center>": closeT.toFixed() + " hours!</p><center>");
}