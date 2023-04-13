# Food App Project - Lab Theming

- Implement a Custom Material Theme with a Custom Color Scheme of your choice

- Create a Theme Mixin for Toolbar, Card and Table

    ![buttons](_images/food-design.png)

## Guide

Angular Material is already installed in the project. You can use the [Angular Material Theming Guide](https://material.angular.io/guide/theming) to create a custom theme.

Remove the old theme from the `styles.scss` file:

```json
"styles": [
   "./node_modules/@angular/material/prebuilt-themes/pink-bluegrey.css",
```   

Create a theme folder in the `src-folder` of the project and include it in the `angular.json` file:

```json
"stylePreprocessorOptions": {
    "includePaths": ["src/theme"]
},
```

Add a reset.scss file to the theme folder and include it in the `styles.scss` file. You can copy a sample reset from [here](https://meyerweb.com/eric/tools/css/reset/)

```scss
@import 'reset';
```

Add a `mat-theme.scss` file to the theme folder and include it in the `styles.scss` file.

```scss
//Provides theme functionality
@use '@angular/material' as mat;
@include mat.core();
@import '@angular/material/theming';

//Pick colors here: https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes
$primary: mat.define-palette(mat.$brown-palette, 400);
$accent: mat.define-palette(mat.$grey-palette, 400);
$warn: mat.define-palette(mat.$red-palette);
$fg: mat.define-palette(mat.$grey-palette, 100);
$bg: mat.define-palette(mat.$blue-grey-palette, 100);

//Build theme
$theme: mat.define-light-theme((
 color: (
   primary: $primary,
   accent: $accent,
   warn: $warn,
 ),
 typography: mat.define-typography-config(),
 density: 0,
));

//Include theme
@include angular-material-theme($theme);

//Export global vars from design system for easy use
:root {
  --color-primary: #{mat-color($primary)};
  --color-accent: #{mat-color($accent)};
  --color-warn: #{mat-color($warn)};
  --color-fg: #{mat-color($fg)};
  --color-bg: #{mat-color($bg)};

  --gap-small: 0.5rem;
  --gap-medium: 0.8rem;
  --gap-big: 1.1rem;
  --toolbar-xl: 85px;
  --toolbar-big: 70px;
  --toolbar-medium: 40px;
  --toolbar-small: 35px;
  --font-small: 0.9rem;
  --font-medium: 1.2rem;
  --font-big: 1.4rem;
}
```

>Note: You can pick your own colors from [here](https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes)

Add a `mat-theme-overrides.scss` file to the theme folder and include it in the `styles.scss` file.

Add a section the the file that formats the table. If your time permits you can adjust it to your needs.

```scss
table{
  width: 100%;
}

thead{
  background-color: var(--color-primary) !important;
}

.mdc-data-table__header-cell {
  color: var(--color-fg);
}

th.mat-mdc-header-cell:last-of-type{
  text-align: right;
  padding-right: 24px;
}

td.mat-mdc-cell:last-of-type {
  text-align: right;
  padding-right: 12px;
}
```

Add a section to format the material card used in the edit form:

```scss
.mat-mdc-card-outlined  {
  background-color: var(--color-primary)!important;
  margin-bottom: var(--gap-big);
  padding: 0 !important;
}

.mat-mdc-card-title{
  color: var(--color-fg);
}
```