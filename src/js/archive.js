let archiveContainer = document.querySelector('.archive__container');

window.addEventListener('load', async function () {
  let url = './files/archive.json'
  let response = await fetch(url)
  let json = await response.json();
  let yearsArr = [] //Массив под года 
  for (let i = 0; i < json.length; i++) {
    yearsArr.push(json[i].YEAR)
  } //Добавляем все года в массив
  yearsArr = [...new Set(yearsArr)]; // Избавляемся от повторяющихся чисел 

  yearsArr.forEach(el => {
    let div = document.createElement('div');
    div.className = `archive__box archive__box_${el}`;
    archiveContainer.appendChild(div)
  }) //создаем контейнеры для ссылок

  let archiveBox = document.querySelectorAll('.archive__box');

  for (let i = 0; i < archiveBox.length; i++) {
    for (let j = 0; j < json.length; j++) {
      if (archiveBox[i].classList[1].slice(-4) == json[j].YEAR) {
        console.log(json[j].YEAR)
        let a = document.createElement('a');
        a.href = json[j].LINK;
        a.className = 'archive__item'
        a.textContent = json[j].NAME;
        archiveBox[i].appendChild(a)
      }
    }
  }// Добавляем ссылки по году
})
