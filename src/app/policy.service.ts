import { Injectable } from '@angular/core';
//import module policy.ts
import {Policy} from './policy'
@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  public  getPolicies() 
  {
 
    let policies:Policy[]; //array

    policies=
    [
        new Policy(1,'DL01','Term Insurance_Jeevan-Labh',65000,'10 year'),
        new Policy(2,'DL02','Term Insurance_Spouse',25000,'5 year'),
        new Policy(3,'DL03','Term Insurance_Child',10000,'3 year'),
        new Policy(4,'DL04','Term Insurance_Coronavirus',500000,'10 year'),
        new Policy(5,'DL05','Term Insurance_LifeInsurance',100000,'25 year'),
    ]

    return policies;               
}
}

export class MyPolicyService {
public  getMyPolicies() 
{

  let Mypolicies:Policy[]; //array

  Mypolicies=
  [
      new Policy(1,'DL01','Term Insurance_Jeevan-Labh',65000,'10 year'),
      new Policy(2,'DL02','Term Insurance_Spouse',25000,'5 year'),
      new Policy(5,'DL05','Term Insurance_LifeInsurance',100000,'25 year'),
  ]

  return Mypolicies;               
}
}