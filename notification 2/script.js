function addNotification() {
    const message = getInput();
   
    
    if (!message.length) return;

   
    const notification = createNotification( message );
    

     document.body.append(notification);

      notification.classList.add("show");
    


    
}
 




document.querySelector("button").addEventListener("click", addNotification);


function createNotification( props) {
    console.log({props});

    const {  message } = props;

    const notificationCard = document.createElement("div");

    notificationCard.classList.add("notification-card");

    const closeButton = document.createElement("button");

    closeButton.classList.add("close");

    closeButton.append("x");

    
    // closeButton.onclick = close(notificationCard);
    closeButton.onclick = close(notificationCard);

    


    notificationCard.append( props , closeButton);

    return notificationCard;

}



function close(notification){
    return ()=> {
      notification.classList.remove("show");
      
    };
}








function getInput() {
    return document.getElementById("message").value;
  }
