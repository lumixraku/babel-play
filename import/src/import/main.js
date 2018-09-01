import { getUsefulContents, a } from "./file.js";


var log = console.log.bind(console)
log(a);

getUsefulContents("/Babel/src/import/haha.json", data => {
  log(data)
  // doSomethingUseful(data);
});

// export default {}