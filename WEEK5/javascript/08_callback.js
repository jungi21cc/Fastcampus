// 콜백
// 함수내에서 모든 동작이 끝나고 실행시키는 함수를 파라미터로 넘겨서 사용하는 방법
// 웹에서 비동기 통신을 할때 많이 사용됨

function add(a, b, callback){
    var result = a + b;
    callback(result);
}

function disp(data){
    console.log(data);
}

add(5, 8, disp);
