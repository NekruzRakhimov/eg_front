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
import EmployeeIdPage from "../pages/EmployeeIDPage";
import LicenceIDPage from "../pages/LicenceIDPage";
import CreateEnterprise from "../pages/CreateEnterprise";
import CreatingEmployeePage from "../pages/CreatingEmployeePage";
import EnterpriseStructureIdPage from "../pages/EnterpriseStructureIDPage";
import GoodIdPage from "../pages/GoodIDPage";

export const privateRoutes = [
    {path: "/enterprises", component: Enterprises, exact: true},
    {path: "/create_enterprises", component: CreateEnterprise, exact: true},
    {path: "/enterprises/:id", component: EnterPriseIdPage, exact: true},

    {path: "/enterprises/:id/create_employee", component: CreatingEmployeePage, exact: true},
    {path: "/employees/:id", component: EmployeeIdPage, exact: true},
    {path: "/licences/:id", component: LicenceIDPage, exact: true},
    {path: "/goods/:id", component: GoodIdPage, exact: true},
    {path: "/enterprise_structure/:enterprise_id/:structure_id", component: EnterpriseStructureIdPage, exact: true},

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