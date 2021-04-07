// TODO: create a scatter plot between two of the data variables

// TODO: create a scatter plot that represents each state with circle elements. 

// TODO: You'll code this graphic in the app.js file of your homework directory—make sure you pull in the data from data.csv by using the d3.csv function. 

// TODO: Include state abbreviations in the circles.

// TODO:  Create and situate your axes and labels to the left and bottom of the chart.

// Set up svg parameters
var svgWidth = 960
var svgHeight = 500

var margin = {
      top: 20,
      right: 40,
      bottom: 60,
      left: 100
}

var width = svgWidth - margin.left - margin.right
var height = svgHeight - margin.top - margin.bottom

// Create SVG wrapper, append SVG group to hold the chart, and shift by left and top margins
var svg = d3.select('#scatter')
      .append('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)

var chartGroup = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

// Import Data and generate plot
d3.csv('/../data/data.csv').then(censusData => {
      console.log(censusData)

      // // Parse data and case as numbers
      // censusData.forEach(data => {
      //       data.healthcare = +data.healthcare
      //       data.obesity = +data.obesity
      // })

      // // Create scale functions
      // var xLinearScale = d3.scaleLinear()
      //       .domain([20, d3.max(censusData, d => d.healthcare)])
      //       .range([0, width])
      
      // var yLinearScale = d3.scaleLinear()
      //       .domain([0, d3.max(censusData, d => d.obesity)])
      //       .range([height, 0])

      // // Create axis functions
      // var bottomAxis = axisBottom(xLinearScale)
      // var leftAxis = d3.axisLeft(yLinearScale)

      // // Append axes to the chart
      // chartGroup.append('g')
      //       .attr('transform', `translate(0, ${height})`)
      //       .call(bottomAxis)

      // chartGroup.append('g')
      //       .call(leftAxis)

      // // Create circles
      // var circlesGroup = chartGroup.selectAll('circle')
      // .data(censusData)
      // .enter()
      // .append('circle')
      // .attr('cx', d => xLinearScale(d.healthcare))
      // .attr('cy', d => yLinearScale(d.obesity))
      // .attr()
      // .attr()
      // .attr()
})


