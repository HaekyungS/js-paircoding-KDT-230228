const YH = {
  createElement: function createElement(tagName, target, attri, attriValue) {
    const element = document.createElement(tagName);
    target.appendChild(element);
    if (attri !== undefined) {
      element.setAttribute(attri, attriValue);
    }//만약 attri에 값이 있다면 setAttribute를 실행하라 설정했습니다~
  },
  scaleStyle: function scaleStyle(target) {
    document.getElementById(target).style.width = '100%'
    document.getElementById(target).style.height = '33%'
  }
}

//div#root 생성 및 스타일
YH.createElement('div', document.body, 'id', 'root');
const root = document.getElementById('root');
root.style.cssText = "width:430px; height:932px; display:flex; flex-direction:column; justify-content:center; align-items:center"

//반복문으로 3개의 아이디 및 해당 아이디들의 스타일 부여
for (i = 0; i < 3; i++) {
  YH.createElement('div', root, 'id', '');
  if (i === 0) {
    root.children[i].id = 'header';
    header.style.cssText = "display:inherit; justify-content:center; align-items:flex-end";
    YH.scaleStyle('header');
    //cssText는 전체적인 적용이다보니, scale보다 뒤에 위치하면 scale 적용된게 사라져서 앞쪽으로 위치해두었어요!
  } else if (i === 1) {
    root.children[i].id = 'main';
    main.style.cssText = "display:inherit; justify-content:center; align-items:flex-start"
    YH.scaleStyle('main');
  } else if (i === 2) {
    root.children[i].id = 'footer';
    footer.style.cssText = "display:inhert; justify-content:center;"
    YH.scaleStyle('footer');
  }
}

// YH.scaleStyle('header');
// YH.scaleStyle('main');
// YH.scaleStyle('footer');
// if 문에 직접적으로 넣었습니다~

//header 안에 p태그 
YH.createElement('p', document.getElementById('header'));

const title = header.children[0];
title.innerText = "Lorem Ipsum";
title.style.cssText = "font-family:'Inter'; font-weight:400; font-size:24px; padding:1rem"

//main안에 p태그
YH.createElement('p', main);
const mainText = main.children[0];
mainText.style.cssText = "width:295px; height:186px; font-size:12px; font-family:'Inter'; font-weight:400;";
mainText.innerText = '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, debitis aut ex architecto iure similique veritatis esse eum! Iusto asperiores laboriosam aperiam fugit numquam, soluta ex debitis nesciunt. Repellendus error quos beatae fugit. Reiciendis consequatur, recusandae voluptatum maiores sunt eius quia inventore, sed cum nobis, a odio. Dolores quod aliquid dicta molestias modi veniam eaque quasi nobis unde delectus ipsa, quis ipsum in recusandae expedita fuga voluptates ea tempore eius magni id quibusdam culpa sed.';


//footer안에 div
YH.createElement('div', document.getElementById('footer'), 'class', 'circle');
const circle = document.getElementsByClassName("circle");
circle[0].style.cssText = "width:82px; height:82px; border-radius:5rem; margin:auto;"