import Home from "../components/home/index.jsx";
import Line from "../components/line/line.jsx";
import Bar from "../components/bar/bar.jsx";
import Sunburst from "../components/sunburst/sunburst.jsx";
import Radar from "../components/radar/radar.jsx";
import Funnel from "../components/funnel/funnel.jsx";
import Gauge from "../components/gauge/gauge.jsx";
import Notfount from "../components/ontfiount/notfount.jsx";
import Calendar from "../components/calendar/calendar.jsx";
import Amap from "../components/map/map.jsx";


const routes = [
    {
        path : "/",
        exact : true,
        component : Home
    },
    {
        path : "/line",
        component : Line
    },
    {
        path : "/bar",
        component : Bar
    },
    {
        path : "/sunburst",
        component : Sunburst
    },
    {
        path : "/radar",
        component : Radar
    },
    {
        path : "/map",
        component : Amap
    },
    {
        path : "/funnel",
        component : Funnel
    },
    {
        path : "/gauge",
        component : Gauge
    },
    {
        path : "/calendar",
        component : Calendar
    },
    {
        component : Notfount
    }
];

export default routes;