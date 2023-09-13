const name = 'Denys';
const age = 16;

console.log(name);
console.log(age);
console.log(`Siema drogi odwiedzający nazywam się ${name} i mam ${age} lat`);

const heading = document.querySelector('.main-heading--js');
console.log(heading);

const homework = document.querySelector('.homework--title');

homework.innerHTML = 'Gdzie się uczę.';

const homeworkdes = document.querySelector('.homework--description');

homeworkdes.innerHTML = 'Uczę się w mieście Sopot w Technikum o nazwie Zespół Szkół Technicznych w Sopocie w 3 klasie';