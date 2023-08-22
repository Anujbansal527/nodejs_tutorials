const bioData = {
    namr:"anuj",
    age:23,
    channel:"anujbansalxy"
};
//data in the form of array object
console.log(bioData);

//converting object into jason data
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//converting json data into object
const objData=JSON.parse(jsonData);

console.log(objData);

