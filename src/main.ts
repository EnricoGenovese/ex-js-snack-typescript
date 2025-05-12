// Snack 1

// Dato ricevuto da API

let data: unknown;

switch (typeof data) {
  case 'string':
    console.log(data.toUpperCase());
    break;
  case 'number':
    console.log(data * 2);
    break;
  case 'boolean':
    if (data === true) {
      console.log('Sì')
    } else {
      console.log('No')
    }
    break;
  default:
    console.log('Tipo non supportato')
  }

