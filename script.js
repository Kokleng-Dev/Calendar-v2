const date = new Date();                                                                            // date obj

function renderCalendar() {

    date.setDate(1);                                                                                // set current Date to 1st of date even current date is date 5th , 6th ... or so on.                

    const LAST_DAY = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();                // Find last date of current month

    const FIRST_DAY_INDEX = date.getDay();                                                          // Find day of 1st of current month

    const LAST_DAY_INDEX = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();           // Find day of last day of current month

    const PREV_LAST_DAY = new Date(date.getFullYear(), date.getMonth(), 0).getDate();               // Find last date of last month

    const NEXT_DAY = 7 - LAST_DAY_INDEX - 1;                                                        // Find the number of day remaining after last day of the month that standing on !!

    const MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];  // Name of month

    const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];  // Name of Day

    const DAY_OF_MONTH = document.querySelector(".alldays");

    let mainEvent = '';         // Use show last result
    let myEven = '';            // Use for Sum of Event in date that has 4 events up
    let listEvent = '';         // Use for Sum of Event in date that has 3 events down
    let days = "";              // Use create cell of date
    let listNum = 0;            // Use to display numbering of Event in each cell  
    let show = false;           // Condition for display "only 3events" or "4events up" 

    document.querySelector("#month").innerHTML = MONTH[date.getMonth()];

    document.querySelector("#year").innerHTML = date.getFullYear();

    //Json Array
    let event =
    [
        {
            "title": "Metting"
            , "sub_title": "with Team"
            , "start_datetime": "2021-11-15T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#004e92"
        }
        , {
            "title": "Metting"
            , "sub_title": "with Team"
            , "start_datetime": "2021-12-15T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#004e92"
        }
        , {
            "title": "Conference"
            , "sub_title": ""
            , "start_datetime": "2021-11-10T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#42275a"
        }
        , {
            "title": "Launch"
            , "sub_title": "with customer"
            , "start_datetime": "2021-11-21T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#734b6d"
        }
        , {
            "title": "Birthday Party"
            , "sub_title": "Co-worker"
            , "start_datetime": "2021-12-07T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#F00000"
        }
        , {
            "title": "Birthday Party"
            , "sub_title": "Co-worker"
            , "start_datetime": "2021-12-01T00:00:00.000Z"
            , "end_datetime": "2021-12-05T00:00:00.000Z"
            , "color": "#F00000"
        }
        , {
            "title": "Launch"
            , "sub_title": "with customer"
            , "start_datetime": "2021-12-07T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#734b6d"
        }
        , {
            "title": "Conference"
            , "sub_title": ""
            , "start_datetime": "2021-12-01T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#42275a"
        }
        , {
            "title": "Launch"
            , "sub_title": "with customer"
            , "start_datetime": "2021-12-01T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#734b6d"
        }
        , {
            "title": "Launch"
            , "sub_title": "with customer"
            , "start_datetime": "2021-12-21T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#734b6d"
        }
        , {
            "title": "Coffee Date"
            , "sub_title": "with customer"
            , "start_datetime": "2022-02-04T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#734b6d"
        }
        , {
            "title": "Coffee Date"
            , "sub_title": "with customer"
            , "start_datetime": "2021-12-01T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#ba4a6d"
        }

        , {
            "title": "Happy Hour"
            , "sub_title": ""
            , "start_datetime": "2021-12-15T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#243B55"
        }
        , {
            "title": "Metting"
            , "sub_title": ""
            , "start_datetime": "2022-02-18T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#FD746C"
        }
        ,
        {
            "title": "Metting"
            , "sub_title": ""
            , "start_datetime": "2021-12-08T00:00:00.000Z"
            , "end_datetime": "2021-12-18T00:00:00.000Z"
            , "color": "#FD746C"
        }
        ,
        {
            "title": "Relaxing"
            , "sub_title": "Playing Game"
            , "start_datetime": "2021-12-09T00:00:00.000Z"
            , "end_datetime": "2021-12-10T00:00:00.000Z"
            , "color": "#aaca6C"
        }
        , {
            "title": "Happy Hour"
            , "sub_title": ""
            , "start_datetime": "2021-12-20T00:00:00.000Z"
            , "end_datetime": ""
            , "color": "#243B55"
        }
    ];

    // Funtion for Event that has no end of timedate
    function eventFourNoEndDate(listNum, x) 
    {
        let eventF = `<span class="show-event" style="background-color: ${event[x].color}">	
                        <label id="titleEvent">${listNum}&#160;:&#160;${event[x].title}</label>                               
                        <i id="showRight" class="fa fa-caret-right" aria-hidden="true"></i>
                        <span class="show-content" style="background-color: ${event[x].color}">
                            Sub Title : ${event[x].sub_title} <br><br>
                            Start DateTime : ${DAY[new Date(event[x].start_datetime).getDay().toString()]} ${new Date(event[x].start_datetime).getDate().toString()}
                                            ${MONTH[new Date(event[x].start_datetime).getMonth().toString()]} ${new Date(event[x].start_datetime).getFullYear().toString()}<br><br>
                            End DateTime : 
                        </span>
                    </span>	`;
        return eventF;
    }


    // Funtion for Event that has end of timedate
    function eventFour(listNum, x) 
    {
        let eventF = `<span class="show-event" style="background-color: ${event[x].color}">	
                        <label id="titleEvent">${listNum}&#160;:&#160;${event[x].title}</label>                               
                        <i id="showRight" class="fa fa-caret-right" aria-hidden="true"></i>
                        <span class="show-content" style="background-color: ${event[x].color}">
                            Sub Title : ${event[x].sub_title} <br><br>
                            Start DateTime : ${DAY[new Date(event[x].start_datetime).getDay().toString()]} ${new Date(event[x].start_datetime).getDate().toString()}
                                            ${MONTH[new Date(event[x].start_datetime).getMonth().toString()]} ${new Date(event[x].start_datetime).getFullYear().toString()}

                                            <br><br>

                            End DateTime : ${DAY[new Date(event[x].end_datetime).getDay().toString()]} ${new Date(event[x].end_datetime).getDate().toString()} 
                                           ${MONTH[new Date(event[x].end_datetime).getMonth().toString()]} ${new Date(event[x].end_datetime).getFullYear().toString()}
                        </span>
                    </span>	`;
        return eventF;
    }


    // Use to display event when there are 4 Events up in the same day
    function heroEvent(listNum, myEven) 
    {
        let hero = `<span class="hero-event">
                        <label id="your-event">Event&#160;:&#160;${listNum}</label>
                        <button id="btn-show">
                            <i id="dropDown" class="fa fa-caret-right" aria-hidden="true"></i>
                            <span class="show">${myEven}</span>
                        </button> 
                    </span>`;
        return hero;
    }


    // Funtion for Event that has end of timedate
    // Use to display event when there are Events between (1-3)of Event in the same day
    function eventThree(listNum, x) 
    {
        let eventT = `<span class="even" style="background-color: ${event[x].color};">${listNum}&#160;:&#160;${event[x].title} 
                            <span class="show-content" style="background-color: ${event[x].color}">
                                 Sub Title : ${event[x].sub_title} <br><br>
                                 Start DateTime :${DAY[new Date(event[x].start_datetime).getDay().toString()]} ${new Date(event[x].start_datetime).getDate().toString()}
                                                 ${MONTH[new Date(event[x].start_datetime).getMonth().toString()]} ${new Date(event[x].start_datetime).getFullYear().toString()}

                                                 <br><br>

                                 End DateTime :  ${DAY[new Date(event[x].end_datetime).getDay().toString()]} ${new Date(event[x].end_datetime).getDate().toString()} 
                                                 ${MONTH[new Date(event[x].end_datetime).getMonth().toString()]} ${new Date(event[x].end_datetime).getFullYear().toString()}
                            </span>
                    </span> `;
        return eventT;
    }


    // Funtion for Event that has no end of timedate
    // Use to display event when there are Events between (1-3)of Event in the same day
    function eventThreeNoEndDate(listNum, x)
    {
        let eventT = `<span class="even" style="background-color: ${event[x].color};">${listNum}&#160;:&#160;${event[x].title} 
                            <span class="show-content" style="background-color: ${event[x].color}">
                                Sub Title : ${event[x].sub_title} <br><br>
                                Start DateTime :${DAY[new Date(event[x].start_datetime).getDay().toString()]} ${new Date(event[x].start_datetime).getDate().toString()}
                                                ${MONTH[new Date(event[x].start_datetime).getMonth().toString()]} ${new Date(event[x].start_datetime).getFullYear().toString()}
                                                <br><br>
                                End DateTime :  
                            </span>
                    </span> `;
        return eventT;
    }


   
    
    // Condition for create cells of date before first date of the month that standing on
    for (let x = FIRST_DAY_INDEX; x > 0; x--) {
        days +=
            `
        <div class="days prev-date">
            <span class="date">${PREV_LAST_DAY - x + 1}</span>
        </div>
    `;
    }

    //Condition for create cells of the month that standing on 
    for (let i = 1; i <= LAST_DAY; i++) {

        //condition for current date
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) 
        {

            //condition find event that has in i's date
            for (let x = 0; x < event.length; x++) 
            {    
                let pointingDate = new Date(date.getFullYear(), date.getMonth(), i).getTime();

                let eventDate = new Date(
                                            new Date(event[x].start_datetime).getFullYear() ,
                                            new Date(event[x].start_datetime).getMonth() ,
                                            new Date(event[x].start_datetime).getDate()

                                        ).getTime();

                if(event[x].end_datetime == '')                          //condition date of event that has no end_datetime
                {
                    if (pointingDate === eventDate)
                    {
            
                        listNum++;
                        myEven += eventFourNoEndDate(listNum, x);
                        listEvent += eventThreeNoEndDate(listNum, x);
                        show = true;
                        
                    }
                    
                    else 
                    {
                        myEven += '';
                        listEvent += '';
                    }
    
                }

                else                                                    //condition date of event that has end_datetime
                {
                    if (pointingDate === eventDate)
                    {
            
                        listNum++;
                        myEven += eventFour(listNum, x);
                        listEvent += eventThree(listNum, x);
                        show = true;
                        
                    }   
                    
                    else 
                    {
                        myEven += '';
                        listEvent += '';
                    }
                }
               
            }

            if (show == true)        // condition of display events
            {

                    if (listNum <= 3) 
                    {
                        mainEvent += `${listEvent}`;
                        show = false;
                    }
                    else 
                    {
                        mainEvent += heroEvent(listNum, myEven);
                        show = false;
                    }           
                
            }
            else 
            {
                mainEvent = '';
            }

            days += `<div class="days today">
                        <span class="date">${i}</span>
                        ${mainEvent}
                    </div>`;

            listEvent = '';
            myEven = '';
            listNum = 0;
            mainEvent = '';
            ok= '';
        }

        //condition for all date that different from current date
        else 
        {
            for (let x = 0; x < event.length; x++) 
            {
                let pointingDate = new Date(date.getFullYear(), date.getMonth(), i).getTime();
                let eventDate = new Date(
                                            new Date(event[x].start_datetime).getFullYear() ,
                                            new Date(event[x].start_datetime).getMonth() ,
                                            new Date(event[x].start_datetime).getDate()
                                        ).getTime();

                if(event[x].end_datetime == '')                                  //condition date of event that has no end_datetime
                {
                    if (pointingDate === eventDate)
                    {
            
                        listNum++;
                        myEven += eventFourNoEndDate(listNum, x);
                        listEvent += eventThreeNoEndDate(listNum, x);
                        show = true;

                        
                    }
                    
                    else 
                    {
                        myEven += '';
                        listEvent += '';
                    }
    
                }

                else                                                             //condition date of event that has end_datetime
                {
                    if (pointingDate === eventDate)
                    {
            
                        listNum++;
                        myEven += eventFour(listNum, x);
                        listEvent += eventThree(listNum, x);
                        show = true;

                    }
                    
                    else 
                    {
                        myEven += '';
                        listEvent += '';
                    }
                }
            }

            if (show == true)               // condition of display events
            {

                    if (listNum <= 3) 
                    {
                        mainEvent += `${ok} ${listEvent}`;
                        show = false;
                    }
                    else 
                    {
                        mainEvent += heroEvent(listNum, myEven);
                        show = false;
                    }           
                
            }
            else 
            {
                mainEvent = '';
            }

            days += `<div class="days">
                <span class="date">${i}</span> 
                ${mainEvent}
            </div>`;

            listEvent = '';
            myEven = '';
            listNum = 0;
            mainEvent = '';
            ok = '';
        }

    }

    //Condition for create cells of date after last date of the month that standing on
    for (let j = 1; j <= NEXT_DAY; j++) 
    {
        days += `<div class="days next-date"><span class="date">${j}</span></div>`;
    }

    //Display all cells
    DAY_OF_MONTH.innerHTML = days;

};

//For button left click
document.querySelector("#left").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

//For button right click
document.querySelector("#right").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

//For button today
document.querySelector("#today").addEventListener("click", () => {
    date.setMonth(new Date().getMonth());
    date.setFullYear(new Date().getFullYear());
    date.setDate(new Date().getDate());
    renderCalendar();
})

renderCalendar();

