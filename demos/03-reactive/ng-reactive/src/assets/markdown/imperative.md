- Event-handling-like programming style that does subscribe
- When subscribing the data is taken out of the stream and assigned to props / vars that are not Observables
- The Component rendering is bound to that props / vars 
- Needs proper unsubscribing to avoid memory leak

  ```typescript
  ngOnInit(): void {
    this.service.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
  ```
