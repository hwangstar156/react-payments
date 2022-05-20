import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { children, fallback } = this.props;

    if (this.state.hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
