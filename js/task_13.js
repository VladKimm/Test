function result (radius){
    var circle = {
        square : function (){
            return Math.PI * Math.pow(radius, 2)
        },
        length : function (){
            return Math.PI * 2 * radius;
        }
    };
    return [circle.square(),circle.length()];
}
 
var answer = result (2);
console.log (answer);