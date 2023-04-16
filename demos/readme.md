# Topics

## Theming Angular Apps

- Migrating to MDC-based Angular Material Components using Angular 15+
- Styling Angular Components Deep Dive
- Comparing Angular Material & Bootstrap
- Bootstrap Resets, Layout Helper & Utilities
- Best of Both: Combining Bootstrap & Angular Material
- Building a Reusable Theme
- Theming Custom Components
- Material Design Migration to MDC

## Components & Forms Deep Dive

- Standalone Components: Creation, Lazy Loading, Bootstrapping
- Using Angular Directives Composition Api
- Templates TemplateRef, *ngTemplateOutlet
- Comparison: ng-template vs ng-content - pro / cons
- ViewChild, -Children, ContentChild, -Children
- HostBinding & HostListener
- Recap Reactive Forms Revisited (FormGroup, Form Builder, FormControl, FormArray)
- Untyped Forms vs Typed Forms 
- Typed Forms Nullability, NonNullableFormBuilder, GetRawValue
- Partial Values, Optional Controls, Dynamic Groups and FormRecord
- Cascading Form Controls
- Implementing Custom Controls using ControlValueAccessor
- Typed Forms Validation & Custom Validators
- Handling FormErrors & ErrorStateMatcher

## Mastering Reactive Programming using Signals & RxJs

- Imperative vs Functional Programming
- Immutability & Pure Functions
- Introduction to RxJs
- Imperative vs Declarative Reactive Programming
- Observables, Observers & Use Cases
- Data- vs Action-Streams
- Mouse & DOM Events as Observables
- Unsubscribing (takeUntil, DestroyRef, takeUntilDestroyed)
- Introduction to Signals
- Signals vs Observables: Syncronous & Asynchronous Reactive Programming
- Understanding Marble Diagrams & Debugging Observables
- Implementing Side Effects using tap
- Marble-testing RxJs
- Base Operators: Mapping, Filtering, Merging, Scanning, ...
- Combination & Transformation Operators
- Retry & Error Handling Strategies
- Implementing & Testing Custom Observable Operators

## Advanced State Management using NgRx

- Overview State Management Patterns
- Statefull Services with Behaviour Subject
- Intra Component Communication using Event Bus Pattern
- Introduction to the Redux Pattern & NgRx
- Using Store, Selectors, Actions, createActionGroup and Reducers
- Debugging NgRx using Redux Dev Tools
- Feature State and ActionReducerMap
- Effects, Facades, @ngrx/enitity adapters
- Simplifying Data Access with @ngrx/data
- NgRx Data Optimistic & Pessimistic Update and Delete
- NgRx Container Presenter Best Practices
- Understanding, Profiling & Optimizing Angular Change Detection
- Optimize Change Detection using ngrxPush, ChangeDetectioRef
- @ngrx/component-store vs Store
- Using @ngrx/component-store

## Advanced Routing and App Initialization

- Dependency Injection in Depth: Resolution modifiers and Dependency providers
- APP_INITIALIZER, Injection & forwardRef
- Introduction to @ngrx/router-store
- Implementing Global Error Handling and Retry-Patterns
- Integrating Route Guards & Interceptors with State
- Chaining Route Guards & Interceptors
- Optimizing Modules using Code Splitting & Preloading
- Auxilary Routes: Common use cases
- Preloading Component Data from NgRx using Resolvers
- Introduction to Visual Feedback (Loading-, Saving-, ...-Indicator)

## Securing Angular using NgRx and using Cloud Identities

- Recap Jwt, OAuth 2.0 & OpenID Connect
- Token based Authentication in Angular with NgRx
- Impelmenting an AuthModule using a Facade Service, Components, Guards & Interceptors
- Optimizing Application Flow for Authetication
- Authentication using Microsoft Identity, Azure AD and @azure/msal-angular

## Advanced Testing & Cypress Introduction

- Using Testbed & Spies
- Testing Components & Components interaction
- Complex Forms Testing
- Async Component Testing (done, fakeAsync, waitForAsync)
- Testing Observables & BehaviourSubjects
- Mock Data & Http Testing
- Interacting with Components in Tests
- Material Testing using Component Harnesses
- Testing NgRx: Mock Store, Mock Selectors, Reducers, ...
- Using Jest for Unit Testing (Setup, Changes in spec, Snapshot Tests)
- End-2-End Testing using Cypress

## Supporting Reusability with Libraries and Packages

- Angular Building Blocks: Workspace, Apps, Libraries
- Reusable Artifacts using Angular Libraries
- Implementing, Publishing and Consuming Libraries to / from GitHub Packages
- Understanding Monorepos: Pro / Cons
- Introduction to Nx Workspaces, Apps & Libs
- Introduction to Angular Schematics
- Implementing Web Components using Angular Elements

## Optimizing Applications

- Using Linting and Autoformat with Prettier
- Using Chrome Dev Tools & Lighthouse for Performance Optimization
- Understanding & Using Page Traces
- Optimizing Images using NgOptimizedImage 
- Analysing and Optimizing Bundles & Modules
- Introduction to Server Side Rendering (SSR) using Angular Universal
- Why Server Side Rendering
- Configure Server Side Rendering & prerender static pages

## Implementing Real Time connected Microfrontends

- Introduction to Microfrontends and Event Driven Architecture (EDA)
- Implementing a Real Time connected Microfrontend listening to Cloud Events
- Using `@ngrx/component-store`
- Introduction to Progressive Web Apps
- Understanding and Configuring Service Workers & Manifests
- Installing & Updating Progressive Web Apps

## Publishing Angular App using Containers and Config Injection

- Deployment Overview & Cloud Hosting Options
- Configuration Management and Config Injection Options
- Creating an Angular Multi-Stage Docker Image using environment variables
- Publishing to a Cloud Container Host and executing Cypress E2E Tests
