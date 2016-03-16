Push Notification Sample App
============================
A sample mobile application built with [Ionic](http://ionicframework.com) and [ngCordova](http://ngcordova.com/) to demonstrate how to register for and receive push notifications on iOS
and Android. Once the device registration token is received, it is sent to a locally running node service where it will be stored for 
later use when a push notification needs to be broadcast to all subscribed devices using [node-pushserver](https://www.npmjs.org/package/node-pushserver). 
The setup to use node-pushserver is discussed more below but see the npm site for specific setup details. 

### ** PRE-REQUISITES 

You must install the following plugins for this app to work properly:

- [PushPlugin](https://github.com/phonegap-build/PushPlugin)
- console
- device
- dialogs
- media
- file
- [ToastPlugin](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin) 


        $ ionic plugin add org.apache.cordova.console
        $ ionic plugin add org.apache.cordova.device
        $ ionic plugin add org.apache.cordova.dialogs    
        $ ionic plugin add org.apache.cordova.file
        $ ionic plugin add org.apache.cordova.media
        $ ionic plugin add https://github.com/phonegap-build/PushPlugin
        $ ionic plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git



## Sending Push Notifications to your App

A couple options are included for sending push notifications to this application. You can use node-pushserver to store multiple device tokens
from different platforms and send in bulk, or if you just want to test sending one simple message, there are two simple node services included
to do that as well (node-apn and node-gcm). 
