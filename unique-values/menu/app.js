//Unique Value
const menu = [
    {
      name: 'A',
      category: 'Novel',
    },
    {
      name: 'B',
      category: 'Comics',
    },
    {
      name: 'C',
      category: 'Novel',
    },
    {
      name: 'D',
      category: 'History',
    },
    {
      name: 'E',
      category: 'Comics',
    },
    {
      name: 'F',
      category: 'Biography',
    },
  ];
  

  const categories = ['All', ... new Set(menu.map((item)=>item.category))];
  console.log(categories);
  const result = document.querySelector('.result');
  result.innerHTML = categories.map((category)=>{
      return `<button>${category}</button>`
  }).join('');
 