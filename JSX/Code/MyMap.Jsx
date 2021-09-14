var MyMap = React.createClass({
    render: function() {
        return (
            <div id="map"><span></span></div>
        );
    }
});
 
ReactDOM.render(<MyMap />,document.getElementById('main'));