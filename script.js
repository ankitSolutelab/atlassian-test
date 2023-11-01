console.log("Hello Jira")

fetch('https://ankitg1.atlassian.net/rest/api/3/project/KYRT', {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ankit.g@solutelabs.com:ATCTT3xFfGN0jkLv8ZJEvjrUs0YSdpvIdO2-gmH6o1zlQniZBqoIBiyKqU3I4lSXHqFOim8ICuqyZZjxnJVJjX3DPhggP2waud9AY7eKFiC42Aj5l43cYZIhUkmM-IZp1z659Q4SI13qhpQ9k4KfdiSxW5q3iCTv24rOCof8vaXNo5-DPvlwsmI=02514DE7',
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));
