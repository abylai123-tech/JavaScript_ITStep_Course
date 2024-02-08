function generateFields() {
  let profileCount = document.getElementById('profileCount').value;
  let profileForm = document.querySelector('.profile-form');
  let profileCard = document.getElementById('profileCard');

  // Очищаем предыдущие элементы на странице
  profileForm.innerHTML = '';
  
  // Создаем поля для ввода характеристик
  for (let i = 0; i < profileCount; i++) {
    let characteristicInput = document.createElement('input');
    characteristicInput.placeholder = 'Характеристика ' + (i + 1);

    let valueInput = document.createElement('input');
    valueInput.placeholder = 'Значение ' + (i + 1);

    profileForm.appendChild(characteristicInput);
    profileForm.appendChild(valueInput);
  }

  // Создаем кнопку "Сформировать"
  let generateButton = document.createElement('button');
  generateButton.textContent = 'Сформировать';
  generateButton.addEventListener('click', generateProfile);

  profileForm.appendChild(generateButton);
}

function generateProfile() {
  let profileCard = document.getElementById('profileCard');
  let profileForm = document.querySelector('.profile-form');

  // Создаем карточку профиля
  let profileTitle = document.createElement('h2');
  profileTitle.textContent = 'Профиль';

  let profileDetails = document.createElement('div');

  // Получаем все введенные значения характеристик и их значений
  let inputs = profileForm.querySelectorAll('input');
  for (let input of inputs) {
    const label = document.createElement('div');
    label.textContent = input.value;
    profileDetails.appendChild(label);
  }

  // Добавляем элементы на страницу
  profileCard.innerHTML = '';
  profileCard.appendChild(profileTitle);
  profileCard.appendChild(profileDetails);

  // Отображаем карточку профиля
  profileCard.style.display = 'block';
}
