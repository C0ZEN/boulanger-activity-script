import { init } from './index';

describe('dad', () => {
  const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

  it('should log', function () {
    init();

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith('azdazd');
  });
});
