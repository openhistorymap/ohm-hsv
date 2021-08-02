import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  
  dateToFloat(date: Date): number{
    let ret = date.getFullYear();
    ret += (date.getMonth()) / 12;
    ret += (date.getDate()) * (1 / 12 / 31);
    ret += (date.getHours()) * (1 / 12 / 31 / 24);
    ret += (date.getMinutes()) * (1 / 12 / 31 / 24 / 60);
    ret += (date.getSeconds()) * (1 / 12 / 31 / 24 / 60 / 60);
    return ret;
  }

  floatToDate(value: number): Date {
    const adbc = value / Math.abs(value);
    const y = Math.trunc(value);
    let rest = Math.abs(value - y);
    const m = Math.trunc(rest * 12);
    rest = (rest * 12) - m;
    const d = Math.trunc(rest * 31);
    rest = (rest * 31) - d;
    const H = Math.trunc(rest * 24);
    rest = (rest * 24) - H;
    const M = Math.trunc(rest * 60);
    rest = (rest * 60) - M;
    const S = Math.trunc(rest * 60);
    rest = (rest * 60) - S;
    const ret = new Date();
    ret.setFullYear(y);
    ret.setMonth(m);
    ret.setDate(d);
    ret.setHours(H);
    ret.setMinutes(M);
    ret.setSeconds(S);
    ret.setMilliseconds(rest);
    return ret;
  }

}
