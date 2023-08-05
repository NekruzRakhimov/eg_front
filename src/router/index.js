import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Enterprises from "../pages/Enterprises";
import Classifiers from "../pages/Classifiers";
import Reports from "../pages/Reports";
import EnterPriseIdPage from "../pages/EnterPriseIdPage";
import ClassifierItemPage from "../pages/ClassifierItemPage";
import ReportTechnicalEconomic from "../pages/ReportTechnicalEconomic";
import ReportScientificTechnical from "../pages/ReportScientificTechnical";
import ReportSocialEconomic from "../pages/ReportSocialEconomic";
import ReportNatural from "../pages/ReportNatural";
import ReportForeignEconomic from "../pages/ReportForeignEconomic";
import ReportIndustrialActivityObjects from "../pages/ReportIndustrialActivityObjects";

export const privateRoutes = [
    {path: "/enterprises", component: Enterprises, exact: true},
    {path: "/enterprises/:id", component: EnterPriseIdPage, exact: true},
    {path: "/classifiers", component: Classifiers, exact: true},
    {path: "/classifiers/:id/items/:item_id", component: ClassifierItemPage, exact: true},
    {path: "/reports", component: Reports, exact: true},
    {path: "/reports/technical_economic", component: ReportTechnicalEconomic, exact: true},
    {path: "/reports/technical_economic/industrial_activity_objects", component: ReportIndustrialActivityObjects, exact: true},
    {path: "/reports/scientific_technical", component: ReportScientificTechnical, exact: true},
    {path: "/reports/social_economic", component: ReportSocialEconomic, exact: true},
    {path: "/reports/natural_natural", component: ReportNatural, exact: true},
    {path: "/reports/foreign_economic", component: ReportForeignEconomic, exact: true},

    {path: "/about", component: About, exact: true},
    {path: "/posts", component: Posts, exact: true},
    {path: "/posts/:id", component: PostIdPage, exact: true},
    {path: "/error", component: Error, exact: true},
]

export const publicRoutes = [
    {path: "/login", component: Login, exact: true},
]