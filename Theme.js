function changeTheme() {
  if (time === 1) {
    /*-----------상수 선언----------*/
    const circle = footer.children[0];
    // 불필요하거나 common과 중복되는 상수선언은 제외하였습니다~
  
    /*-----------화이트모드-----------*/
    root.style.backgroundColor = 'white';
  
    // 제목 글씨 색상
    title.style.color = 'black';
    title.style.borderBottom = "2px solid black";
    // border색상도 테마에 따라 달라져서 이쪽으로 뺐습니다~
  
  
    // 메인 글씨 색상
    mainText.style.color = 'black';
  
    // 버튼 색상
    circle.style.backgroundColor = '#5a5a5a';
  }
  
  if (time === 2) {
    /*-----------상수 선언----------*/
    const circle = footer.children[0];
    // 불필요하거나 common과 중복되는 상수선언은 제외하였습니다~
  
    /*-----------다크모드-----------*/
    root.style.backgroundColor = '#383838';
  
    // 제목 글씨 색상
    title.style.color = 'white';
    title.style.borderBottom = "2px solid white";
    // border색상도 테마에 따라 달라져서 이쪽으로 뺐습니다~
  
    // 메인 글씨 색상
    mainText.style.color = 'white';
  
    // 버튼 색상
    circle.style.backgroundColor = 'white';
  }
}