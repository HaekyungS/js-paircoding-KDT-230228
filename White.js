const morning=new Date().getHours();
if(morning>6&&morning<=18){
const trainingData = {
  title: "Lorem Ipsum",
  paragraph: "",
  color: ["#1E1E1E", "#FFFFFF"]
}

document.body.style.cssText="width:430px; height:932px; background-color:" + trainingData.color[1] + ";"

const root = document.createElement("div")
root.setAttribute("id","root")
root.style.cssText = "width:430px; height:932px; background-color:" + trainingData.color[1] + "; display:flex; flex-direction:column; place-content:center; align-items:center"
document.body.appendChild(root)

for(i=0;i<3;i++){
  const divs=document.createElement("div")
  if(i===0){
    divs.innerHTML=trainingData.title;
    divs.style.cssText="width:199px; height:39px; border-bottom:2px solid #000000; font-family:'Inter'; font-weight:400; font-size:24px; text-align:center"
  }else if(i===1){
    trainingData.paragraph="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, debitis aut ex architecto iure similique veritatis esse eum! Iusto asperiores laboriosam aperiam fugit numquam, soluta ex debitis nesciunt. Repellendus error quos beatae fugit. Reiciendis consequatur, recusandae voluptatum maiores sunt eius quia inventore, sed cum nobis, a odio. Dolores quod aliquid dicta molestias modi veniam eaque quasi nobis unde delectus ipsa, quis ipsum in recusandae expedita fuga voluptates ea tempore eius magni id quibusdam culpa sed.";
    divs.innerHTML=trainingData.paragraph
    divs.style.cssText="width:295px; height:186px; font-family:'Inter'; font-weight:400; font-size:12px; margin-top:22px; margin-bottom:123px;"
  }else{
    divs.style.cssText="width:82px; height:82px; background-color:"+trainingData.color[0]+"; border-radius:41px;"
  }
  root.appendChild(divs)
}


// const CreateTag = {
//   tagName: "",
//   AttriName: "",
//   AttriValue: "",
//   Parent: "",
//   Makers: function () {
//     const element = document.createElement(this.tagName)
//     this.parent.appendChild(element)
//   }
// }
// console.dir(document.body)
// CreateTag.tagName = "div"
// CreateTag.Parent = root
// CreateTag.Makers()

}