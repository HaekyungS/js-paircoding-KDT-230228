const afternoon = new Date().getHours()
if (afternoon>18 && afternoon<6) {
const YH = {
  createElement : function createElement(tagName, attri, attriValue, target) {
    const element = document.createElement(tagName);
    element.setAttribute(attri, attriValue);
    target.appendChild(element);
  },
  scaleStyle : function scaleStyle(target) {
    document.getElementById(target).style.width = '100%'
    document.getElementById(target).style.height = '33%'
  }
}

/*-------------------- root생성 -----------------------*/
YH.createElement('div', 'id', 'root', document.body);
const root = document.getElementById('root');
// ------------------------------------------------------



/*--------------- root 스타일 지정 --------------------*/
root.style.width = '430px';
root.style.height = '932px';
root.style.backgroundColor = '#383838';
root.style.display = 'flex';
root.style.flexDirection = 'column';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';
// ------------------------------------------------------



/* -----------------div 3개 생성 ----------------------*/
for (i=0; i<3; i++) {
  YH.createElement('div','id','',root);
  if (i===0) {
    root.children[i].id='header'
  } else if (i===1) {
    root.children[i].id='main'
  } else if (i===2) {
    root.children[i].id='footer'
  }
}
// ------------------------------------------------------



/*-------------- root 하위 div 크기 지정 ---------------*/
YH.scaleStyle('header');
YH.scaleStyle('main');
YH.scaleStyle('footer');
// ------------------------------------------------------



/*----------------------- 헤더 -------------------------*/
// 헤더 스타일
const header = document.getElementById('header');
header.style.display = "inherit";
header.style.justifyContent = "center";
header.style.alignItems = "flex-end";

// p태그 생성
YH.createElement('p','class','',document.getElementById('header'));

// title 내용
const title = header.children[0];
title.innerText = 'Lorem Ipsum';

// 글씨 스타일 
title.style.color = 'white';
title.style.fontSize = '24px';
title.style.fontFamily = 'Inter';
title.style.fontWeight = '400';
title.style.padding = '1rem';
title.style.borderBottom = "2px solid white";
// ------------------------------------------------------




/*----------------------메인 -------------------------*/
// 메인 변수 선언
const main = document.getElementById('main');
// 메인 스타일
main.style.display = "inherit";
main.style.justifyContent = "center";
main.style.alignItems = "flex-start";

// p태그 생성
YH.createElement('p','class','',main);

// 메인 본문 텍스트
const mainText = main.children[0]
mainText.innerText = '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, debitis aut ex architecto iure similique veritatis esse eum! Iusto asperiores laboriosam aperiam fugit numquam, soluta ex debitis nesciunt. Repellendus error quos beatae fugit. Reiciendis consequatur, recusandae voluptatum maiores sunt eius quia inventore, sed cum nobis, a odio. Dolores quod aliquid dicta molestias modi veniam eaque quasi nobis unde delectus ipsa, quis ipsum in recusandae expedita fuga voluptates ea tempore eius magni id quibusdam culpa sed.'

// 메인 글씨 스타일
mainText.style.width = '295px';
mainText.style.height = '186px';
mainText.style.color = 'white';
mainText.style.fontSize = '12px';
// ------------------------------------------------------




/*----------------------푸터 --------------------------*/
const footer = document.getElementById('footer');
footer.style.display="inherit";
footer.style.justifyContent="center";

// 원 생성
YH.createElement('div','class','circle',document.getElementById('footer'));
const circle = document.getElementById('footer').children[0];
circle.style.width='82px';
circle.style.height='82px';
circle.style.backgroundColor='white';
circle.style.borderRadius='5rem';
// ------------------------------------------------------
}