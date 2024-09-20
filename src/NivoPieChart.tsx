import { ReactElement, createElement } from "react";

import { NivoPieChartContainerProps } from "../typings/NivoPieChartProps";

import "./ui/NivoPieChart.css";
import { MayHaveLabel, ComputedDatum } from "@nivo/pie";
import { LegendProps } from "@nivo/legends";
import NivoResponsivePie, { IMayHaveLabelFix } from "./components/NivoResponsivePie";
import { Theme, SvgFillMatcher } from "@nivo/core";
import { OrdinalColorScaleConfig } from "@nivo/colors";

export function NivoPieChart(props: NivoPieChartContainerProps): ReactElement {
    let parsedData: IMayHaveLabelFix[];
    try {
        parsedData = JSON.parse(props.data.value!) as IMayHaveLabelFix[];
    } catch (e) {
        return <span>{"Error in Chart Data (JSON): " + e.message}</span>;
    }

    const getParsedLegends = (): LegendProps[] => {
        return JSON.parse(props.legends!.value!);
    };

    const getParsedTheme = (): Theme => {
        return JSON.parse(props.theme!.value!);
    };

    const getColors = (): OrdinalColorScaleConfig<ComputedDatum<MayHaveLabel>> | undefined => {
        return props.colors ? JSON.parse(props.colors.value!) : undefined;
    };

    const getDefinitions = ():
        | Array<{
              id: string;
              [key: string]: any;
          }>
        | undefined => {
        return props.definitions ? JSON.parse(props.definitions.value!) : undefined;
    };

    const getFills = ():
        | Array<{
              id: string;
              match: Record<string, unknown> | "*" | SvgFillMatcher<ComputedDatum<MayHaveLabel>>;
          }>
        | undefined => {
        return props.fills ? JSON.parse(props.fills.value!) : undefined;
    };

    return (
        <NivoResponsivePie
            data={parsedData}
            animate={props.animate}
            borderWidth={props.enableBorders ? props.borderWidth : undefined}
            cornerRadius={props.cornerRadius.toNumber()}
            enableArcLabels={props.enableArcLabels}
            enableArcLinkLabels={props.enableArcLinkLables}
            padAngle={props.padAngle.toNumber()}
            innerRadius={props.innerRadius.toNumber()}
            activeOuterRadiusOffset={props.activeOuterRadiusOffset}
            margin={{
                top: props.marginTop,
                right: props.marginRight,
                bottom: props.marginBottom,
                left: props.marginLeft
            }}
            legends={
                props.legendsType === "default" ? undefined : props.legendsType === "no" ? null : getParsedLegends()
            }
            theme={props.themeType === "default" ? undefined : getParsedTheme()}
            arcLabelsSkipAngle={props.arcLabelsSkipAngle}
            arcLinkLabelsSkipAngle={props.arcLinkLabelsSkipAngle}
            arcLabelsTextColor={props.arcLabelsTextColor?.value}
            arcLinkLabelsColor={props.arcLinkLabelsColor?.value}
            arcLinkLabelsTextColor={props.arcLinkLabelsTextColor?.value}
            borderColor={props.enableBorders ? props.borderColor?.value : undefined}
            colors={getColors()}
            defs={getDefinitions()}
            fill={getFills()}
            activeInnerRadiusOffset={props.activeInnerRadiusOffset}
            arcLabelsRadiusOffset={props.arcLabelsRadiusOffset.toNumber()}
            arcLinkLabelsDiagonalLength={props.arcLinkLabelsDiagonalLength}
            arcLinkLabelsOffset={props.arcLinkLabelsOffset}
            arcLinkLabelsStraightLength={props.arcLinkLabelsStraightLength}
            arcLinkLabelsTextOffset={props.arcLinkLabelsTextOffset}
            startAngle={props.startAngle}
            endAngle={props.endAngle}
            fit={props.fit}
            arcLabel={props.arcLabel?.value}
            arcLinkLabel={props.arcLinkLabel?.value}
            arcLinkLabelsThickness={props.arcLinkLabelsThickness}
        />
    );
}
