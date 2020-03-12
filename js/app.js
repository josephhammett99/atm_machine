/////////////////////////////////////////////////////////////////////////////////////////////LOG//////

var homeS = document.getElementById('home');
var withdrawS = document.getElementById('withdrawForm');
var depositS = document.getElementById('depositForm');
var pin = document.getElementById("pin");
var pinN;
let i;

function pinStart() {
    event.preventDefault();
    for (let p = 0; p < people.length; p++) {
        pinN = document.getElementById("pinN").value 

        i = p;
        console.log(pinN);
        console.log(people[p].pin);
        
        
        if (Number(pinN) === people[p].pin) {
            home()
            return
        } else {
            console.log('false');
        }
    };
}


function home() {
    console.log('yes');
    pin.style.display = 'none';
    homeS.style.display = 'block';
};

function withdraw() {
    event.preventDefault();
    homeS.style.display = 'none';
    withdrawS.style.display = 'block';

};


function deposit() {
    event.preventDefault();
    homeS.style.display = 'none';
    depositS.style.display = 'block';
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

