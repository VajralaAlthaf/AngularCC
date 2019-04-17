# Download the project
open terminal on your laptop and type the following command 
git clone https://github.com/kc795/angular_cape_crucible.git or alternatively download the project as zip file

# For google sign in api, we need to generate client ID 
go to https://console.developers.google.com

1. In the dashboard section, click on "creae" 
2. In the next screen you will find an auto generated project name. click "create" again in this page.
3. Go to credentials section in the side menu. click on "create credentials" and select "OAuth Client ID"
4. In the next page click "configure consent screen". 
5. Type application name as your project name and hit "save" at the end of the page.
6. In the next page select Web Application.
7. In the "Authorized javascript origin section", type "http://localhost:4200" (since angular runs on 4200 by default)
8. click create and copy the generated token
9. paste in the src/app/app.module.ts file in the angular project in the "GoogleLoginProvider('your_client_id')" code snippet 
replace your_client_id with the copied client id


# For Facebook Sign in api
1. go to https://developers.facebook.com/apps/
2. click on "Add a new app"
3. Give the display name as your Project name
4. click "create App ID"
5. type the captcha and in the next screen you will find your app id on the top of the page. 
6. copy it paste in the src/app/app.module.ts file in the angular project in the "FacebookLoginProvider('your_app_id')" code snippet
replace your_app_id with the copied app id

# For stripe integration

1. register and login to https://dashboard.stripe.com/test/dashboard and  your publisher_key will be auto generated for you
2. copy it and replace 'your_publishable_key' with the copied key i in the "NgxStripeModule.forRoot('your_publishable_key')" snippet of src/app/app.module.ts file

# Running project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.
# Installing dependencies 
navigate to the project root folder and run "npm install" (ignore the "npm fix audit warnings")
## Development server
navigate to the project folder in a terminal and run 'ng serve'
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

