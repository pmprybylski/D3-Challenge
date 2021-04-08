# D3 Homework - Data Journalism and D3

## Background

Welcome to the newsroom! You've just accepted a data visualization position for a major metro paper. You're tasked with analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help readers understand your findings.

The editor wants to run a series of feature stories about the health risks facing particular demographics. She's counting on you to sniff out the first story idea by sifting through information from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System.

The data set included with the assignment is based on 2014 ACS 1-year estimates from the [US Census Bureau](https://data.census.gov/cedsci/), but you are free to investigate a different data set. The current data set includes data on rates of income, obesity, poverty, etc. by state. MOE stands for "margin of error."


## Population that Smokes v Median Age

Using D3 techniques, created a scatter plot that represents each state with circle elements. The graphics are coded in the `app.js`, pulling in the data from `data.csv` by using the `d3.csv` function. 

* Includes state abbreviations in the circles.

* Axes and labels are created and situated to the left and bottom of the chart.

* Tooltips added to reveal a specific element's data when the user hovers their cursor over the element, using the `d3-tip.js` plugin developed by [Justin Palmer](https://github.com/Caged).

