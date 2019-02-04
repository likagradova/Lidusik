import React, {Component} from "react";

class OutGoingsTable extends  Component {
    state = {
        data: {}
    };
    render (){
        const {filter} = this.props;
        const {data} = this.state;
        if (!data.items) {
            return <div>No data</div>
        }
        const items = !filter ? data.items : data.items.filter(function(item){
            return item.flt.toString().includes(filter);
        });
        const rows = items.map(function (item) {
            return <tr>
                <td>{item.dat}</td>
                <td>{item.mar1.description}</td>
                <td>{item.co.name}</td>
                <td>{item.flt}</td>
                <td>{item.vip_status_rus}</td>
            </tr>
        });
        return (<div>
            <div>Таблица вылетающих рейсов</div>
            <table>
                <tbody>
                <tr>
                 <th>Время</th>
                 <th>Город</th>
                 <th>Компания</th>
                 <th>Рейс</th>
                 <th>Статус</th>
                </tr>
                {rows}
                </tbody>
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