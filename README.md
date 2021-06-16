# Service provider app - Frontend

## Start Instructions
1. `yarn install`
2. Start Backend App
3. `yarn start`

NOTE: project is configured to hit `https://localhost:8080/api/v1/` API URL, if backend is ran on different port please update this value in `.env` file
NOTE: `.env` file is added to this project repo cause of easy way of running app withut need for configuration

## Important used libs
1. Redux js toolkit: https://redux-toolkit.js.org/ - reason for usage this library is to shrink developmen code for redux integration, so there is no constants, actions and reducer managing and especially state management for async requests.
2. For manging Async requests RTK Query: https://redux-toolkit.js.org/rtk-query/overview from Reduxjs toolkit has been used, therefore whole API integration is put under `services/serviceProviderApi` file, by using this tool, accessing and managing async requests is done by using hooks. for exmaple:

```
import { useGetSkillsQuery, useCompleteProfileMutation } from '../../services/serviceProviderApi';

// First array item is async method that needs to be called
// second item is JSON object which values are updated based on current status of async method
// isSuccess - false/true
// isLoading - false/true
// date - response data from API
// error- error that is produced by API call
const [completeProfile, { isSuccess, isLoading, data, error }] = useCompleteProfileMutation();
```

3. For router `react-router v4` was used, it is more or less market standard and very easy to use and declarative
4. As UI Kit/library Ant Design UI kit has been used: https://ant.design/docs/react/introduce - reason for using this one is that this UI kit really well works with `styled-components` which can be integrated in the future for more component based development


## Folder Organization - Architecture
Application is separated in 5 key folders which are related top function that particular folder provides:
1. `components` - represents directory of components that are or can be used in more than one place within the app, also all components that are used from Ant Design KIT are re-defined in this folder, reason for this is possiblity future change of UI KIt, if that is done at some point then only components in this folder needs to be updated which will make migration to new UI kit much easier and safer.
2. `layouts` - represents directory of possible global layouts that are attached to components/pages, e.g: layout for public pages, layout that is shown when Private pages are accessed.. etc
3. `pages` - represents directory of all compoents that are connected to some specific URL (Route: /login, /signup.. etc), defualt export of this directory is list of route configurations as follows:

```
  // Public pages
  { path: '/login', exact: true, component: Login, layout: PublicLayout },
  { path: '/signup', exact: true, component: Signup, layout: PublicLayout },

  // Non Public Pages
  { path: '/complete-profile', exact: true, component: CompleteProfile, layout: AppLayout },
  { path: '/home', exact: true, component: Home, layout: AppLayout },

```

reason for this kind of default export is that application is leaving room for `react-router v4` replacmeent in the future, since this format is just JSON structure which can be teached to possible new router.

4. `services` - directory of all APIs that applications is using
5. `utils` - directory of all util type of methods that can be used within application



## Styling mechanism
Styling is done via CSS for the sake of simcplicty but given that Ant Design supports `styled-components` application is open to incorporate this tool from which application can benefit and have mroe component based elements.


## Yet to be done
- [ ] add tests
- [ ] move state update from local to global state (utilizing totoally redux for state management)
- [ ] divide application into smaller runnable modules where each module will represent a small application with separated state (micro apps)
