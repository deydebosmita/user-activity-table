This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### About the project

This is a table containing all the users. Each user row is having a view button to see the current day activity in a modal.
Modal is further having option to view other activity in a calendar. On click on each day showing activity period.

### API
URL: "http://localhost:3000/members"
Method: GET
Sample Response: [
		{
			"id": "W012A3CDN",
			"real_name": "Test Test",
			"tz": "America/Los_Angeles",
			"activity_periods": [
				{
					"start_time": "Mar 1 2020  11:11AM",
					"end_time": "Mar 1 2020 2:00PM"
				},
				{
					"start_time": "Mar 16 2020  5:33PM",
					"end_time": "Mar 16 2020 8:02PM"
				},
				{
					"start_time": "Sep 20 2020  1:33PM",
					"end_time": "Sep 20 2020 1:54PM"
				}
			]
		}
	];
  
  The project is having provition to test with hard coded data. Hard coded data is present in config/testJson file.
  Remove comments from commented out lines and comment line number 29 from component/UserList file.
  
  
