# choko_swift_food_frontend
A Food delivery app mobile client service built with React Native Expo and Redux


# Development Environment Setup

### Install React Native CLI globally 
- `npm install -g react-native-cli`
### Install Expo Cli globally
- `npm install -g expo-cli`
### Download and Install mobile Simulators
If you don't have a mobile simulator installed on your PC for Android or IOS or both, follow the instructions below to be able to preview react-native code across both operating system.

### Android Emulator
- Download Android studio here [Here](https://developer.android.com/studio)
- Follow the instructions on the [Article](https://developer.android.com/studio/run/managing-avds) to create and manage your own virtual device on android studio

### IOS Simulator (Mac users only)
- Download and install xcode from your Mac app store 
- After succesful installation, open Xcode, go to Preference settings > Locations and select your Xcode version in the `Command Line Tools` dropdown. 

# To Run App
- git clone - `https://github.com/chokonaira/choko_swift_foods_frontend.git`
- cd `choko_swift_food_frontend`
- `npm install`
- If you already have the andriod virtual device setup, manually run your Android Emulator on the background by opening Android studio > click Configure > click AVD Manager > click the green play button
- `npm run open-ios-simulator` to open your IOS Simulator on the background
- `npm start` to run react native server.
- In your Terminal where your server is running, type letter `a` to automatically preview code on your android emulator. type letter `i` to automatically preview choko_swift_food_frontend on your IOS Simulator

### To run App on debug mode - 
- Follow this instructions to install react-native stand alone debugger Tool [here](https://github.com/jhen0409/react-native-debugger)
- After installation, Open React Native Debugger Tool > click debugger settings on the top left menu bar > Open config file > Modify defaultRNPackagerPorts to run on [19001] > Save and exit.
- Make sure your mobile virtual devices are running in the background
- `npm run debug` to run server in debug mode
- When you preview code on the running virtual devices, it will automatically connect to the dubugger which is running on port `19001`

## choko_swift_food_frontend Backend
The Backend Logic can be found here: [Backend source code](https://github.com/chokonaira/choko_swift_foods_backend)

### API server host
The Backend API is hosted on heroku here: [Heroku](https://choko-swift-foods-backend.herokuapp.com/)

### Documentation
The API documentation on Postmant can be found here: [Postman Documentation](https://documenter.getpostman.com/view/8211988/T17FCosH?version=latest)

