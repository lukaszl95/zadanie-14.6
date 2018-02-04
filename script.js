var Counter = React.createClass({
    getInitialState: function() {
        return {
            wynik1: 0,
            wynik2: 0,
            wynik3: 0
        };
    },

    dodawanie1: function() {
        this.setState({
            wynik1: this.state.wynik1 + 1
        });
        //console.log('Dodawanie');
    },
    odejmowanie1: function() {
        this.setState({
            wynik1: this.state.wynik1 - 1
        });
    },
    dodawanie2: function() {
        this.setState({
            wynik2: this.state.wynik2 + 1
        });
    },
    odejmowanie2: function() {
        this.setState({
            wynik2: this.state.wynik2 - 1
        });
    },
    dodawanie3: function() {
        this.setState({
            wynik3: this.state.wynik1 + this.state.wynik2
        });
    },


    componentWillMount: function () {
        console.log('Montowanie komponentu' );
    },
    componentDidMount: function () {
        console.log( 'Zamontowano komponent');
    },
    componentWillReceiveProps: function() {
        console.log('Komponent otrzyma nowe właściwości');
    },
    shouldComponentUpdate: function () {
        console.log('Sprawdzenie czy aktualizować komponent');
        return true;
    },  
    componentWillUpdate: function() {
        console.log('Przygotowanie aktualizacji')
    },
    componentDidUpdate: function() {
        console.log('Aktualizacja');
    },
    componentWillUnmount: function(){
        console.log('Odmontowanie komponentu');
    },
  

    render: function() {
        return React.createElement('div', {},
        	React.createElement('div', {},
	        	React.createElement('button', {onClick: this.dodawanie1}, 'Dodaj'),
	        	React.createElement('button', {onClick: this.odejmowanie1}, 'Odejmij'),
	            React.createElement('span', {}, 'Wynik1= ' + this.state.wynik1)
	        ),
	        React.createElement('div', {},
	            React.createElement('button', {onClick: this.dodawanie2}, 'Dodaj'),
	        	React.createElement('button', {onClick: this.odejmowanie2}, 'Odejmij'),
	            React.createElement('span', {}, 'Wynik2= ' + this.state.wynik2)
	        ),
	        React.createElement('div', {},
	        	React.createElement('button', {onClick: this.dodawanie3}, 'Wynik1 + wynik2'),
	        	React.createElement('span', {}, 'Wynik3= ' + this.state.wynik3)
			)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));