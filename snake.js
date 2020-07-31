// game=document.getElementById('game').addEventListener('click',()=>
let uname = "User"
let upt = 0
let opt = 0
var no = 1
let draw = 0


function sign() {
    namesign = ` <div  style="position: absolute; top: 40%;  width: 100%; height: 100%;">
<div  style="width: 90%; height:max-content ; background: linear-gradient(to bottom, #ff0000 0%, #6666ff 100%);; border-radius: 28px; border: 6px solid rgb(255, 196, 0); margin: auto;display: flex;flex-direction: column; align-items: center;">
    <p style="text-align: center; width:100%; height:100%; margin:40px; font-size: 80px;font-weight: bold; background-image: linear-gradient(to right, red, green 33%,blue 35%, black);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  ">Snake Water Gun</p>
    <input id="name" type="text" placeholder="Enter your name " style=" text-align:center; border-radius: 30px; width: 90%; margin: 40px 20px 10px 20px; padding:10px; border: 4px solid rgba(255, 128, 43, 0.849); font-size: 24px; font-family: cursive;">
    <button id="play" style="border-radius: 23px; width: 70%; margin:10px 20px 40px 20px; background: linear-gradient(to bottom, #0066ff 0%, #ff99cc 100%); padding:10px 20px; border: 5px solid rgb(72, 72, 231); font-size: 30px; font-family: 'Fredoka One', cursive;">Play</button>
</div> <
        /div>`

    console.log("you entered sign in");
    entry = document.getElementById("entry").innerHTML = namesign
    play = document.getElementById("play").addEventListener("click", () => {
        uname = document.getElementById("name").value
        entry = document.getElementById("entry").innerHTML = ""
        console.log(uname);
    })
}

function start(value) {
    sysno = Math.ceil(0 + (6 - 3) * Math.random());
    system = document.getElementById('system')
    user = document.getElementById('user')
    fight = document.getElementById('fight')
    if (value == 1) {
        user.innerHTML = `<img src="snake.jpg" alt="gun">`
    } else if (value == 2) {
        user.innerHTML = `<img src="water.jpg" alt="gun">`

    } else if (value == 3) {
        user.innerHTML = `<img src="gun.jpg" alt="gun">`

    }

    if (sysno == 1) {
        system.innerHTML = `<img src="snake.jpg" alt="gun" height="100%" width="100%">`
    } else if (sysno == 2) {
        system.innerHTML = `<img src="water.jpg" alt="gun" height="100%" width="100%">`

    } else if (sysno == 3) {
        system.innerHTML = `<img src="gun.jpg" alt="gun" height="100%" width="100%">`

    }
    console.log(sysno);
    userno = value
    console.log(userno);
    console.log(no);
    console.log('you clicked water');

    rounds = document.getElementById('rounds')
    userScore = document.getElementById('userScore')
    systemScore = document.getElementById('systemScore')

    if (userno == "1" && sysno == "2") {
        console.log(`you sysno : ${userno} && system's sysno : ${sysno} `)
        console.log('You Win !')
        upt += 1
        fight.innerHTML = `<img src="snake.jpg" alt="snake" height="100%" width="100%">`
        rounds.innerHTML = `<p>Round</p><p>${no+1}/10</p>`
        userScore.innerHTML = `<p>User</p><p>${upt}</p>`
        systemScore.innerHTML = `<p>System</p><p>${opt}</p>`
        message = `Snake swimmed away from water`
        result = `You Win !`
    } else if (userno == "1" && sysno == "3") {
        console.log(`you sysno : ${userno} && system's sysno : ${sysno} `)
        console.log('You Lost !')
        opt += 1
        fight.innerHTML = `<img src="gun.jpg" alt="gun" height="100%" width="100%">`
        rounds.innerHTML = `<p>Round</p><p>${no}/10</p>`
        userScore.innerHTML = `<p>User</p><p>${upt}</p>`
        systemScore.innerHTML = `<p>System</p><p>${opt}</p>`
        message = `Gun shooted the  snake`
        result = `You Lost !`
    } else if (userno == "3" && sysno == "2") {
        console.log(`you sysno : ${userno} && system's sysno : ${sysno} `)
        console.log('You Lost !')
        opt += 1
        fight.innerHTML = `<img src="water.jpg" alt="water" height="100%" width="100%">`
        rounds.innerHTML = `<p>Round</p><p>${no}/10</p>`
        userScore.innerHTML = `<p>User</p><p>${upt}</p>`
        systemScore.innerHTML = `<p>System</p><p>${opt}</p>`
        message = `gun lost in water`
        result = `You Lost !`
    } else if (userno == "3" && sysno == "1") {
        console.log(`you sysno : ${userno} && system's sysno : ${sysno} `)
        console.log('You Win !')
        upt += 1
        fight.innerHTML = `<img src="gun.jpg" alt="gun" height="100%" width="100%">`
        rounds.innerHTML = `<p>Round</p><p>${no}/10</p>`
        userScore.innerHTML = `<p>User</p><p>${upt}</p>`
        systemScore.innerHTML = `<p>System</p><p>${opt}</p>`
        message = `Gun kills the snake`
        result = `You Win !`
    } else if (userno == "2" && sysno == "3") {
        console.log(`you sysno : ${userno} && system's sysno : ${sysno} `);
        console.log('You Win !')
        upt += 1
        fight.innerHTML = `<img src="water.jpg" alt="water" height="100%" width="100%">`
        rounds.innerHTML = `<p>Round</p><p>${no}/10</p>`
        userScore.innerHTML = `<p>User</p><p>${upt}</p>`
        systemScore.innerHTML = `<p>System</p><p>${opt}</p>`
        message = `gun lost in water`
        result = `You Win !`
    } else if (userno == "2" && sysno == "1") {
        console.log(`you sysno : ${userno} && system's sysno : ${sysno} `)
        console.log('You Lost !')
        opt += 1
        fight.innerHTML = `<img src="snake.jpg" alt="snake" height="100%" width="100%">`
        rounds.innerHTML = `<p>Round</p><p>${no}/10</p>`
        userScore.innerHTML = `<p>User</p><p>${upt}</p>`
        systemScore.innerHTML = `<p>System</p><p>${opt}</p>`
        message = `Snake swimmed away from water`
        result = `You Lost !`
    } else if (userno == sysno) {
        console.log(`you sysno : ${userno} && system's sysno : ${sysno} `);
        console.log('match draw');
        fight.innerHTML = `<img src="draw.jpg" alt="draw height="100%" width="100%">`
        result = `Match draw`
        message = `Both gets one point`
        upt += 1;
        opt += 1;
    }
    no = no + 1
    msg = document.getElementById('msg').innerHTML = `<p>${message}</p>`
    result = document.getElementById('result').innerHTML = `<p>${result}</p>`
}

