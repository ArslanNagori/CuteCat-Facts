async function catFacts(){
    try{
        const fact = await axios.get('https://catfact.ninja/fact')
        return fact.data.fact;
    }
    catch(error) {
        return 'Cat fact not found';
    }
  }

catFacts();