    var chart1 = Highcharts.chart('container', {
	    data: {
	        table: 'freq',
	        startRow: 1,
	        endRow: 24,
	        endColumn: 1
	    },

	    chart: {
	        polar: true,
	        type: 'column'
	    },

	    title: {
	        text: 'CitiBike Ridership in One Day at Columbus Ave & W 72 St'
	    },

	    subtitle: {
	        text: 'Data Source: https://www.citibikenyc.com/system-data.  Code Reference: https://www.highcharts.com/'
	    },

	    pane: {
	        size: '80%'
	    },

	    legend: {
	        align: 'right',
	        verticalAlign: 'top',
	        y: 100,
	        layout: 'vertical'
	    },

	    xAxis: {
	        tickmarkPlacement: 'on'
	    },

	    yAxis: {
	        min: 0,
	        endOnTick: false,
	        showLastLabel: true,
	        labels: {
	            formatter: function () {
	                return this.value;
	            }
	        },
	        reversedStacks: false
	    },

	    plotOptions: {
	        series: {
	            stacking: 'normal',
	            shadow: false,
	            groupPadding: 0,
	            pointPlacement: 'on'
	        }
	    }
	});