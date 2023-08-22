import { Component } from 'react';
import ServerErrorPage from '../../../pages/ServerErrorPage';

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
        console.error('Error:', error);
        console.error('Error Info:', errorInfo);
    }
    setError(bool) {
        return { hasError: bool };
    }
    render(setError) {
        if (this.state.hasError) {
            // 에러가 발생했을 때 대체 컴포넌트를 반환
            return <ServerErrorPage setError={setError} />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
