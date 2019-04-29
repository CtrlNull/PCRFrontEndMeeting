import * as React from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';

export default class MachineComponent {
  uniqueId: string = '';
  constructor() {
    this.uniqueId = 'machine';
    this.render = observer(this.render.bind(this));
  }

  render(props: any): JSX.Element {
    return <React.Fragment />;
  }

  renderOnDOM(elementId: string, props: any) {
    render(<this.render {...props} />, document.getElementById(elementId));
  }

  renderSelfToDOM() {
    const document = window.document;
    const mountedElement = document.querySelector(`#${this.uniqueId}`);
    if (!mountedElement) {
      let newMountedElement = document.createElement('div');
      newMountedElement.id = this.uniqueId;
      document.body.appendChild(newMountedElement);
    }
    this.renderOnDOM(this.uniqueId, null);
  }
}

//Wrapper component to add in some react lifecycle functionality.
export interface LifecycleWrapperProps {
  children?: any;
  componentDidMount?: () => void;
  componentDidUpdate?: () => void;
  componentWillUnmount?: () => void;
}
export class LifecycleWrapper extends React.Component<LifecycleWrapperProps> {
  componentDidMount() {
    this.props.componentDidMount && this.props.componentDidMount();
  }
  componentDidUpdate() {
    this.props.componentDidUpdate && this.props.componentDidUpdate();
  }
  componentWillUnmount() {
    this.props.componentWillUnmount && this.props.componentWillUnmount();
  }
  render() {
    return this.props.children ? this.props.children : null;
  }
}
