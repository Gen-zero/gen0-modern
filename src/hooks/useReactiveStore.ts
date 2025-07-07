import { useState, useEffect, useCallback } from 'react';

type Subscriber<T> = (value: T) => void;
type Updater<T> = (current: T) => T;

interface ReactiveStore<T> {
  get: () => T;
  set: (value: T | Updater<T>) => void;
  subscribe: (subscriber: Subscriber<T>) => () => void;
  use: () => T;
}

export function createStore<T>(initialValue: T): ReactiveStore<T> {
  let value = initialValue;
  const subscribers = new Set<Subscriber<T>>();

  const get = () => value;

  const set = (newValue: T | Updater<T>) => {
    const nextValue = typeof newValue === 'function' 
      ? (newValue as Updater<T>)(value) 
      : newValue;
    
    if (nextValue !== value) {
      value = nextValue;
      subscribers.forEach(subscriber => subscriber(value));
    }
  };

  const subscribe = (subscriber: Subscriber<T>) => {
    subscribers.add(subscriber);
    return () => {
      subscribers.delete(subscriber);
    };
  };

  const use = () => {
    const [state, setState] = useState(value);
    
    useEffect(() => {
      setState(value);
      const unsubscribe = subscribe(setState);
      return unsubscribe;
    }, []);
    
    return state;
  };

  return { get, set, subscribe, use };
}

export function computed<T, U>(store: ReactiveStore<T>, compute: (value: T) => U): ReactiveStore<U> {
  return createStore(compute(store.get()));
}