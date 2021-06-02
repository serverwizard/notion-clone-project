import {Component} from 'react';
import {connect} from 'react-redux';
import Palette from '../components/Palette';
import {changeColor, CounterAction} from '../store/modules/counter';
import {Dispatch} from "redux";

class PaletteContainer extends Component<{ color: string, changeColor: (color: string) => CounterAction }> {
    handleSelect = (color: string) => {
        const {changeColor} = this.props;
        console.log('what');
        changeColor(color);
    };

    render() {
        const {color} = this.props;
        return <Palette onSelect={this.handleSelect} selected={color}/>;
    }
}

const mapStateToProps = (state: any) => ({
    color: state.counter.color,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
    changeColor: (color: string) => dispatch(changeColor(color)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaletteContainer);