let btn = document.querySelector("button");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let color4 = document.querySelector(".color4");
let colorCode1 = document.querySelector("#id1");
let colorCode2 = document.querySelector("#id2");
let colorCode3 = document.querySelector("#id3");
let colorCode4 = document.querySelector("#id4");
let titleContainer = document.querySelector(".title_container");
let color_container = document.querySelector(".color_container");

let colorString1 = "#";
let colorString2 = "#";
let colorString3 = "#";
let colorString4 = "#";

const generateColor1 = () => {
  for (let i = 0; i < 6; i++) {
    let code = Math.floor(Math.random() * 6);
    colorString1 = colorString1 + code;
  }
  color1.style.backgroundColor = colorString1;

  colorCode1.innerText = colorString1;
  colorString1 = colorString1.split("");
  let String1 = colorString1[0];
  colorString1 = String1;
};
const generateColor2 = () => {
  for (let i = 0; i < 6; i++) {
    let code = Math.floor(Math.random() * 6);
    colorString2 = colorString2 + code;
  }
  color2.style.backgroundColor = colorString2;
  colorCode2.innerText = colorString2;
  colorString2 = colorString2.split("");
  let String2 = colorString2[0];
  colorString2 = String2;
};
const generateColor3 = () => {
  for (let i = 0; i < 6; i++) {
    let code = Math.floor(Math.random() * 6);
    colorString3 = colorString3 + code;
  }
  color3.style.backgroundColor = colorString3;
  colorCode3.innerText = colorString3;
  colorString3 = colorString3.split("");
  let String3 = colorString3[0];
  colorString3 = String3;
};
const generateColor4 = () => {
  for (let i = 0; i < 6; i++) {
    let code = Math.floor(Math.random() * 6);
    colorString4 = colorString4 + code;
  }
  color4.style.backgroundColor = colorString4;
  // btn.style.backgroundColor = colorString4;
  colorCode4.innerText = colorString4;

  colorString4 = colorString4.split("");
  let String4 = colorString4[0];
  colorString4 = String4;
};

color_container.addEventListener("click",()=>{
  if(colorCode1.innerText.length > 0 && colorCode2.innerText.length > 0 && colorCode3.innerText.length > 0 && colorCode4.innerText.length > 0)
  {
    let textTocopy = `--primary1:${colorCode1.innerText}; --primary2:${colorCode2.innerText}; --primary3:${colorCode3.innerText}; --primary4:${colorCode4.innerText};`;
    navigator.clipboard.writeText(textTocopy).then(()=>{
      alert("Copied to cliboard");
    }).catch(()=>{
      alert("Not Copy");
    })
  }
})

//Problem  //Done
//Add all in one

btn.addEventListener("click",()=>{
  generateColor1();
  generateColor2();
  generateColor3();
  generateColor4();
})


