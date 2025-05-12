// Snack 1

// Dato ricevuto da API

let data: unknown;


switch (typeof data) { // i casi dello switch si basano sul tipo del dato ricevuto e non sul dato stesso
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
  case 'object':
    if (Array.isArray(data)) { // o anche come sotto: data instanceof Array
      console.log(data.length)
    } else if (data instanceof Promise) {
      data.then((res: unknown) => console.log(res))
    } else {
      console.log(data); // nel caso di un oggetto letterale? 
    }
    break;
  //
  default:
    if (data === null) {
      console.log('Il dato è vuoto'); // 'null' non è supportato in uno switch, ma nel case default funziona
    } else
      console.log('Tipo non supportato');
}


// Snack 2

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: 'f' | 'm',
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: 'indeterminato' | 'determinato' | 'freelance'
};

type Developer = Dipendente & {
  livelloEsperienza: 'Junior' | 'Mid' | 'Senior',
  linguaggi?: string[],
  certificazioni: [...string[]]
};

type ProjectManager = Dipendente & {
  teamSize: number | null,
  bugdetGestito?: string, // penso il dato arriverà ad esempio '10000€'
  stakeholderPrincipali: [...string[]];
};