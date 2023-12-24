// FIRST OPEN WHATSAPP WEB AND THE INBOX YOU WANT TO TRACK
// INJECT THESE LINES OF CODE INTO CONSOLE
// ONLINE OR LAST SEEN TRACK SECTION

let lastSeenData;


let moveMouseTo = function(x, y) {
  var event = document.createEvent("MouseEvent");
  event.initMouseEvent("mousemove", true, true, window, null, x, y, x, y, false, false, false, false, 0, null);
  document.dispatchEvent(event);
}


let isOnline = function(className) {


    try {
        lastSeenData = document.querySelector(className).textContent

        //console.log(lastSeenData)

        if (lastSeenData == "online") {
            return true;
        }
        return false;
    } catch (e) {
        //console.log(e.message)
        return false;
    }

}

let timeout;
let onlineTrace = [];
let timeInTimeOut = [];




let onlineBool = [];

let showOnlineTrace = function() {
    let data = "";
    for (let i = 0; i < onlineTrace.length; i++) {
        let s = '[From ' + onlineTrace[i][0] + ' To ' + onlineTrace[i][1] + ']'

        data += s + '\n';

    }
    // return data;
    console.log(data);

}


let checkLastSeen = function(className) {

    let status = isOnline(className)

    onlineBool.push(status)
    let lastOnlineBoolIndex = onlineBool.length - 1

    let t = new Date()

    //console.log(onlineBool[lastOnlineBoolIndex-1])

    if (status) {


        time = t.getDate() + '-' + (t.getMonth() + 1) + '-' + t.getFullYear() + ' ' + t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds()

        if (lastOnlineBoolIndex == 0) {
            timeInTimeOut.push(time)
        } else if (onlineBool[lastOnlineBoolIndex - 1] == false) {
            timeInTimeOut.push(time)
        }

    } else {
        if (onlineBool[lastOnlineBoolIndex - 1] == true) {
            timeInTimeOut.push(time)
            onlineTrace.push(timeInTimeOut)
            timeInTimeOut = []
        }
    }

}

let listen = function(className) {

    checkLastSeen(className);
    
    // var header = document.querySelector(".AmmtE");
    // header.focus(); 
    // var chatbox = document.querySelector(".n5hs2j7m.oq31bsqd.gx1rr48f.qh5tioqs");
    // chatbox.click();   
    // var textInput = document.querySelector(".selectable-text.copyable-text.iq0m558w.g0rxnol2")
    // textInput.click();

    // textInput.dispatchEvent(new Event('click')) ;
    
    moveMouseTo(500,500);
    setTimeout(listen, 1000,className);
}



listen("span[title='online']");
