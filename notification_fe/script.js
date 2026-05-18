const notifications = [

{
    type: "Result",
    message: "mid-sem",
    timestamp: "2026-04-22 17:51:30"
},

{
    type: "Placement",
    message: "CSX Corporation hiring",
    timestamp: "2026-04-22 17:51:18"
},

{
    type: "Event",
    message: "farewell",
    timestamp: "2026-04-22 17:51:06"
},

{
    type: "Result",
    message: "external",
    timestamp: "2026-04-22 17:50:30"
},

{
    type: "Result",
    message: "project-review",
    timestamp: "2026-04-22 17:50:18"
},

{
    type: "Event",
    message: "tech-fest",
    timestamp: "2026-04-22 17:50:06"
},

{
    type: "Placement",
    message: "Advanced Micro Devices Inc. hiring",
    timestamp: "2026-04-22 17:49:42"
},

{
    type: "Event",
    message: "AI Workshop",
    timestamp: "2026-04-22 17:49:20"
},

{
    type: "Placement",
    message: "Infosys Drive",
    timestamp: "2026-04-22 17:49:00"
},

{
    type: "Result",
    message: "semester-result",
    timestamp: "2026-04-22 17:48:50"
},

{
    type: "Event",
    message: "Sports Day",
    timestamp: "2026-04-22 17:48:30"
},

{
    type: "Placement",
    message: "TCS Hiring",
    timestamp: "2026-04-22 17:48:00"
}

];

let filteredNotifications = [];
let currentIndex = 0;
const limit = 10;

function filterNotifications(type){

    document.getElementById("notificationContainer").innerHTML = "";

    filteredNotifications =
    notifications.filter(
        notification => notification.type === type
    );

    currentIndex = 0;

    loadMore();
}

function loadMore(){

    const container =
    document.getElementById("notificationContainer");

    for(
        let i = currentIndex;
        i < currentIndex + limit &&
        i < filteredNotifications.length;
        i++
    ){

        const notification =
        filteredNotifications[i];

        const card =
        document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${notification.type}</h3>
            <p>${notification.message}</p>
            <small>${notification.timestamp}</small>
        `;

        container.appendChild(card);
    }

    currentIndex += limit;

    if(currentIndex >= filteredNotifications.length){
        document.getElementById("loadBtn").style.display = "none";
    }

    else{
        document.getElementById("loadBtn").style.display = "inline-block";
    }
}