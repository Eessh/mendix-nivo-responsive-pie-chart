/**
 * This file was generated from NivoPieChart.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";
import { Big } from "big.js";

export type LegendsTypeEnum = "default" | "no" | "specify";

export type ThemeTypeEnum = "default" | "specify";

export interface NivoPieChartContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    data: DynamicValue<string>;
    startAngle: number;
    endAngle: number;
    legendsType: LegendsTypeEnum;
    legends?: DynamicValue<string>;
    themeType: ThemeTypeEnum;
    theme?: DynamicValue<string>;
    fit: boolean;
    animate: boolean;
    innerRadius: Big;
    activeInnerRadiusOffset: number;
    activeOuterRadiusOffset: number;
    padAngle: Big;
    cornerRadius: Big;
    enableBorders: boolean;
    borderWidth: number;
    borderColor?: DynamicValue<string>;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginLeft: number;
    enableArcLabels: boolean;
    arcLabel?: DynamicValue<string>;
    arcLabelsRadiusOffset: Big;
    arcLabelsSkipAngle: number;
    arcLabelsTextColor?: DynamicValue<string>;
    enableArcLinkLables: boolean;
    arcLinkLabel?: DynamicValue<string>;
    arcLinkLabelsSkipAngle: number;
    arcLinkLabelsOffset: number;
    arcLinkLabelsTextOffset: number;
    arcLinkLabelsStraightLength: number;
    arcLinkLabelsDiagonalLength: number;
    arcLinkLabelsThickness: number;
    arcLinkLabelsColor?: DynamicValue<string>;
    arcLinkLabelsTextColor?: DynamicValue<string>;
    colors?: DynamicValue<string>;
    definitions?: DynamicValue<string>;
    fills?: DynamicValue<string>;
}

export interface NivoPieChartPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    data: string;
    startAngle: number | null;
    endAngle: number | null;
    legendsType: LegendsTypeEnum;
    legends: string;
    themeType: ThemeTypeEnum;
    theme: string;
    fit: boolean;
    animate: boolean;
    innerRadius: number | null;
    activeInnerRadiusOffset: number | null;
    activeOuterRadiusOffset: number | null;
    padAngle: number | null;
    cornerRadius: number | null;
    enableBorders: boolean;
    borderWidth: number | null;
    borderColor: string;
    marginTop: number | null;
    marginRight: number | null;
    marginBottom: number | null;
    marginLeft: number | null;
    enableArcLabels: boolean;
    arcLabel: string;
    arcLabelsRadiusOffset: number | null;
    arcLabelsSkipAngle: number | null;
    arcLabelsTextColor: string;
    enableArcLinkLables: boolean;
    arcLinkLabel: string;
    arcLinkLabelsSkipAngle: number | null;
    arcLinkLabelsOffset: number | null;
    arcLinkLabelsTextOffset: number | null;
    arcLinkLabelsStraightLength: number | null;
    arcLinkLabelsDiagonalLength: number | null;
    arcLinkLabelsThickness: number | null;
    arcLinkLabelsColor: string;
    arcLinkLabelsTextColor: string;
    colors: string;
    definitions: string;
    fills: string;
}
