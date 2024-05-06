import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import DashboardViews from "@/views/DashboardViews";
import CreateProjectView from "@/views/Projects/CreateProjectView";



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" index element={<DashboardViews/>} />
                <Route path="/project/create" element={<CreateProjectView/>} />

            </Route>
        </Routes>
    
    </BrowserRouter>
  )
}