	//hey this is invisible and the below thing turns the color of hello im cool to red from green
	var doCoolStuff = function () {
		var currnetClassName = document.getElementById('cool').className;

		if (currnetClassName == 'cool') 
			document.getElementById('cool').className = 'cool red';

		} else {
			document.getElementById('cool').className = 'cool ';

		}
			document.getElementById('cool').className = 'cool red';
	}
	var car = {
		make: 'VW',
		type: 'polo',
		color: 'blue',
		isTurnedOn: false,
		numberOfWheels: 4,
		seats: [
			'seat 1',
			'seat 2',
			'seat 3', 
			'seat 4'
		],
		turnOn: function () {
			this.isTurnedOn = true;
		},
		fly: function () {
			alert ('fly');
		},
		switchCar: function (isOn) {
			console.log('turncar '+ -isOn);
			if (isOn == true) {
				this.isTurnedOn = true;
			} else {
				this.isTurnedOn = false;
			}
		}
	};

		console.log ('hello there freinds!');