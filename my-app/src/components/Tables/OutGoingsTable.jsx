import React, {Component} from "react";

class OutGoingsTable extends  Component {
    state = {
        data: {}
    };
    render (){
        const {data} = this.state;
        if (!data.items) {
            return <div>No data</div>
        }
        const rows = data.items.map(function (item) {
            return <tr>
                <td>{item.dat}</td>
                <td>{item.mar1.description}</td>
                <td>{item.co.name}</td>
                <td>{item.vip_status_rus}</td>
            </tr>
        });
        return (<div>
            <div>Таблица вылетающих рейсов</div>
            <table>
                {rows}
            </table>
            </div>);
    }

    componentDidMount() {
        const _this = this;
        fetch('http://localhost:3000/outgoing.json').then(function(response) {
           return response.json(); 

        }).then(function(data){
            _this.setState({data});
        });
    }
}

export default OutGoingsTable;