import { ReactElement, createElement } from "react";

export function preview(): ReactElement {
    return <span>Nivo Responsive Pie Chart</span>;
}

export function getPreviewCss(): string {
    return require("./ui/NivoPieChart.css");
}
