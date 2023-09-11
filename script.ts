interface DataItem {
    category: string;
    score: number;
    icon: string;
  }
  
  // Fetch data.json
  fetch('./data.json')
    .then(response => response.json())
    .then((data: DataItem[]) => {
      const dataContainer = document.getElementById('data-container');
  
      data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('data-item');
  
        itemElement.innerHTML = `
          <div class="data-item__category">${item.category}</div>
          <div class="data-item__score">${item.score}</div>
          <img class="data-item__icon" src="${item.icon}" alt="${item.category} Icon">
        `;
  
        if (item.score >= 80) {
          itemElement.classList.add('data-item--high-score');
        }
  
        dataContainer?.appendChild(itemElement);
      });
    })
    .catch(error => console.error('Error fetching data:', error));  