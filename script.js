

function newPopup(url) {
	popupWindow = window.open(
		url,'popUpWindow','height=800,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=yes')
}

function inviteRedirect() {
  window.open("https://discord.com/oauth2/authorize?client_id=701280304182067251&permissions=412317141056&scope=applications.commands%20bot")
}

function githubRedirect() {
  window.open("https://github.com/Yetity/y2b")
}



document.addEventListener('keydown', (event) => {
  if (event.keyCode !== 187) {return}
  var answer = prompt("Enter code for free bobux (entering wrong codes will result in consequences)")
  // made the answer actually claimable lol
  if (answer !== "yetbot.tk") {window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0"); return}
 
  alert("Claim this promocode(remove the square brackets and no spaces): [webæ¹¥¶¿áá³¤ë_!] ")
});