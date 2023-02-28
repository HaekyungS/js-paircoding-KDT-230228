if (time===1) {
  /*-----------상수 선언----------*/
  const root = document.getElementById('root');
  const header = document.getElementById('header');
  const main = document.getElementById('main');
  const footer = document.getElementById('footer');
  const title = header.children[0];
  const mainText = main.children[0]
  const circle = footer.children[0];
  
  /*-----------화이트모드-----------*/
  // root.style.backgroundColor = '#383838';
  
  // 제목 글씨 색상
  title.style.color = 'black';
  
  // 메인 글씨 색상
  mainText.style.color = 'black';
  
  // 버튼 색상
  circle.style.backgroundColor='#5a5a5a';
}