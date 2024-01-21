import { v4 } from 'uuid';
import { RecoilState, atom, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

export class RecoilStore<T> {
  private readonly store: RecoilState<T>;

  constructor(value?: T) {
    this.store = atom({
      key: v4(),
      default: value as T,
    });
  }

  useValue() {
    return useRecoilValue(this.store);
  }

  useState() {
    return useRecoilState(this.store);
  }

  useSetState() {
    return useSetRecoilState(this.store);
  }

  useResetState() {
    return useResetRecoilState(this.store);
  }
}
