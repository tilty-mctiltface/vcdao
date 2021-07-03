import { HealthClassPipe } from './health-class.pipe';

describe('HealthClassPipe', () => {
  it('create an instance', () => {
    const pipe = new HealthClassPipe();
    expect(pipe).toBeTruthy();
  });
});
