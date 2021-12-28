import React from "react"
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

const Piechart = () => {
    // Resolves charts dependancy
    charts(FusionCharts);

    const dataSource = {
        chart: {
            caption: "Recommended Portfolio Split",
            subcaption: "For a net-worth of $1M",
            showvalues: "1",
            showpercentintooltip: "0",
            numberprefix: "$",
            enablemultislicing: "1",
            theme: "fusion"
        },
        data: [
            {
                label: "Equity",
                value: "300000"
            },
            {
                label: "Debt",
                value: "230000"
            },
            {
                label: "Bullion",
                value: "180000"
            },
            {
                label: "Real-estate",
                value: "270000"
            },
            {
                label: "Insurance",
                value: "20000"
            }
        ]
    };

    class MyComponent extends React.Component {
        render() {
            return (
                <ReactFusioncharts
                    type="pie3d"
                    width="100%"
                    height="100%"
                    dataFormat="JSON"
                    dataSource={dataSource}
                />
            );
        }
    }
}

export default Piechart;
