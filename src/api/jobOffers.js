const fetchJobOffers = async () => {
   const response = await fetch('https://training.nerdbord.io/api/v1/joboard/offers');
   const data = await response.json();
   return data;
};

export default fetchJobOffers;
