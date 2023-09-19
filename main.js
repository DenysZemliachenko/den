const name = "Denys";
const age = 16;

console.log(name);
console.log(age);


const homework = document.querySelector(".homework--title");

homework.innerHTML = "Gdzie się uczę.";

const homeworkdes = document.querySelector(".homework--description");

homeworkdes.innerHTML =
  "Uczę się w mieście Sopot w Technikum o nazwie Zespół Szkół Technicznych w Sopocie w 3 klasie";

  function calculate(myNumber) {
    
    return myNumber*7;
  }
  const myResult = calculate(1);

  console.log(myResult);

  const button = document.querySelector('.action--js');

  console.log(button)

  const myClick = () => {
    const heading = document.querySelector(".main__heading--js");
    heading.classList.toggle('klasa-z-js');
  }

  button.addEventListener('click', myClick);
