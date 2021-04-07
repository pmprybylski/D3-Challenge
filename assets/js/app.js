// TODO: create a scatter plot between two of the data variables

// TODO: create a scatter plot that represents each state with circle elements. 

// TODO: You'll code this graphic in the app.js file of your homework directory—make sure you pull in the data from data.csv by using the d3.csv function. 

// TODO: Include state abbreviations in the circles.

// TODO:  Create and situate your axes and labels to the left and bottom of the chart.

// Set up svg parameters
var svgWidth = 960
var svgHeight = 750

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
d3.csv('/assets/data/data.csv').then(censusData => {
      console.log(censusData)

      // Parse data and case as numbers
      censusData.forEach(data => {
            data.smokes = +data.smokes
            data.age = +data.age
      })

      // Create scale functions
      var xLinearScale = d3.scaleLinear()
            .domain([8, d3.max(censusData, d => d.smokes)])
            .range([0, width])
      
      var yLinearScale = d3.scaleLinear()
            .domain([28, d3.max(censusData, d => d.age)])
            .range([height, 0])

      // Create axis functions
      var bottomAxis = d3.axisBottom(xLinearScale)
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
            .attr('cx', d => xLinearScale(d.smokes))
            .attr('cy', d => yLinearScale(d.age))
            .attr('r', '15')
            .attr('fill', '#467302')
            .attr('opacity','.5')
      
            chartGroup.append('text')
            .style('text-anchor', 'middle')
            .style('font-family', 'sans-serif')
            .style('font-size', '8px')
            .style('fill', '#F2F2F2')
            .selectAll('tspan')
            .data(censusData)
            .enter()
            .append('tspan')
            .attr('x', data => {
                  return xLinearScale(data.smokes)
            })
            .attr('y', data => {
                  return yLinearScale(data.age - .1)
            })
            .text(data => {
                  return data.abbr
            })

      // Initialize tooltip
      var toolTip = d3.tip()
            .attr('class', 'tooltip')
            .style('background', '#A2BF63')
            .html(function(d) {
                  return (`${d.state}<br>Smokers (%): ${d.smokes}%<br>Age: ${d.age}%`)
            })
      
      // Create tooltip in chart
      chartGroup.call(toolTip)

      // Create event listeners to display and hide the tooltip
      circlesGroup.on('click', data => {
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
                  .text('Median Age')
            
            chartGroup.append('text')
                  .attr('transform', `translate(${width / 2}, ${height + margin.top + 30})`)
                  .attr('class', 'axisText')
                  .text('Population that Smokes (%)')
}).catch(error => {
      console.log(error)
})


