// 스코프

// var a = 'hello';
// function func(){
//     console.log(a);
// }
// func();

// var a = 'hello';
// function func(){
//     var a = 'javascript';
//     console.log('inner',a);
// }
// func();
// console.log('outer',a);

// var a = 'hello';
// function func(){
//     a = 'javascript';
//     console.log('inner',a);
// }
// func();
// console.log('outer',a);

// 전역변수를 사용하지 않는 방법
// 익명함수 : 모든 코드를 익명함수 안에서 처리한다.
(function(){
    var a = 'hello';
    console.log(a);
}());
console.log(a);
