const fs = require("fs");
// WRITE FILE
const writeFile = () => {
  fs.writeFile(
    "employee.json",
    '{ " name": "Employee 1 Name", "salary": 2000}',
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("Added file!!");
    }
  );
};
//READ FILE
const readFile = () => {
  fs.readFile("employee.json", "utf-8", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("file read!!");
  });
};
//UPDATE FILE
const appendFile = () => {
  fs.appendFile(
    "employee.json",
    '\n{" name":  "Employee 2 Name", "salary": 5000}',
    "utf-8",
    (err) => {
      if (err) console.log(err);
      console.log("File updated!!");
    }
  );
};
//DELETE FILE
const unlike = () => {
  fs.unlink("employee.json", (err) => {
    if (err) console.log(err);
    console.log("File deleted!!");
  });
};
