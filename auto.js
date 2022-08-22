
// bob1  pc注册链接
var bob1_pcs = [
'https://www.4r2na.com:9900/register/?agent_code=6860174'
];
// bob1  h5注册链接
var bob1_h5s = [
'https://www.w9cnts.com:6600/register/?agent_code=6860174'
];
// boyu2 pc注册链接
var boyu2_pcs = [
'https://www.boyu1010.com:30111/register/?i_code=3567222'
];
// boyu2 h5注册链接
var boyu2_h5s = [
'https://www.boyuvip170.com:30894/entry/register/?i_code=3567222'
];
// pc进入 APP
var yule3_pcs = [
'https://www.boyu1041.com:30112/?i_code=3567222'
];
// H5进入  APP
var yule3_h5s = [
'https://www.boyu1041.com:30112/?i_code=3567222'
];
// YL1 APP 体版
var yule_apps = [
'https://www.boyu1041.com:30112/?i_code=3567222'
];


var bob1_randomPC = bob1_pcs[Math.floor(Math.random() * bob1_pcs.length)];
var bob1_randomh5 = bob1_h5s[Math.floor(Math.random() * bob1_h5s.length)];


var boyu2_randomPC = boyu2_pcs[Math.floor(Math.random() * boyu2_pcs.length)];
var boyu2_randomh5 = boyu2_h5s[Math.floor(Math.random() * boyu2_h5s.length)];

var yule3_randomPC = yule3_pcs[Math.floor(Math.random() * boyu2_pcs.length)];
var yule3_randomh5 = yule3_h5s[Math.floor(Math.random() * boyu2_h5s.length)];

var yule_randomApp = yule_apps[Math.floor(Math.random() * yule_apps.length)];

function bob1_pc(){
    window.open(bob1_randomPC);
}
function bob1_h5(){
    window.open(bob1_randomh5);
}

function boyu2_pc(){
     window.open(boyu2_randomPC);
}
function boyu2_h5(){
    window.open(boyu2_randomh5);
}

function yule3_pc(){
    window.open(yule3_randomPC);
}
function yule3_h5(){
    window.open(yule3_randomh5);
}
function yule_app(){
    window.open(yule_randomApp);
}
