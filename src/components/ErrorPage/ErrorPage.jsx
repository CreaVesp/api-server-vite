import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Опять наебнулось...</h1>
            <p>
                <i>{error.statusText}</i>
                <i>{error.message}</i>
            </p>
        </div>
    );
}

export default ErrorPage