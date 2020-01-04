# JsonMindmap

This project aims to create highly-customizable mindmaps from JSON-file to help quickly navigate and focus on the 
details of the "bigger-picture".

Goals for the alpha version:
- [ ] Take a look at the [Topic map](https://en.wikipedia.org/wiki/Topic_map) and 
[tolog](https://dl.acm.org/doi/10.1007/11676904_17), seems like a similar idea
- [ ] Use tags/labels for nodes (ideas) to help quickly navigate and sort mindmaps
  - [x] Add tags/labels
  - [x] Add global control to display/hide tags
  - [ ] Probably should rename `labels` into `tags` internally
  - [ ] Implement selective tags highlighting (show/highlight only specific tags)
  - [ ] Add labels styling (no idea how to do it with current structure, probably will need separate config file, or 
  random colors...)
  - [ ] Nodes sorting by labels (display only those nodes that has specific tags, hide nodes that have specific tags)
- [ ] Style nodes using text color, font size, background, icon, etc.
  - [x] Make node's title text color configurable
  - [ ] Make node's title background color configurable
  - [ ] Add (multiple) icons to nodes (probable should use material icons)
  - [ ] Sort/highlight nodes by icons in a similar was, as it works for tags
- *... to be continued*

Future versions ideas:
- [ ] Use canvas/svg library to create traditional mindmap view as opposed to the current structured list view

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Components folder is: `src/app/components`.

Services folder is: `src/app/services`.

Interfaces and types for TypeScript are in the `src/app/@types` folder.

Constants are currently in `src/app/constants.ts` file, but it is a subject to change.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Sorry, but tests are not implemented yet. The project is on the early stage and it may change dramatically, so I will
 add tests later.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Sorry, but tests are not implemented yet. The project is on the early stage and it may change dramatically, so I will
 add tests later.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you are interested in this project and want to contact me, you can find all of my contact information on my 
website: [https://maxim.mazurok.com](https://maxim.mazurok.com) 
