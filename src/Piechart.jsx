import React from "react"
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

const Piechart = (props) => {
    // Resolves charts dependancy
    charts(FusionCharts);

    const dataSource = {
        chart: {
            caption: "Sentiment-Score",
            subcaption: "",
            showvalues: "1",
            showpercentintooltip: "0",
            numberprefix: "",
            numbersuffix: "%",
            enablemultislicing: "1",
            theme: "fusion"
        },
        data: [
            {
                label: "Positive",
                value: props.value?.Sentiment.positive.toString()
            },
            {
                label: "Negative",
                value: props.value?.Sentiment.negative.toString()
            },
            {
                label: "Neutral",
                value: props.value?.Sentiment.neutral.toString()
            },
        ]
    };


    return (
        <div className="d-flex justify-content-center">
            <ReactFusioncharts
                type="pie3d"
                width="60%"
                height="60%"
                dataFormat="JSON"
                dataSource={dataSource}
                className="piec"
            />
        </div>
    );
}


export default Piechart;
