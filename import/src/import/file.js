function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  console.log('get use ful')
  getJSON(url, data => callback(JSON.parse(data)));
}


export function a(){
  return 1;
}