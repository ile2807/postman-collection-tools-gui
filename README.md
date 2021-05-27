# Jackal postman GUI

Jackal postman GUI is a standalone application that uses [Jackal Postman](https://www.npmjs.com/package/jackal-postman) to perform supported collection posts. The available operations in the application are the only ones supported by Jackal Postman. 

<img alt="logo" src="https://github.com/ile2807/postman-collection-tools-gui/raw/main/assets/demo.PNG" height="600" />

## Running from release
Download the latest version available for your operating system unzip it and run the file named `qode`

## Run from source code
**Clone and run for a quick way to see Jackal Gui in action.**

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/ile2807/postman-collection-tools-gui.git
# Install CMake
brew install cmake
# Go into the repository
cd react-nodegui-starter
# Install dependencies
npm install
# Run the dev server
npm run dev
# Open andother terminal and run the app
npm start
```

## Installation & Resources for learning React NodeGui

>This application uses ***React NodeGui*** for visual representation

- [Documentation](https://react.nodegui.org) - all of React NodeGui's documentation.
- [NodeGui](https://nodegui.org) - all of NodeGui's documentation.

## Packaging app as a distributable

In order to distribute your finished app, you can use [@nodegui/packer](https://github.com/nodegui/packer)

### Building and making a distribution

Next you can run the pack command:

```sh
npm run build
```

This will produce the js bundle along with assets inside the `./dist` directory

```sh
npx nodegui-packer --pack ./dist
```

This will build the distributable using @nodegui/packer based on your template. The output of the command is found under the build directory. You should gitignore the build directory.

More details about packer can be found here: https://github.com/nodegui/packer

## License

GPL
