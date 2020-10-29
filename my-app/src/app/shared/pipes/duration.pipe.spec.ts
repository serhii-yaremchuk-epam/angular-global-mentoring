import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform pipe should return the proper string', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(3805)).toEqual('1h 3min');
    expect(pipe.transform(4805)).toEqual('1h 20min');
    expect(pipe.transform(5805)).toEqual('1h 36min');
  });
});
