const connectivityNotification = document.getElementsByClassName(
    "connectivity-notification"
  )[0];
  
  connectivityNotification.classList.add("hidden");
  
  window.addEventListener("online", () =&gt; {
    connectivityNotification.classList.add("hidden");
    console.log(connectivityNotification.classList);
    console.log("online");
  });
  window.addEventListener("offline", () =&gt; {
    connectivityNotification.classList.remove("hidden");
    console.log("offline");
  });

  