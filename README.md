# Work-Day-Scheduler
Week-5 HW

## Description

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Visuals

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Deployed Application

[Work Day Scheduler Application](https://alek2535.github.io/Work-Day-Scheduler/)

## Installation

To access this project:

```
1. Go to https://github.com/alek2535/Work-Day-Scheduler

2. Click on Clone or download

3. Paste copied link after `git clone` into your bash console in your desired directory

4. You should now have access to the repository
```

## Contributing

Thank you to Carmen Obied(@carmenobied), CJ Pia(@cjpia612), and Zack Corpus(@zcorpuz) who helped get me through this. Bouncing ideas off of each other and providing useful resources helped make this project successful.

## Project Status

This project work correctly, but needs some code refractoring to keep from being to DRY. There is a code snippet commented out that works for pulling information from the input area and storing locally, but needs to be solved for getItem localStorage. 

