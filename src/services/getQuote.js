export const getQuotes = (count = 3) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch quote';

      return json;
    });
};
