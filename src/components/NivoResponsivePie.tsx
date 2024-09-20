import { ReactElement, createElement } from "react";
import { MayHaveLabel, ResponsivePie, ComputedDatum } from "@nivo/pie";
import { Box, Theme, SvgFillMatcher } from "@nivo/core";
import { LegendProps } from "@nivo/legends";
import { OrdinalColorScaleConfig, InheritedColorConfig } from "@nivo/colors";

export interface IMayHaveLabelFix extends MayHaveLabel {
    id?: string;
    value: number;
    color?: string;
}

type NivoResponsivePieProps = {
    data: IMayHaveLabelFix[];
    innerRadius: number;
    padAngle: number;
    cornerRadius: number;
    margin?: Box;
    colors?: OrdinalColorScaleConfig<ComputedDatum<MayHaveLabel>>;
    defs?: Array<{
        id: string;
        [key: string]: any;
    }>;
    fill?: Array<{
        id: string;
        match: Record<string, unknown> | "*" | SvgFillMatcher<ComputedDatum<MayHaveLabel>>;
    }>;
    legends?: LegendProps[] | null;
    animate: boolean;
    enableArcLabels: boolean;
    enableArcLinkLabels: boolean;
    theme?: Theme;
    borderWidth?: number;
    borderColor?: InheritedColorConfig<ComputedDatum<MayHaveLabel>>;
    activeInnerRadiusOffset: number;
    activeOuterRadiusOffset: number;
    arcLinkLabelsSkipAngle: number;
    arcLinkLabelsTextColor?: InheritedColorConfig<ComputedDatum<MayHaveLabel>>;
    arcLinkLabelsColor?: InheritedColorConfig<ComputedDatum<MayHaveLabel>>;
    arcLabelsSkipAngle: number;
    arcLabelsTextColor?: InheritedColorConfig<ComputedDatum<MayHaveLabel>>;
    arcLabelsRadiusOffset: number;
    arcLinkLabelsDiagonalLength: number;
    arcLinkLabelsOffset: number;
    arcLinkLabelsStraightLength: number;
    arcLinkLabelsTextOffset: number;
    startAngle: number;
    endAngle: number;
    fit: boolean;
    arcLabel?: string;
    arcLinkLabel?: string;
    arcLinkLabelsThickness: number;
};

const DefaultProps: NivoResponsivePieProps = {
    data: [
        {
            id: "scala",
            label: "scala",
            value: 66,
            color: "hsl(52, 70%, 50%)"
        },
        {
            id: "make",
            label: "make",
            value: 530,
            color: "hsl(237, 70%, 50%)"
        },
        {
            id: "ruby",
            label: "ruby",
            value: 17,
            color: "hsl(293, 70%, 50%)"
        },
        {
            id: "hack",
            label: "hack",
            value: 589,
            color: "hsl(152, 70%, 50%)"
        },
        {
            id: "stylus",
            label: "stylus",
            value: 357,
            color: "hsl(351, 70%, 50%)"
        }
    ],
    innerRadius: 0.5,
    padAngle: 0.7,
    cornerRadius: 3,
    animate: true,
    enableArcLabels: true,
    enableArcLinkLabels: true,
    borderWidth: 0,
    borderColor: {
        from: "color",
        modifiers: [["darker", 0.2]]
    },
    activeInnerRadiusOffset: 0,
    activeOuterRadiusOffset: 8,
    defs: [
        {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ],
    fill: [
        {
            match: {
                id: "ruby"
            },
            id: "dots"
        },
        {
            match: {
                id: "c"
            },
            id: "dots"
        },
        {
            match: {
                id: "go"
            },
            id: "dots"
        },
        {
            match: {
                id: "python"
            },
            id: "dots"
        },
        {
            match: {
                id: "scala"
            },
            id: "lines"
        },
        {
            match: {
                id: "lisp"
            },
            id: "lines"
        },
        {
            match: {
                id: "elixir"
            },
            id: "lines"
        },
        {
            match: {
                id: "javascript"
            },
            id: "lines"
        }
    ],
    legends: [
        {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
                {
                    on: "hover",
                    style: {
                        itemTextColor: "#000"
                    }
                }
            ]
        }
    ],
    arcLinkLabelsSkipAngle: 10,
    arcLabelsSkipAngle: 10,
    arcLinkLabelsTextColor: "#333333",
    arcLinkLabelsColor: { from: "color" },
    arcLabelsTextColor: {
        from: "color",
        modifiers: [["darker", 2]]
    },
    arcLabel: "formattedValue",
    arcLinkLabel: "id",
    arcLinkLabelsThickness: 2,
    arcLabelsRadiusOffset: 0.5,
    arcLinkLabelsDiagonalLength: 16,
    arcLinkLabelsOffset: 0,
    arcLinkLabelsStraightLength: 24,
    arcLinkLabelsTextOffset: 6,
    startAngle: 0,
    endAngle: 360,
    fit: true
};

const NivoResponsivePie = (props: NivoResponsivePieProps): ReactElement => {
    return (
        <ResponsivePie
            data={props.data ?? DefaultProps.data}
            margin={props.margin}
            innerRadius={props.innerRadius}
            padAngle={props.padAngle}
            cornerRadius={props.cornerRadius}
            activeInnerRadiusOffset={props.activeInnerRadiusOffset}
            activeOuterRadiusOffset={props.activeOuterRadiusOffset}
            enableArcLabels={props.enableArcLabels}
            enableArcLinkLabels={props.enableArcLinkLabels}
            animate={props.animate}
            borderWidth={props.borderWidth}
            borderColor={props.borderColor ?? DefaultProps.borderColor}
            arcLinkLabelsSkipAngle={props.arcLinkLabelsSkipAngle}
            arcLinkLabelsTextColor={props.arcLinkLabelsTextColor ?? DefaultProps.arcLinkLabelsTextColor}
            arcLinkLabelsColor={props.arcLinkLabelsColor ?? DefaultProps.arcLinkLabelsColor}
            arcLabelsSkipAngle={props.arcLabelsSkipAngle}
            arcLabelsTextColor={props.arcLabelsTextColor ?? DefaultProps.arcLabelsTextColor}
            colors={props.colors ?? DefaultProps.colors}
            defs={props.defs ?? DefaultProps.defs}
            fill={props.fill ?? DefaultProps.fill}
            legends={
                props.legends === undefined ? DefaultProps.legends! : props.legends === null ? undefined : props.legends
            }
            arcLabelsRadiusOffset={props.arcLabelsRadiusOffset}
            arcLinkLabelsDiagonalLength={props.arcLinkLabelsDiagonalLength}
            arcLinkLabelsOffset={props.arcLinkLabelsOffset}
            arcLinkLabelsStraightLength={props.arcLinkLabelsStraightLength}
            arcLinkLabelsTextOffset={props.arcLinkLabelsTextOffset}
            fit={props.fit}
            startAngle={props.startAngle}
            endAngle={props.endAngle}
            theme={props.theme}
            arcLabel={props.arcLabel}
            arcLinkLabel={props.arcLinkLabel}
            arcLinkLabelsThickness={props.arcLinkLabelsThickness}
        />
    );
};

export default NivoResponsivePie;
