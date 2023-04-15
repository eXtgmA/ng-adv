Navigate to `/e2e/src/app.po.ts`

Inspect the following code:

```typescript
export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mat-sidenav > div > mat-toolbar > h4')).getText();
  }
}
```

Open Protractors [Locator Reference](https://www.protractortest.org/#/locators) and quickly read through it.

Navigate to `/e2e/src/app.e2e-spec.ts` and inspect the code:

```typescript
describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Testing");
  });
});

```

Run `ng e2e` and watch output