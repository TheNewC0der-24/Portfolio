function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" className="container my-5">
            <h3>Something went wrong:</h3>
            <pre>{error.message}</pre>
            <button className="btn btn-danger" style={{ borderRadius: "0px" }} onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export default ErrorFallback;