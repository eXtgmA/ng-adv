Navigate to folder `\demos\unit-testing`

Investigate `SimpleClass.ts` and `SimpleClass.spec.ts`

Find a list of matches at [Jasmine Docs](https://jasmine.github.io/api/edge/matchers.html)

Notice the First Test:

```typescript
it("contains 12 charactes", function() {
  expect(SimpleClass.sayHelloWorld().length).toEqual(12);
});
```

Run the Test using `ng test`
