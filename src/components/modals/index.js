import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
    {
        name: '4', followers: 3,
    },
    {
        name: '5', followers: 2,
    },
    {
        name: '6', followers: 6,
    },
    {
        name: '7', followers: 8,
    },
    {
        name: '8', followers: 9,
    },
    {
        name: '9', followers: 10,
    },
    {
        name: '10', followers: 9,
    },
    {
        name: '11', followers: 10,
    },
    {
        name: '12', followers: 12,
    },
    {
        name: '13', followers: 12,
    },

];

const purple = 'hsl(243, 51%, 70%)';

const wrapStyle = {
    background: 'transparent',
    border: `1px solid ${purple}`,
    padding: '8px',
    color: `${purple}`,
    fontSize: '0.8em',
};
const toolStyle = {
    border: 'none',
    background: 'transparent',
};
const labelStyle = {
    display: 'none',
}
const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <p>{`${payload[0].value} new followers`}</p>
        );
    }

    return null;
};
class FacebookModal extends Component {
    render() {
        return <>
            <div className="title-wrap">
                <h1>Facebook followers</h1>
                <h3>
                    <i className="ms-icon icon-facebook"></i>
                    <span>@nathanf</span>
                </h3>
            </div>
            <div className="statistics">
                <div className="col">
                    <strong>1987</strong>
                    <span>Total <br />followers</span>
                </div>
                <div className="col">
                    <strong className="lime"><i className="ms-icon icon-up"></i> 81</strong>
                    <span>New followers in <br />the past 10 days</span>
                </div>
                <div className="col">
                    <strong className="lime"><i className="ms-icon icon-up"></i> 12</strong>
                    <span>New followers <br />TODAY</span>
                </div>
            </div>
            <div className="graph">
                <div className="gutter">
                    <h5>May 4 - May 13</h5>
                    <ResponsiveContainer width="98%" height="80%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 20, bottom: 20, left: -22, right: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="2 2" />
                            <XAxis dataKey="name" />
                            <YAxis tickCount="7" />
                            <Tooltip
                                content={<CustomTooltip />}
                                separator=""
                                itemStyle={toolStyle}
                                wrapperStyle={wrapStyle}
                                contentStyle={wrapStyle}
                                labelStyle={labelStyle}
                            />
                            <Line type="monotone" dataKey="followers" stroke={purple} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    }
}

export default FacebookModal;
