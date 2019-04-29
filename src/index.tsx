import "./index.css";

import DemoPage from "./Modules/DemoPage/DemoPage";
import { optimizedResize } from "./Utilities/WindowOnResize";
//import Router from "./Components/Router/Router";

import { React, MachineComponent, cx, css, styled, observable } from "./Core";
import { Router } from "./Components/ComponentList";
import JTB from "./Modules/JTB/JTB";
import Lesson from "./Modules/Lesson/Lesson";

class App extends MachineComponent {
  @observable demoPage: DemoPage = new DemoPage();
  @observable jtbInstance: JTB = new JTB();
  @observable lessonInstance: Lesson = new Lesson();

  /*@observable routeParams: Array<string> = [];*/

  constructor() {
    super();
    let resize = optimizedResize();
    resize.add(() => {
      //console.log("resize");
    });
    window["app"] = this;
  }

  render() {
    return (
      <S.Container>
        <Router
          routes={[
            {
              route: "",
              onRouted: () => {},
              render: (
                <div>
                  <div className={S.welcome}>MachineComponent</div>
                  <a href="/?r=demo/bob">Demo Page</a>
                </div>
              )
            },
            {
              route: "demo/bob",
              onRouted: () => {},
              render: (
                <React.Fragment>
                  <div className={S.containerAsClassName}>Example App</div>
                  {this.demoPage && <this.demoPage.render />}
                </React.Fragment>
              )
            },
            {
              route: "lesson",
              onRouted: () => {},
              render: (
                <React.Fragment>
                  {this.lessonInstance && <this.lessonInstance.render />}
                </React.Fragment>
              )
            },
            {
              route: "jtb",
              onRouted: () => {},
              render: (
                <React.Fragment>
                  {this.jtbInstance && <this.jtbInstance.render />}
                </React.Fragment>
              )
            }
          ]}
        />
      </S.Container>
    );
  }
}

//Styles Object
// - Can be used to create classnames or straight up styled components.
const S = {
  welcome: css`
    color: black;
    font-size: 64px;
    font-weight: 100;
  `,
  containerAsClassName: cx(
    "container-as-class-name",
    css`
      background-color: #dd6622;
      text-align: center;
      font-size: 32px;
      padding-bottom: 6px;
      font-weight: 600;
    `
  ),
  Container: styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: Inter;
  `
};

// Initialize app object
const app = new App();
//render our app to the screen.
app.renderOnDOM("root", null);

window["app"] = app;
