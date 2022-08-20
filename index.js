function scuberGreetingForFeet(feet){
  // Write your code here!
  let message
  if (feet <= 400) {
 message= 'This one is on me!';
  }

  else if(feet >=400  === feet <= 2000){
    message='That will be twenty bucks.';
  }

  else if(feet>2000 === feet <2500){
    message='I will gladly take your thirty bucks.';
  }

  else if(feet>2500) {
    message='No can do.';

  }

return message



}

function ternaryCheckCity(city){
  // Write your code here!
  const cityMessage = city ==="NYC" ? "Ok, sounds good." : "No go.";
  return cityMessage

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  let tipMessage
  switch (tip){
    case 'generous':
      tipMessage='Thank you so much.';
      return tipMessage
      case 'not as generous':
        tipMessage='Thank you.';
        return tipMessage

        default :
        tipMessage='Bye.'
        return tipMessage
        

      
  }

}