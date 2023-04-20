import { Component } from '@angular/core';

@Component({
    selector: 'demo-<%= dasherize(name) %>',
    template: `
        <app-markdown-renderer [md]="'{{md}}'"></app-markdown-renderer>
        <mat-card>
            <mat-card-header>
                <mat-card-title> {{name}} </mat-card-title>
            </mat-card-header>
            <mat-card-content>                
            </mat-card-content>
        </mat-card>
        `
})
export class Demo<%= classify(md) %>Component {
    md = '<%= md %>'
}
