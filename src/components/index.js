import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import { fetchSwitchApi,toggleSwitch } from '../actions'

class SwitchApp extends Component {

    componentWillMount = () => {
        this.props.fetchSwitchApi();
    }

    handleSwitch = (enable, data) => {
        console.log(enable, data.darklaunchid);
        this.props.toggleSwitch({isEnable:enable,darklaunchid:data.darklaunchid});

    }
    render() {
        console.log(this.props)
        return (<div>
            {
                this.props.switchState.map(item => <div>
                    {item.description}
                    <Switch 
                    checked={item.isEnable} 
                    onChange={(e) => this.handleSwitch(e, item)} />
                </div>)
            }
        </div>)
    }

}
const mapStateToProps = state => ({
    switchState: state.switchApp.switchReducer
})

export default connect(mapStateToProps, { fetchSwitchApi,toggleSwitch })(SwitchApp);