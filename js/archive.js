let archiveContainer = document.querySelector('.archive__container');

window.addEventListener('load', async function () {
  let url = 'https://www.itsrussiaforum.ru/api/archive.json'
  let response = await fetch(url)
  let json = await response.json();
  let yearsArr = [] //Массив под года 


  for (let i = 0; i < json.length; i++) {
    yearsArr.push(json[i].YEAR)
    yearsArr = [...new Set(yearsArr)]; // Избавляемся от повторяющихся чисел 


    let a = document.createElement('a'); //Создаем DOM
    a.href = json[i].LINK;  //Добавляем ссылку
    a.className = 'archive__item'; // Добавляем класс
    a.textContent = json[i].NAME; // Добавляем контент 
    
  }


  for (let i = 0; i < yearsArr.length; i++) {
    let div = document.createElement('div');
    div.className = `archive__box`;
    div.dataset.year = yearsArr[i];
    archiveContainer.appendChild(div)//создаем контейнеры для ссылок

    for (let j = 0; j < json.length; j++) {
      if (div.dataset.year == json[j].YEAR) {
        let a = document.createElement('a');
        a.href = json[j].LINK;
        a.className = 'archive__item'
        a.textContent = json[j].NAME;
        div.appendChild(a)
      }
    }
  }
})

