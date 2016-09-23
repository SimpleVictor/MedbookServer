var myObject = { outputSpeech: { type: 'PlainText', text: 'Thank you for using MedBook Service. What can I help you with today?' }, card: { type: 'Simple', title: 'SessionSpeechlet - Welcome', content: 'SessionSpeechlet - Thank you for using MedBook Service. What can I help you with today?' }, reprompt: { outputSpeech: { type: 'PlainText', text: 'If you dont know any commands feel free to look on our app for our list of commands' } }, shouldEndSession: false };


console.log(JSON.stringify(myObject));
