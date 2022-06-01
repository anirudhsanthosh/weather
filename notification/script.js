function addNotification() {
    const message = getInput();
    const type    = getType();
    const timeout  = getTimeout();
    
    if (!message.length) return;

   
    const notification = createNotification({ type , message });
    

    document.body.append(notification);

    setTimeout(() => notification.classList.add("show"),10);

    if (timeout?.length) setTimeout(close(notification), timeout);

}





document.querySelector("button").addEventListener("click", addNotification);


function createNotification( props) {
    console.log({props});

    const { type , message } = props;

    const notificationCard = document.createElement("div");

    notificationCard.classList.add("notification-card",type);

    const closeButton = document.createElement("button");

    closeButton.classList.add("close");

    closeButton.append("x");

    closeButton.onclick = close(notificationCard);

    notificationCard.append( message , closeButton);

    return notificationCard;

}

function close(notification){
    return ()=> {
      notification.classList.remove("show");
      setTimeout(()=> notification.remove(),100);
    };
}







function getType() {
    return document.getElementById("type").value ?? "success";
  }
function getTimeout() {
    return document.getElementById("timeout").value;
  }
function getInput() {
    return document.getElementById("message").value;
  }
