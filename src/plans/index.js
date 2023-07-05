const fs = require('fs');

const data = {};

for (let i = 1; i <= 10; i++) {
  data[i.toString()] = {
    devocional: [
      {
        titulo: '',
        versiculo: '',
        texto: ''
      }
    ],
    biblia: [
      {
        referencia: '',
        texto: ''
      }
    ]
  };
}

const jsonData = JSON.stringify(data, null, 2);

fs.writeFile('apocalipsepj.json', jsonData, (err) => {
  if (err) throw err;
  console.log('Arquivo JSON criado com sucesso!');
});


const fs = require('fs');

//const data = {};

for (let i = 1; i <= 22; i++) {
  data[i.toString()] = {
    "audio": "",
    "caption": ""
  };
}

//const jsonData = JSON.stringify(data, null, 2);

fs.writeFile('apocalipsepj.json', jsonData, (err) => {
  if (err) throw err;
  console.log('Arquivo JSON criado com sucesso!');
});
