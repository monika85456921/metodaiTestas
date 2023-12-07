const zodziuMas1 = ["pirmas", "antras", "trecias"];
const zodziuMas2 = ["ketvirtas", "penktas", "sestas"];
//1 var
const sujungtasMas1 = zodziuMas1.concat(zodziuMas2);
console.log(sujungtasMas1.toString());

//2 var

let sujungtasMas2 = [...zodziuMas2, ...zodziuMas1];
console.log(sujungtasMas2.toString());

// https://www.freecodecamp.org/news/how-to-merge-arrays-in-javascript-array-concatenation-in-js/#:~:text=You%20use%20the%20concat%20method,objects%2C%20or%20even%2C%20arrays.&text=As%20you%20can%20see%2C%20the,new%20array%20assigned%20to%20merged%20.

const zodziai = ["devinta", "valanda", "labas", "rytas", "ruduo"];