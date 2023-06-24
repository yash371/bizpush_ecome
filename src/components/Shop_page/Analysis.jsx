import React from 'react'
import '../../styles/Analysis.css'
import { analysisorders } from '../../constants/data.js'


function Analysis() {
    const analysisArray = [{
        title: "Total Sales",
        price: "$281.90",
        chart: "/assets/analysis/Chart1.svg",
        child: (<SalesChartChild />),
    },
    {
        title: "Total Sessions",
        price: "456",
        chart: "/assets/analysis/Chart2.svg",
        child: (<SessionChild />),
    },
    {
        title: "Customer rate",
        price: "5.43%",
        chart: "/assets/analysis/Chart3.svg",
        child: (<CustomerRateChild />),
    }
    ];
    return (
        <section className="analysis-wrapper">
            {
                analysisArray.map(item => (
                    <CardComponent {...item} />
                ))
            }

            <ActionComponent />
        </section>
    )
}

export default Analysis

const CardComponent = (props) => {
    return (
        <div className="analysis-card">
            <div className="analysis-card-content">
                <div className="card-content-left">
                    <div className="card-content-title">{props.title}</div>
                    <div className="card-conent-price">
                        {props.price}
                    </div>
                </div>
                <div className="card-content-right">
                    <img src={props.chart} alt="Heee" />
                </div>
            </div>
            <div className="analysis-card-footer">
                {props.child}
            </div>
        </div>
    );
}

const SalesChartChild = () => {
    return (
        <>
            <div className="chart-text">6 total orders</div>
            <div className="chart-text">View report</div>
        </>
    )
}

const SessionChild = () => {
    return (
        <>
            <div className="live-box">Live</div>
            <div className="chart-text">4 vistors</div>
            <div className="chart-text">See Live View</div>
        </>
    )
}

const CustomerRateChild = () => {
    return (
        <div className='chart_CONTENT'>
            <div className="chart-text">
                <div className="circle-content bg-purple"></div>
                First Time</div>
            <div className="chart-text">
                <div className="circle-content bg-orange"></div>
                Returning</div>
        </div>
    )
}

const ActionComponent = () => {
    return (
        <div className="action-card">
            <div className="action-card-head">
                <div className="head-tabs">
                    <span className="head-tab">Actions</span>
                    <span className="head-tab head-tab-active">Orders</span>
                </div>
                <div className="head-icon">
                    <img src="/assets/analysis/Icon.svg" alt="" />
                </div>
            </div>
            <div className="action-card-content">
                {
                    analysisorders.map(item => (
                        <OrdersItemContent {...item} />
                    ))
                }

            </div>
        </div>
    );
}

const OrdersItemContent = (props) => {
    return (
        <div className="order-item-content">
            <div className="content-item-left">
                <div className="item-box">{
                    props.time}</div>
                <div className="item-line"></div>
            </div>
            <div className="content-item-right">
                {
                    props.title}
            </div>
        </div>)
}

