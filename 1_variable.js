//1. 'use strict'
// added in ES4
//use this for VanilaScript
//VanilaScript is 'Pure JavaScript use no framework'

'use strict';

//2. Variable rw(read and write)
//let (added in ES6)

let globalName = 'global name';
{
    let name = 'draw';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no blockscope
console.log(age);
age = 4;
console.log(age);
var age;
//has no blockscope
{
    name = 5;
    var name;
}
console.log(name);

//3. Constant r(read only)
//favor immutable data type always for a few reasons:
//-security
//-thread safety
//-reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//NOTE
//Immutable data types: primitive types, frozen objects (i.e. object.freeze())
//mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
//-security
//-thread safety
//-reduce human mistakes

//4. Variable types
//primitive, single item: number,string, boolean, null, undefined, symbal
//object, box container
//function, first-class function >> function도 변수에 할당이 가능

const count = 17; //integer
const size = 1.7; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
//>>똑같은 number(int,float)로 인식

//number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nan = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nan);

//bigInt (fairly ew, don't use it yet)
const bigInt = 123456789012345678901234567890n; //over(-2^53)~(2^53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char='c';
const brendan='brendan';
const greeting='hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob=`hi ${brendan}!`; //templete literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

//Boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;//== let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);//symbol1이랑 symbol2가 같은가? >> false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);//gSymbol1이랑 gSymbol의 string이 같다면 똑같은 symbol로 만들어줘 >> true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);//symbol출력 할 때 description쓰기

//object, real-life object, data structure
const boy = {name: 'james', age: 20};
//boy는 const로 지정되어있어서 다른 object로 변경 불가능
//object 안에는 변수로 지정 되어있어서 변경 가능
boy.name = 'dean';
console.log(`value: ${boy.name}, type: ${typeof boy.name}`);

//5. Dynamic typing: dynamically typed language
//C or Java => Statically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type:${typeof text}`);
text = 1;
console.log(`value: ${text}, type:${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type:${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type:${typeof text}`);
console.log(text.charAt(0));
//>>이런 복잡한 점을 보완하기 위해서 나온 것이 TS(TypeScript)