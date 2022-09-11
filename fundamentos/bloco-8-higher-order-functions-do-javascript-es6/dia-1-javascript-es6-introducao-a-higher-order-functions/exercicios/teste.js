const user = {
    id:1,
    name: "debora",
    age: 25,
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const user2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom',
}


user.lastName = 'Franchi';
user2.name = 'Maria';
user2.lastName = 'Silva';
user2.id = 2;
user2.age = 20;

const listSkillsValuesWithFot = (user) => {
    const skills = [];
    for(skill in user){
        skills.push(user[skill]);
    }
    return skills;
}
const listSkillsValuesWithValues = (user) => Object.values(user);
console.log(listSkillsValuesWithFot(user))
console.log(listSkillsValuesWithValues(user))
const clone = Object.assign(user, user2);
console.log(clone);
console.log(user);

// const listSkills = (user) => {
//     const arratOfSkills = Object.keys(user);
//     for(const index in arratOfSkills){
//         console.log(`${arratOfSkills[index]}, Nivel: ${user[arratOfSkills[index]]}`);
//     }
// }



