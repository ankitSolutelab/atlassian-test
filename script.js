console.log("Hello Jira")
const credentials = 'ankit.g@solutelabs.com:ATATT3xFfGF0iUqSOUaaTUGVDWdEjxXCragg-wyoz7Ur2NfPBEsUB3YKX9aH3Mei9dtpQ7tprMQSoIbbsQ5i-YFstpuYZ0zAOUzC6ANdovBOoDa1C-2cMbM3ojMhqizcazV8WJDt1TUXNNCljaSh2AczvG_MNq4yu3q1nlofWwcuXGpBSHE7FJE=E7BB0C08';
const encodedCredentials = btoa(credentials);
console.log(encodedCredentials);
fetch('https://ankitg1.atlassian.net/rest/api/3/project/KYRT', {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Authorization': `Basic ${encodedCredentials}`,
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
