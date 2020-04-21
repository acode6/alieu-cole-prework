
alert("JAVASCRIPT ASSESSMENT 3!")
const nameList = [];
nameList.push('Alieu')
nameList.push('Emma')
nameList.push('Bryan')
alert("Current people in the list:");
for (let i = 0; i < nameList.length; i++) {
    var name = nameList[i];
    alert(`Name: ${name}  `);
}

alert("Enter three more names into the list:");

for (i = 0; i < 3; i++) {

    const newName = prompt(`Enter person number ${i + 1}'s name:`);
    nameList.push(newName);

}


alert("Final List:");
for (let i = 0; i < nameList.length; i++) {
    var name = nameList[i];
    alert(`Name: ${name}  `);
}

alert("GOODBYE :)!")