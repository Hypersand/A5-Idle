<<<<<<< HEAD
import { Component } from 'react';
import ServerErrorPage from '../../../pages/serverErrorPage';

=======
import { Component } from "react";
import ServerErrorPage from "../../../pages/serverErrorPage";
>>>>>>> 23c3d2d890e66d0d922c3ec5ef3bad57550f4328
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }
  setError(bool) {
    return { hasError: bool };
  }
  render(setError) {
    if (this.state.hasError) {
      return <ServerErrorPage setError={setError} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
