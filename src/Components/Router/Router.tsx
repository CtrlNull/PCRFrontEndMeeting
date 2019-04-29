import * as React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import URLHelper from "../../Utilities/URLHelper";

interface Route {
  route: string;
  onRouted: () => void;
  render: any;
}
interface RouterProps {
  routes: Array<Route>;
}

@observer
export default class Router extends React.Component<RouterProps> {
  @observable routes: any = {};
  @observable urlRoute: string = "";

  constructor(props: RouterProps) {
    super(props);
    this.props.routes.map((route: Route) => {
      this.routes[route.route] = route;
    });
    this.urlRoute = URLHelper.parseSearchUrlForValueAsIs(
      "r",
      window.location.href
    );
    console.log(this.urlRoute);
  }

  componentDidMount() {
    if (
      this.urlRoute.length > 0 &&
      this.routes[this.urlRoute.toLowerCase()] != undefined
    ) {
      this.routes[this.urlRoute.toLowerCase()].onRouted();
    } else if (this.routes[""] != undefined) {
      this.routes[""].onRouted();
    }
  }

  render() {
    let ret = null;
    if (
      this.urlRoute.length > 0 &&
      this.routes[this.urlRoute.toLowerCase()] != undefined
    ) {
      ret = this.routes[this.urlRoute.toLowerCase()].render;
    } else if (this.routes[""] != undefined) {
      ret = this.routes[""].render;
    }
    return ret;
  }
}
