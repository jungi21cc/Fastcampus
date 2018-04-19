// 객체

// 객체 생성
var obj = {};
obj.math = 92;
obj.english = 97;
obj.science = 85;
// console.log(obj);
// console.log(obj.english);

// 객체 출력
// for(var key in obj){
//     console.log(key, obj[key]);
// }

// 객체에 함수 담기
// Object.keys : 객체의 키값 리스트로 가져오기
// toFixed(number) : 반올림해서 number 자리수까지 출력
var points = {
    'points':{'math': 91, 'science': 98, 'english': 86},
    'total': function(){
        var total = 0;
        for(var key in this.points){
            total += this.points[key];
        }
        return total;
    },
    'avg': function(){
        return this.total() / Object.keys(this.points).length;
    }
};

console.log(points.total());
console.log(points.avg());
console.log(points.avg().toFixed(2));
