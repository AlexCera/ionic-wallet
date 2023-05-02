import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  features: IFeature[] = [
    {
      id: 1,
      name: 'Top Up',
      icon: 'trending-up',
      page: ''
    },
    {
      id: 2,
      name: 'Withdraw',
      icon: 'trending-down',
      page: ''
    },
    {
      id: 3,
      name: 'Send',
      icon: 'send',
      page: ''
    },
    {
      id: 4,
      name: 'Pay',
      icon: 'wallet',
      page: ''
    }
  ]

  transactions: ITransaction[] = [
    {
      id: 1,
      person: 'Alex Viloria',
      value: 15000,
      time: new Date(),
      type: 1
    },
    {
      id: 2,
      person: 'Jesu Daniel',
      value: 30000,
      time: new Date(),
      type: 2
    },
    {
      id: 3,
      person: 'Daniela Maria',
      value: 1000,
      time: new Date(),
      type: 2
    },
    {
      id: 3,
      person: 'Liseth Sofia',
      value: 200000,
      time: new Date(),
      type: 2
    }
  ]

  constructor() { }

}

interface IFeature {
  id: number
  name: string
  icon: string
  page: string
}

interface ITransaction {
  id: number
  person: string
  value: number
  time: Date
  type: number
}