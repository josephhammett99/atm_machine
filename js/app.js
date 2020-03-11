/////////////////////////////////////////////////////////////////////////////////////////////LOG//////

var homeS = document.getElementById('home');
var pin = document.getElementById("pin")
var withdrawS = document.getElementById('withdrawForm');
var depositS = document.getElementById('depositForm');

let i;

function pinStart() {
    event.preventDefault();
    if (pin === 4321 || 1234) {
        home()
    } else {
        console.log('false');
    }
};


function home() {
    console.log('yes');
    pin.style.display = 'none';
    homeS.style.display = 'block';
};

function withdraw() {
    event.preventDefault();
    homeS.style.display = 'none';
    withdrawS.style.display = 'block';
    for (let p = 0; p < people.length; p++) {
        i = p;
        if (pin === people[p].pin) {
            console.log('your balance is 500');
        }
        else {
        }
    }
};


function deposit() {
    event.preventDefault();
    homeS.style.display = 'none';
    depositS.style.display = 'block';
    for (let p = 0; p < people.length; p++) {
        i = p;
        if (pin === people[p].pin) {
            console.log('your balance is 500');
        }
        else {
        }
    }
};

var peopleStart = function (p) {
    useName(p.name)
    usePin(p.pin)
    findBalance(p.balance)
};

var people = [
    {
        name: 'Dave',
        pin: 4321,
        balance: 270
    },
    {
        name: 'Elizabeth',
        pin: 1234,
        balance: 500
    }
];


////////////////////////////////////////////////////////////////////////////////////////////DEPO//////

function atm(tester) {
    document.getElementById('test2').innerHTML = people[i].balance;
    document.getElementById('test').innerHTML = Number(tester) + people[i].balance;
};
////////////////////////////////////////////////////////////////////////////////////////////DRAW//////
function withdrawer(withdrawal) {
    document.getElementById('withdraw1').innerHTML = people[i].balance;
    document.getElementById('withdraw2').innerHTML = people[i].balance - Number(withdrawal);
};

