(function (window) {
    'use strict';
    window.com  = {
        pearson : {
            Hello : React.createClass({displayName: "Hello",
                render: function() {
                    return React.createElement("div", null, "Hello ", this.props.name);
                }
            })
        }
    }


})(window);

/*
var Hello = React.createClass({displayName: "Hello",
    render: function() {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
});
*/
