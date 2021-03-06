/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

// FIXME(samgoldman) Remove top-level interface once Babel supports
// `declare interface` syntax.
// FIXME(samgoldman) Remove this once Subject<T> can mixin Observer<T>
interface rx$IObserver<T> {
  onNext(value: T): mixed;
  onError(error: any): mixed;
  onCompleted(): mixed;
}

declare module 'rx' {
  declare class Observable<T> {
    static catch(...sources: Observable<T>[]): Observable<T>;

    // This is actually variadic, but we only support one or two other observables.
    static combineLatest<T, U>(t: Observable<T>, u: Observable<U>): Observable<[T, U]>;
    static combineLatest<T, U, V>(
      t: Observable<T>,
      u: Observable<U>,
      resultSelector: (t: T, u: U) => V,
    ): Observable<V>;
    static combineLatest<T, U, V>(
      t: Observable<T>,
      u: Observable<U>,
      v: Observable<V>,
    ): Observable<[T, U, V]>;
    static combineLatest<T, U, V, W>(
      t: Observable<T>,
      u: Observable<U>,
      v: Observable<V>,
      resultSelector: (t: T, u: U, v: V) => W,
    ): Observable<W>;

    static concat(...sources: Observable<T>[]): Observable<T>;

    static create(
      subscribe: (observer: Observer<T>) => IDisposable | Function | void
    ): Observable<T>;

    static defer(observableFactory: () => Observable<T>): Observable<T>;

    static from(iterable: Iterable<T>): Observable<T>;

    static fromEvent(
      element: any,
      eventName: string,
      selector?: () => T,
    ): Observable<T>;

    static fromPromise(promise: Promise<T>): Observable<T>;

    static empty(): Observable<any>;

    static interval(period: number): Observable<number>;

    static just(value: T): Observable<T>;

    static merge(sources: Observable<T>[]): Observable<T>;
    static merge(...sources: Observable<T>[]): Observable<T>;

    static never(): Observable<void>;

    static of(...values: T[]): Observable<T>;

    static return(value: T): Observable<T>;

    static throw(error: any): Observable<any>;
    static throwError(error: any): Observable<any>;

    static using<Resource: IDisposable>(
      resourceFactory: () => Resource,
      observableFactory: (resource: Resource) => Observable<T>,
    ): Observable<T>;

    amb(other: Observable<T>): Observable<T>;

    buffer(bufferBoundaries: Observable<any>): Observable<Array<T>>;

    doOnNext(f: (value: T) => mixed): Observable<T>;

    catch(secondOrHandler: Observable<T> | (error: any) => Observable<T>): Observable<T>;

    // This is actually variadic, but we only support one or two other observables.
    combineLatest<U>(u: Observable<U>): Observable<[T, U]>;
    combineLatest<U, V>(u: Observable<U>, v: Observable<V>): Observable<[T, U, V]>;
    combineLatest<U, V>(
      u: Observable<U>,
      resultSelector: (t: T, u: U) => V,
    ): Observable<V>;
    combineLatest<U, V, W>(
      u: Observable<U>,
      v: Observable<V>,
      resultSelector: (t: T, u: U, v: V) => W,
    ): Observable<W>;

    concat(...sources: Observable<T>[]): Observable<T>;

    concatMap<U>(
      f: (value: T) => Observable<U> | Promise<U> | Iterable<U>
    ): Observable<U>;

    debounce(duration: number): Observable<T>;

    delay(dueTime: number): Observable<T>;

    distinctUntilChanged(): Observable<T>;

    doOnError(onError: (error: any) => mixed, thisArg?: any): Observable<T>;

    filter(predicate: (value: T) => boolean): Observable<T>;

    finally(f: () => mixed): Observable<T>;

    first(): Observable<T>;

    flatMap<U>(
      f: (value: T) => Observable<U> | Promise<U> | Iterable<U>
    ): Observable<U>;

    flatMapLatest<U>(
      f: (value: T) => Observable<U> | Promise<U> | Iterable<U>
    ): Observable<U>;

    forEach(
      onNext?: (value: T) => mixed,
      onError?: (error: any) => mixed,
      onCompleted?: () => mixed,
    ): IDisposable;

    map<U>(f: (value: T) => U): Observable<U>;

    merge(other: Observable<T>): Observable<T>;

    mergeAll(): T; // assumption: T is Observable

    pausableBuffered(pauser: Observable<boolean>): Observable<T>;

    publish(): ConnectableObservable<T>;

    publishLast(): ConnectableObservable<T>;

    reduce<U>(
      accumulator: (
        acc: U,
        currentValue: T,
        index: number,
        source: Observable<T>,
      ) => U,
      seed: U,
    ): Observable<U>;

    replay(): ConnectableObservable<T>;

    retry(retryCount: number): Observable<T>;

    retryWhen(notifier: (errors: Observable<Error>) => Observable<any>): Observable<T>;

    scan<U>(
      f: (acc: U, value: T) => U,
      initialValue: U,
    ): Observable<U>;

    share(): Observable<T>;

    skip(count: number): Observable<T>;

    skipUntil(other: Observable<any> | Promise<any>): Observable<T>;

    skipUntilWithTime(startTime: Date | number): Observable<T>;

    take(count: number): Observable<T>;

    takeUntil(other: Observable<any>): Observable<T>;

    takeWhile(f: (value: T) => boolean): Observable<T>;

    tapOnError(onError: (error: any) => mixed, thisArg?: any): Observable<T>;

    throttle(duration: number): Observable<T>;

    timeout(dueTime: number, other?: Observable<T>): Observable<T>;

    toArray(): Observable<T[]>;

    toPromise(): Promise<T>;

    subscribe(
      onNext?: (value: T) => mixed,
      onError?: (error: any) => mixed,
      onCompleted?: () => mixed,
    ): IDisposable;
    subscribe(observer: rx$IObserver<T>): IDisposable;

    subscribeOnNext(onNext: (value: T) => mixed): IDisposable;
    subscribeOnError(onError: (error: any) => mixed): IDisposable;
    subscribeOnCompleted(onCompleted: () => mixed): IDisposable;
  }

  declare class ConnectableObservable<T> extends Observable<T> {
    connect(): IDisposable;
    refCount(): Observable<T>;
  }

  declare class Observer<T> {
    static create(
      onNext?: (value: T) => mixed,
      onError?: (error: any) => mixed,
      onCompleted?: () => mixed,
    ): Observer<T>;

    asObserver(): Observer<T>;

    onNext(value: T): mixed;

    onError(error: any): mixed;

    onCompleted(): mixed;
  }

  // FIXME(samgoldman) should be `mixins Observable<T>, Observer<T>`
  // once Babel parsing support exists: https://phabricator.babeljs.io/T6821
  declare class Subject<T> extends Observable<T> {
    asObservable(): Observable<T>;

    hasObservers(): boolean;

    dispose(): void;

    // Copied from Observer<T>
    asObserver(): Observer<T>;
    onNext(value: T): mixed;
    onError(error: any): mixed;
    onCompleted(): mixed;
  }

  declare class BehaviorSubject<T> extends Subject<T> {
    constructor(initialValue: T): void;

    getValue(): T;
  }

  declare class ReplaySubject<T> extends Subject<T> {

  }

  declare class Disposable {
    static create(action: () => mixed): IDisposable;
  }
}
