import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Health } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  async ngOnInit() {
    try {
      const avail = await Health.isAvailable();
      console.log('Is avail', avail);
    } catch (ex) {
      console.error(ex);
    }
  }

  async reqAuth() {
    try {
      const auth = await Health.requestAuth();
      console.log("Is Auth", auth);
    } catch (ex) {
      console.error(ex);
    }
  }

  async getData() {
    try {
      const opts = {
        startDate: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000), //5 days ago
        endDate: new Date(),
        dataType: "weight",
        limit: 50
      };
      const data = await Health.query(opts);
      console.log(data);
    } catch (ex) {
      console.error(ex);
    }
  }

  async setData() {
    const opts = {
      startDate: new Date(new Date().getTime() -  3 * 60 * 1000), //3 mins ago
      endDate: new Date(),
      dataType: "waist",
      limit: 50,
      value: 30
    };
    const saved = await Health.store(opts);
  }
}
