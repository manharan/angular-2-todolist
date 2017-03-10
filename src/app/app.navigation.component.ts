import { Component } from "@angular/core";


@Component ({
  selector:"navigation",
  templateUrl: "app.navigation.component.html",
  styles:[
`    nav .navbar-nav a:visited, a:link {
      color: #607D8B;
    }
    nav .navbar-nav a:hover {
      color: #039be5;
      background-color: rgba(0,149,255,.44)!important;
    }
    nav .navbar-nav a.active {
      color: #039be5;
      background-color:rgba(0,149,255,.44);
    }
`
  ]
})

export class NavigationComponent {
  navigationList:Object[] = [
    {id:1, label:'Home', path:'/home'},
    {id:2, label:'Form', path:'/form'},
    {id:3, label:'Shopping', path:'/shopping'},
    {id:4, label:'Twitter', path:'/twitter'},
    {id:5, label:'Facebook', path:'/facebook'},
    {id:6, label:'Gmail', path:'/gmail'}
  ]

}
