// replace value below with your Account ID //
var dsAccountId = '0a7b4568-19d2-455e-a47d-67cbff253dbe';
//  replace value below with your Clickwrap ID //
var dsClickwrapId = '58e76dd7-5ea0-4cbf-b0e4-bc9fb7817b35';
// replace value below with modal or inline depending on your clickwrap type //
var clickDisplayType = 'modal';
// replace logo URL below with your customers logo url.  transparent works best //
var logoUrl = 'https://squalio.com/wp-content/uploads/2018/06/ivanti-logo-600x441.png';
// replace with your brand hex code.  changes color of header text and button background //
var fontColor = '#c93a2b';
// replace with a hex code of your liking.  changes text color on the submit button //
var buttonTextColor = '#ffffff';

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }

function loadImage() {
  document.getElementById ("customerLogo").src = logoUrl;
  document.getElementById ("jtHeader").style.color = fontColor;
  document.getElementById ("signInText").style.color = fontColor;
  document.getElementById ("loginButton").style.background = fontColor;
  document.getElementById ("loginButton").style.color = buttonTextColor;
}

function showClickWrapper() {
  document.getElementById ("loginButton").style.display = "none";
  document.getElementById ("spinner").style.display = "block";
  var x = makeid(12) + '-' + document.getElementById ("email").value;
  document.getElementById ("userId").value = x;
  docuSignClick.Clickwrap.render({
      environment: 'https://demo.docusign.net',
      accountId: dsAccountId,
      clickwrapId: dsClickwrapId,
      clientUserId: x,
      format: clickDisplayType,
      onAgreed: callbackFnAgreed,
			onMustAgree: callbackFnMustAgree,
      onDeclined: callbackFnDeclined,
			onError: callbackFnError
    }, '#ds-terms-of-service');
  }

function callbackFnAgreed(){
		console.log ("callbackFnAgreed");
		document.getElementById ('signUpForm').style.display = "none";
		document.getElementById ('ds-terms-of-service').style.display = "none";
		document.getElementById ('signUpFormAgreed').style.display = "block";
		document.getElementById ('cochref').href = "https://appdemo.docusign.com/documents?view=active&type=clickwraps";
	}

	function callbackFnMustAgree(e){
		console.log ("callbackFnMustAgree");
		document.getElementById ("spinner").style.display = "none";
    document.getElementById ("signUpForm").style.display = "none";
	}

	function callbackFnError(e){
		console.log ("callbackFnError");
	}

  function callbackFnDeclined(){
    console.log ("callbackFnDeclined");
    document.getElementById ('signUpForm').style.display = "none";
		document.getElementById ('ds-terms-of-service').style.display = "none";
		document.getElementById ('signUpDeclined').style.display = "block";
  }
