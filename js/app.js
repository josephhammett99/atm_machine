/////////////////////////////////////////////////////////////////////////////////////////////LOG//////

var homeSrc = document.getElementById('home');
var withdrawSrc = document.getElementById('withdrawForm');
var depositSrc = document.getElementById('depositForm');
var pin = document.getElementById("pin");
var pinNumb;
let i;

function pinStart() {
    event.preventDefault();
    for (let p = 0; p < people.length; p++) {
        pinNumb = document.getElementById("pinNumb").value

        i = p;
        console.log(pinNumb);
        console.log(people[p].pin);


        if (Number(pinNumb) === people[p].pin) {
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
    homeSrc.style.display = 'block';
};


function withdraw() {
    event.preventDefault();
    homeSrc.style.display = 'none';
    withdrawSrc.style.display = 'block';

};


function deposit() {
    event.preventDefault();
    homeSrc.style.display = 'none';
    depositSrc.style.display = 'block';
};


function homer() {
    pin.style.display="block";
    homeSrc.style.display='none';
    withdrawSrc.style.display='none';
    depositSrc.style.display='none';
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
        balance: 270.00
    },
    {
        name: 'Elizabeth',
        pin: 1234,
        balance: 500.00
    }
];


////////////////////////////////////////////////////////////////////////////////////////////DEPO//////

function atm(tester) {
    document.getElementById('test2').innerHTML = people[i].balance;
    document.getElementById('test').innerHTML = Number(tester) + people[i].balance;
    document.getElementById('test').style.color = "lime";
};
////////////////////////////////////////////////////////////////////////////////////////////DRAW//////
function withdrawer(withdrawal) {
    document.getElementById('withdraw1').innerHTML = people[i].balance;
    document.getElementById('withdraw2').innerHTML = people[i].balance - Number(withdrawal);
    document.getElementById('withdraw2').style.color = "lime";
};