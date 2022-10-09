// TODO: tampilkan teks pada notes.txt pada console.
const fs = require("fs");

const fsCallback = (err, data) => {
  if (err) {
    console.log(`${err}`);
    return;
  }
  console.log(data);
};

fs.readFile("note11s.txt", "utf-8", fsCallback);