function end(resmessage, desc) {
    endhtml = `<div style="display: flex;flex-direction: column; align-items: center;justify-content: center; width: 100%;height: 100vh; padding: 10px;    background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);
    margin: auto; border-radius: 18px;">

        <div style="max-height:60vh; width:90%;margin: 3vh auto; background-image:url('cong1.jpg');display: flex;flex-direction: column; align-items: center ; border-radius: 12px;padding: 18px;">
            <b style="font-size: 7vh;font-family: 'Lobster', cursive; color: rgb(235, 22, 22);">${resmessage}</b>
            <b style="font-size: 10vh;padding:1vhfont-family: 'Baloo 2', cursive;color: rgb(240, 51, 199); ">${uname}</b>
            <p style="font-size:3vh;padding:2vh; font-family: 'Acme', sans-serif;
            ;">${desc}</p>
        </div>



        <b id="replay" style="font-size:4vh; margin: 2vh auto; font-family: 'Roboto Slab', serif;background: linear-gradient(to top left, #00ff00 0%, #ffcc00 100%);padding: 12px 25px; border-radius: 12px; ">Replay</b>
        <div class="share" style="; max-height:40vh; width:80%;padding: 2vh;margin: 4vh auto; display: flex; flex-direction: column;align-items: center; background: linear-gradient(to left, #6666ff 0%, #ff3300 100%);border-radius: 12px;">
            <b style="font-size:6vh;
  font-family: 'Roboto Slab', serif;padding: 8px 28px 18px 28px;font-size: 30px;  ">Share on</b>
            <span>
                <a href=""><img src="copy.png" alt=""style="height: 8vh;padding:5px; width: 8vh;padding:5px; border-radius: 12px;""></a>
                <a href=""><img src="email.png" alt=""style=" height: 8vh;padding:5px; width: 8vh;padding:5px; border-radius: 12px;""></a>
                <a href=""><img src="facebook.png" alt="" style="height: 8vh;padding:5px; width: 8vh;padding:5px; border-radius: 12px;""></a>
                <a href=""><img src="whatsapp.jpg" alt=""style=" height: 8vh;padding:5px; width: 8vh;padding:5px; border-radius: 12px;"></a>
        </span>
        </div>

    </div>`
    document.getElementById('game').innerHTML = ""
    document.getElementById('end').innerHTML = endhtml
    document.getElementById('replay').addEventListener("click", () => {
        window.location.reload(true)

    })
}



console.log('number is ', no);
// play()

water = document.getElementById('2').addEventListener('click', () => {
    if (no <= 9) {
        start(2)
    } else {
        let resmessage = ""
        let desc = ""
        if (opt < upt) {
            resmessage = "Congratulations"
            desc = `You won with ${upt-opt} points`

        } else if (upt < opt) {
            resmessage = "Better luck next time"
            desc = `You lose with ${opt-upt} points`

        }
        start(2)
        setInterval(() => {
            end(resmessage, desc)
        }, 3000);
        clearInterval()

        console.log('draw', draw, 'upt', opt, 'opt', upt);
    }

})
gun = document.getElementById('3').addEventListener('click', () => {
    console.log('you clicked gun');
    if (no <= 9) {
        start(3)
    } else {
        let resmessage = ""
        let desc = ""
        if (opt < upt) {
            resmessage = "Congratulations"
            desc = `You won with ${upt-opt} points`

        } else if (upt < opt) {
            resmessage = "Better luck next time"
            desc = `You lose with ${opt-upt} points`

        }
        start(3)
        setInterval(() => {
            end(resmessage, desc)
        }, 3000);
        clearInterval()

        console.log('draw', draw, 'upt', opt, 'opt', upt);
    }
})
snake = document.getElementById('1').addEventListener('click', () => {
    console.log('you clicked snake');
    if (no <= 9) {
        start(1)
    } else {
        let resmessage = ""
        let desc = ""
        if (opt < upt) {
            resmessage = "Congratulations"
            desc = `You won with ${upt-opt} points`

        } else if (upt < opt) {
            resmessage = "Better luck next time"
            desc = `You lose with ${opt-upt} points`

        }
        start(1)
        document.getElementById("game").disable = true
        setInterval(() => {
            end(resmessage, desc)
        }, 3000);
        clearInterval()

        console.log('draw', draw, 'upt', opt, 'opt', upt);
    }
})