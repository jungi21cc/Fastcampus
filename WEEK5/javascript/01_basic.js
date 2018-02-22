출력
console.log("a", "b");

식별자
상수명 : snake case (대문자)
변수명 : camel case
var TOTAL_COUNT = 50;
var firstName = "Doojin",
    lastName  = "Park";
console.log(firstName, lastName, TOTAL_COUNT);

변수선언 및 연산
var a = 1;
var b = 2;
var result = a + b;
console.log(result);

연산자
+, -, *, /, %, ++, --
var i = 2;
i++;
console.log(i);
i--;
console.log(i);
console.log(5/3);

연산자 우선순위가 있다.
var c, d;
c = 3;
d = 4;
var result = (c - d) * 5;
console.log(result);


데이터 타입
var a = 1,
    b = 1.9,
    c = "data",
    d = [1,2,3],
    e = {"a":1, "b":2},
    f = true,
    g = false;
console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(e), typeof(f), typeof(g));


null, undefined, NaN
console.log(null); // 값이 없음을 지정
console.log(undefined); // 값이 지정되지 않음
console.log(NaN); // 존재하지 않는 데이터 형태
var a = null,
    b,
    c = 0/0;
console.log(a, b, c);


비교 연산자

== 값을 비교
console.log(1==1);
console.log(1=='1');
===은 데이터 타입까지 비교해준다.
===로 쓰는것을 권한다.
console.log(1===1);
console.log(1==='1');

! 값을 비교
console.log(1!=1);
console.log(1!='1');
데이터 타입까지 비교
console.log(1!==1);
console.log(1!=='1');

console.log(1>2);
console.log(1<2);
console.log(1>=1);
console.log(1<=2);

NaN은 비교연산으로 사용되지 않는다.
비교연산에서 어느 한쪽이 NaN이면 무조건 false
console.log(NaN===NaN);


할당 연산자
var a = 1;
a += 2;
console.log(a);
a -= 1;
console.log(a);
a *= 6;
console.log(a);
a /= 2;
console.log(a);
a %= 5;
console.log(a);


논리 연산자

&& : 모두 참일때 참 (and)
console.log(true && true);
console.log(true && false);
console.log(false && false);

|| : 하나라도 참이면 참 (or)
console.log(true || true);
console.log(true || false);
console.log(false || false);















document.getElementById("ds1").innerHTML = "Hello Javascript!";
