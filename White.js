
const trainingData = {
  title: "Lorem Ipsum",
  paragraph: "Lorem Ipsum",
  color: ["#1E1E1E", "#FFFFFF"]
}

const root = document.createElement("div")
root.setAttribute("id","root")
root.style.cssText = "width:430px; height:932px; background-color:" + trainingData.color[1] + "; display:flex; flex-direction:column; justify-content:center; padding:auto"
// root.style.alignContent="center"
document.body.appendChild(root)

for(i=0;i<3;i++){
  const divs=document.createElement("div")
  if(i===0){
    divs.innerHTML=trainingData.title;
    divs.style.cssText="width:199px; height:340px; border-bottom:2px solid #000000; position:absolute; top:340px; font-family:'Inter'; font-weight:400; font-size:24px"
  }else if(i===1){
    divs.innerHTML=trainingData.paragraph
    divs.style.cssText="width:295px; height:186px; font-family:'Inter'; font-weight:400; font-size:12px"
  }else{
    divs.style.cssText="width:82px; height:82px; background-color:"+trainingData.color[0]+"; border-radius:41px; position:absolute; left:174px; top:673px"
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

