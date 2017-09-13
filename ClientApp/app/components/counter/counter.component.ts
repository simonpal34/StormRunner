import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
