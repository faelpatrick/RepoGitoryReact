import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/" element={<MainPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;