let archiveContainer = document.querySelector('.archive__container');

function addItemBlock(item, block) { // Cоздаем функцию 
  let a = document.createElement('a'); 
  a.href = item.LINK;
  a.className = 'archive__item'
  a.textContent = item.NAME;

  if(item.TYPE == 'Federal'){ // добавление  вначало или конец блока в зависимости от типа
    block.prepend(a) 
  }else{
    block.append(a)
  }
}

window.addEventListener('load', async function () {
  let url = 'https://www.itsrussiaforum.ru/api/archive.json'
  let response = await fetch(url)
  let json = await response.json();

  for (let i = 0; i < json.length; i++) {

    let item = json[i];

    let currentBlock = archiveContainer.querySelector(`[data-year="${item.YEAR}"]`); // ищем внутри контейнера блок с data-year, равным году текущего элемента


    if (currentBlock) {
      addItemBlock(item, currentBlock)
    } else {
      let newBlock = document.createElement('div');
      newBlock.className = 'archive__box';
      newBlock.dataset.year = item.YEAR;
      addItemBlock(item, newBlock);
      archiveContainer.appendChild(newBlock) //создаем контейнеры для ссылок
    }
  }
})