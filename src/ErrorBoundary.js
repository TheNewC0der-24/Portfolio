import Error from "./assets/Images/Error.svg";

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div className="container my-5">
            <div className="d-flex justify-content-center">
                <img className="img-fluid w-50" src={Error} alt="error" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="mb-3">Something went wrong</h1>
                <button className="btn" style={{ borderRadius: "0px", backgroundColor: "#6d2ae2", color: "#dee2e6" }} onClick={resetErrorBoundary}>Try again</button>
            </div>
            <p>It's look like you have stumbled out into the void.</p>
            <p>Don't worry, I am here to help you.</p>
            <div className="card">
                <div className="card-body">
                    <pre>{error.message}</pre>
                </div>
            </div>
        </div>
    )
}

export default ErrorFallback;