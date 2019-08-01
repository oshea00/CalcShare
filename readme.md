# Calculator Sharing Website

This application is based on the React+Redux AspNetCore project template in 
Visual Studio DotNet Core 2.2.

I've made a number of changes to incorporate some of my own coding standards for Redux Actions, but largely,
I've kept to the approach used in the template to maintain combined Action/Reducer logic in a single file
for each feature under the "src/store" folder.

Some of the additional features used in this project to make it a "real-life" example:
1. Loading configuration into the SPA application on Startup using a ConfigController action in "src/index.js".
2. Use of OAuth 2.0 provider to authenticate SPA users. In this case, Auth0.com API, and obtain idToken for use
   in other authenticated RestAPI calls.
3. Use of [Authorize] on the WebApi SampleData controller - using the JwtAuthenticate scheme. (See Startup.cs)
4. Customized "PrivateRoute" component which handles passing props to route components for idToken and isAuthenticated.

Note: Make sure required configuration items are present (see ConfigController.cs). I set local development
configuration via user-secrets. When deploying we can choose whatever method is convenient depending  (env, appsettings, etc.)

Example of configuration values:
* StoreServiceUrl = "https://path_to_StoreServiceBaseUrl"
* AuthDomain = "authtenant.domain.com"
* AuthClientId = "OauthClientId"
* AuthAudience = "OAuthAudienceName"
* AuthRedirectUrl = "http://calcshare_url_to_call_afterauth"

