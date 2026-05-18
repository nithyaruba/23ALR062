const notifications = [

{
    type: "Placement",
    company: "TCS Hiring",
    dueDate: "2026-05-25",
    message: "TCS Placement Drive Open"
},

{
    type: "Placement",
    company: "Infosys Drive",
    dueDate: "2026-05-20",
    message: "Infosys Hiring Open"
},

{
    type: "Placement",
    company: "CSX Corporation",
    dueDate: "2026-05-10",
    message: "CSX Corporation Hiring"
},

{
    type: "Event",
    message: "AI Workshop"
},

{
    type: "Result",
    message: "Semester Results Published"
}

];

let filteredNotifications = [];
let currentIndex = 0;
const limit = 10;

function filterNotifications(type){

    document.getElementById(
        "notificationContainer"
    ).innerHTML = "";

    filteredNotifications =
    notifications.filter(
        notification => notification.type === type
    );

    currentIndex = 0;

    loadMore();
}

function loadMore(){

    const container =
    document.getElementById(
        "notificationContainer"
    );

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

        // Placement section
        if(notification.type === "Placement"){

            const today =
            new Date();

            const due =
            new Date(notification.dueDate);

            const expired =
            today > due;

            const companyName =
            expired
            ?
            `<strike>${notification.company}</strike>`
            :
            notification.company;

            card.innerHTML = `
                <h3>${companyName}</h3>

                <p>${notification.message}</p>

                <p>
                    Due Date:
                    ${notification.dueDate}
                </p>

                <button
                id="inBtn${i}"
                onclick="optIn(${i}, '${notification.company}')"
                ${expired ? "disabled" : ""}>
                Opt In
                </button>

                <button
                id="outBtn${i}"
                onclick="optOut(${i}, '${notification.company}')"
                ${expired ? "disabled" : ""}>
                Opt Out
                </button>

                ${
                    expired
                    ?
                    "<p style='color:red'>Application Closed</p>"
                    :
                    ""
                }
            `;
        }

        // Event and Result
        else{

            card.innerHTML = `
                <h3>${notification.type}</h3>
                <p>${notification.message}</p>
            `;
        }

        container.appendChild(card);
    }

    currentIndex += limit;
}

function optIn(index, company){

    alert(
        "You Opted IN for " + company
    );

    document.getElementById(
        "inBtn" + index
    ).disabled = true;

    document.getElementById(
        "outBtn" + index
    ).disabled = true;
}

function optOut(index, company){

    alert(
        "You Opted OUT from " + company
    );

    document.getElementById(
        "inBtn" + index
    ).disabled = true;

    document.getElementById(
        "outBtn" + index
    ).disabled = true;
}