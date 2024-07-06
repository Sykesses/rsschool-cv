const me = {
  firstName: "Ivan",
  lastName: "Mikitka",
  age: 24,
  location: "Batumi, Georgia",
};
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python"];
function greet(aboutMe, mySkills) {
  console.log(`My name, ${aboutMe.firstName}!`);
  console.log(`My lastname, ${aboutMe.lastName}!`);
  console.log(`I'm ${aboutMe.age} old`);
  console.log(`At currently moment I'm live in ${aboutMe.location}`);
  console.log(`My skills are:`);
  mySkills.forEach((skill) => console.log(skill));
}
greet(me, skills);
