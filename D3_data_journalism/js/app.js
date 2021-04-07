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
d3.csv('../data/data.csv').then(censusData => {
      console.log(censusData)

      // Parse data and case as numbers
      censusData.forEach(data => {
            data.healthcare = +data.healthcare
            data.obesity = +data.obesity
      })

      // Create scale functions
      var xLinearScale = d3.scaleLinear()
            .domain([20, d3.max(censusData, d => d.healthcare)])
            .range([0, width])
      
      var yLinearScale = d3.scaleLinear()
            .domain([0, d3.max(censusData, d => d.obesity)])
            .range([height, 0])

      // Create axis functions
      var bottomAxis = axisBottom(xLinearScale)
      var leftAxis = d3.axisLeft(yLinearScale)

      // Append axes to the chart
      chartGroup.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(bottomAxis)

      chartGroup.append('g')
            .call(leftAxis)

      // Create circles
      var circlesGroup = chartGroup.selectAll('circle')
      .data(censusData)
      .enter()
      .append('circle')
      .attr('cx', d => xLinearScale(d.healthcare))
      .attr('cy', d => yLinearScale(d.obesity))
      .attr('r', '15')
      .attr('fill', '#74A60A')
      .attr('opacity','.5')

      // Initialize tooltip
      var toolTip = d3.tip()
            .attr('class', 'tooltip')
            .offset([80, -60])
            .html(function(d) {
                  return (`${d.state}<br>Healthcare: ${d.healthcare}%<br>Obesity: ${d.obesity}%`)
            })
      
      // Create tooltip in chart
      chartGroup.call(toolTip)

      // Create event listeners to display and hide the tooltip
      circlesGroupGroup.on('click', data => {
            toolTip.show(data, this)
      })
            // on mouseout event
            .on('mouseout', (data, index) => {
                  toolTip.hide(data)
            })
      
      // Create axes lables
      chartGroup.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 0 - margin.left + 40)
            .attr('x', 0 - (height / 2))
            .attr('dy', '1em')
            .attr('class', 'axisText')
            .text('Lacking Healthcare (%)')
      
      chartGroup.append('text')
            .attr('transform', `translate(${width / 2}, ${height + margin.top + 30})`)
            .attr('class', 'axisText')
            .text('Obesity (%)')
}).catch(error => {
      console.log(error)
})


