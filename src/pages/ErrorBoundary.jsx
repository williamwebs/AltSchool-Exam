import { Component } from "react";
import "../styles/ErrorBoundary.css";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("Logging", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="container">
          <div className="inner-container error">
            <h1 className="error-test">
              Oh no! An error has occured. Please contact the technical
              department if error persists using this number{" "}
              <a href="tel:+2349124295757">09124295757</a>
            </h1>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
