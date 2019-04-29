import DemoPage from "../DemoPage";

export const retrieveThing = (demoPage: DemoPage) => {
  let randomTodoNumber = Math.floor(Math.random() * 10) + 1;
  return fetch("https://jsonplaceholder.typicode.com/todos/" + randomTodoNumber)
    .then(response => response.json())
    .then(json => {
      let t = { ...{ o: 1 }, ...json };
      console.log(t);
      demoPage.sData1 = { ...demoPage.sData1, ...t };
    });
};

export const retrieveThing2 = (demoPage: DemoPage) => {
  let randomTodoNumber = Math.floor(Math.random() * 10) + 1;
  return fetch("https://jsonplaceholder.typicode.com/todos/" + randomTodoNumber)
    .then(response => response.json())
    .then(json => {
      let t = { ...{ o: 2 }, ...json };
      console.log(t);
      demoPage.sData2 = { ...demoPage.sData1, ...t };
    });
};

export const retrieveThing3 = (demoPage: DemoPage) => {
  let randomTodoNumber = Math.floor(Math.random() * 10) + 1;
  return fetch("https://jsonplaceholder.typicode.com/todos/" + randomTodoNumber)
    .then(response => response.json())
    .then(json => {
      let t = { ...{ o: 3 }, ...json };
      console.log(t);
      demoPage.sData3 = { ...demoPage.sData1, ...t };
    });
};

export const retrieveAll = (demoPage: DemoPage) => {
  demoPage.loading = true;
  Promise.all([
    retrieveThing(demoPage),
    retrieveThing2(demoPage),
    retrieveThing3(demoPage)
  ]).then(status => {
    console.log("done");
    demoPage.loading = false;
  });
};
