# Module Federation

Dynamic Module Federation is a technique that allows an application to determine the location of its remote applications at runtime. It helps to achieve the use case of “Build once, deploy everywhere”.

“Build once, deploy everywhere” is the concept of being able to create a single build artefact of your application and deploy it to multiple environments such as staging and production.

The difficulty in achieving this with a Micro Frontend Architecture using Static Module Federation is that our Remote applications will have a different location (or URL) in each environment. Previously, to account for this, we would have had to specify the deployed location of the Remote applications and rebuild the application for the target environment.

This guide will walk through how the concept of “Build once, deploy everywhere” can be easily achieved in a Micro Frontend Architecture that uses Dynamic Module Federation.

[Advanced Angular Micro Frontends with Dynamic Module Federation](https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular)