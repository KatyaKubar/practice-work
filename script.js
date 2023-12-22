/*
Проблема полягає в тому, що ви використовуєте map для ітерації по users, але users на цей момент представляє собою Promise (об'єкт обіцянки), 
оскільки ви використовуєте fetch, який повертає Promise. Поки що дані ще не завантажені, і ви намагаєтеся викликати map на об'єкті Promise, 
що не працює.
Для вирішення цього ви можете використовувати метод map після завершення Promise, використовуючи then або асинхронну функцію.
Ось приклад з використанням then:
*/

/*let users;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => {
    users = json;
    users.map((user) => console.log(user));
  });*/

  
let users = [];

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => (users = json))
    .then(() => users.map((user) => console.log(user)));
/* код створює пустий array users, а потім використовує .then(), щоб обробити результат операції fetch(). 
Якщо операція успішна, то json буде містити масив об'єктів користувачів. Ці об'єкти потім будуть скопійовані в array users. 
Нарешті, users буде відтворено за допомогою .map().
Цей код має ту ж саму поведінку, що і модифікований код вище. 
Він також забезпечує більшу чіткість, оскільки він чітко визначає, що array users буде порожнім, поки операція fetch() не буде завершена.*/