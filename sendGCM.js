var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyBTmYXyQPMDNQOTLFhqLv1f_mIiv8IE90k');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and Me \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar when you drag it down by the time

//message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app - may not work
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id/token is required
//registrationIds.push('APA92cGtSvVZudbg8ef_CrzPiMiXasKlt1NzYi3FRX7a1z1rpBqBqvT6TvUJL7RHABYviYyL6Q9jw5jTbpRjpkLhrP0f2r11c3bHGUJuUm-eaOXP0QKp0aIpWJIQTHTVQ4prRHuwJYvi8S16cO_B_5LrhfuFthQ9uw5bQXQ3OGngF8N-dmJu-kE');
registrationIds.push('APA91bELav9rx4LIQ8xetWG8fwfQUAddQpvbW0patT8An73wf6NbrvNPTfODOUoT9fVx7fkK5HC8pu9VuVEq-hQsyUqhTIoATQOAPulEmGbKQRViWOdAmaFEEV7KgwKSS9OZM-goC67bMgJeE3wL4exvVPTdNE5QTg');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log("message result"+result); //null is actually success
});
