const YH = {
  createElement: function createElement(tagName, attri, attriValue, target) {
    const element = document.createElement(tagName);
    element.setAttribute(attri, attriValue);
    target.appendChild(element);
  },
  scaleStyle: function scaleStyle(target) {
    document.getElementById(target).style.width = '100%'
    document.getElementById(target).style.height = '33%'
  }
}//setAtrribute 가 값이 없을 때는 어쩔지 추가하면 좋을 듯합니다~

YH.createElement('div', 'id', 'root', document.body);
const root = document.getElementById('root');
root.style.cssText = "width:430px; height:932px; display:flex; flex-direction:column; justify-content:center; align-items:center"

for (i = 0; i < 3; i++) {
  YH.createElement('div', 'id', '', root);
  if (i === 0) {
    root.children[i].id = 'header';
    header.style.cssText = "display:inherit; justify-content:center; align-items:flex-end";
    YH.scaleStyle('header');
  } else if (i === 1) {
    root.children[i].id = 'main';
    main.style.cssText = "display:inherit; justify-content:center; align-items:flex-start"
    YH.scaleStyle('main');
  } else if (i === 2) {
    root.children[i].id = 'footer';
    footer.style.cssText = "display:inhert; justify-content:center"
    YH.scaleStyle('footer');
  }
}

// YH.scaleStyle('header');
// YH.scaleStyle('main');
// YH.scaleStyle('footer');
// if 문에 직접적으로 넣어 봄.

YH.createElement('p', 'class', '', document.getElementById('header'));

const title = header.children[0];
title.innerText = "Lorem Ipsum";
title.style.cssText = "font-family:'Inter'; font-weight:400; font-size:24px; padding:1rem"

YH.createElement('p', 'class', '', main);

const mainText = main.children[0];
mainText.innerText = '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, debitis aut ex architecto iure similique veritatis esse eum! Iusto asperiores laboriosam aperiam fugit numquam, soluta ex debitis nesciunt. Repellendus error quos beatae fugit. Reiciendis consequatur, recusandae voluptatum maiores sunt eius quia inventore, sed cum nobis, a odio. Dolores quod aliquid dicta molestias modi veniam eaque quasi nobis unde delectus ipsa, quis ipsum in recusandae expedita fuga voluptates ea tempore eius magni id quibusdam culpa sed.';
mainText.style.cssText = "width:295px; height:186px; font-size:12px";

YH.createElement('div', 'class', 'circle', document.getElementById('footer'));
const circle = document.getElementsByClassName("circle");
circle[0].style.cssText = "width:82px; height:82px; border-radius:5rem"