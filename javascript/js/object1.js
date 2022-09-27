const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");


// button.addEventListener("click", () => {
// }, true);//true: 버블링 허용? 캡처링? 

/*
Array 사용, 검사하기를 눌렀을 때 
모든 input에 값이 입력되어 있어야만 검사완료 메세지를 보여준다.

만약 하나라도 입력되어 있지 않으면 순서대로 "n번이 입력되지 않았습니다."를 메세지 출력.
*/

let array = [false, false, false, false, false];
// 안 좋은 코드?
// button.onclick = () => {
//   for(let i=0; i<inputs.length; i++){
//     if (inputs[i].value == ""){
//       array[i] = false;
//       alert(i+1 + "번이 입력되지 않았습니다.");
//     }else {
//       array[i] = true;
//     }
//   }
//   // every 모든 인자가 만족(true)일 때, true를 반환, 하나라도 불만족이면 false 반환
//   // some 모든 인자 중 하나라도 만족(true)이면 true를 반환, 모두 불만족이면 false 반환
//   if (array.every((v)=> v == true)){
//     alert("검사완료");
//   }
// }

let inputObject = new Array();

button.onclick = () => {
  inputs.forEach((input, index) => {

    let inputObj = {
      value: input.value,
      placeholder: input.placeholder,
      print: () => {
        console.log(inputObj.placeholder + "print 메소드 실행");
      }
    }
    inputObject.push(inputObj);


    array[index] = !inputIsEmpty(input.value);
  });
 console.log(inputObject);
  if(array.includes(false)){
    for (let i = 0; i< array.length; i++){
      if(!array[i]){
        alert(inputs[i].placeholder + "이 입력되지 않았습니다.");
        break;
      }
    }
    // array.forEach((value, index) => {
    //   if(!value){
    //     alert(inputs[index].placeholder + "이 입력되지 않았습니다.");
    //     return;
    //   }
    // });
  }else{
    alert("검사 완료");
  }
}
function inputIsEmpty(str) { // 함수명에 맞게 동작해야 클린 코드
  return str == null || str == "" || str == undefined;
}