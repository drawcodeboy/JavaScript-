//HTTP
//Hypertext Transfer Protocol

//AJAX
//Asynchronous JavaScript And XML
//웹페이지에서 동적으로 서버에게 데이터를 주고 받는 기술

//XHR
//XMLHttpRequest
//browser api에서 제공하는 오브젝트 중 하나
//서버에게 데이터를 요청하고 받아올 수 있다

//XML
//HTML과 같이 Markup 언어 중 하나
//불필요한 태그들이 많이 사용됨
//파일 사이즈도 커지고, 가독성이 떨어짐
// >> JSON을 많이 사용

//브라우저에서 데이터를 주고 받을 때
//XHR(XMLHttpRequest) 혹은 fetch() API를 사용

//JSON
//JavaScript Object Notation
//simplest data interchange format
//lightweight text-based structure
//easy to read
//key-value pairs
//used for serialization and transmission of data between
//the network the network connection
//independent programming language and platform

//object를 어떻게 string으로 serialize를 하는가
//serialize된 json을 어떻게 deserialize를 통해 object로 변환할 것인지

// 1. object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);
// 일반적으로 console.log(배열)의 형태를 띄지만
// json의 규격사항을 띄고있다.

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //console.log에 포함되지 않음
    //symbol: Symbol("id"),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
    // 객체의 메소드를 arrow function으로 선언할 경우
    //this는 전역객체를 가리키기 때문에 window가 출력된다.
    jump2(){
        console.log(`${this.name} can jump!`);
    }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
    // key가 name을 만나면 ellie를 집어넣도록 한다.
});
console.log(json);

// 2. JSON to object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

rabbit.jump(); // arrow function으로 선언해서 this가 가리키는 전역객체가 되어 이름이 나타나지 않았다.

rabbit.jump2();
//obj.jump2();
//rabbit이라는 object를 json으로 변환할 때는 함수가
//serialize되지가 않았다.
//>> 그래서 obj라는 object에는 jump2라는 메소드가 없다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// >> obj는 한 번 JSON으로 stringify되고 나서 다시 한 번
// parse를 통해 object가 되었다.
// >> date는 string의 형태로 돌아오게 되어
// 에러가 뜨게 된다.
// JSON의 parse 메소드에 optional의 콜백함수로 key가 birthDate를
// 만나게 되었을 때 new Date로 다시 birthDate를 잡도록
// request한다.

/**
 * JSON Diff checker: http://www.jsondiff.com/
JSON Beautifier/editor: https://jsonbeautifier.org/
JSON Parser: https://jsonparser.org/
JSON Validator: https://tools.learningcontainer.com/j...
 */