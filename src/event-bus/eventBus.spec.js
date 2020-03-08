import EventBus from './eventBus';

describe('EventBus', () => {
  it('function on', () => {
    const eventBus = new EventBus();
    const cb = jest.fn();
    eventBus.on('test', cb);
    expect(eventBus.getAllListeners('test').length).toBe(1);
  });

  it('function emit', () => {
    const eventBus = new EventBus();
    const cb = jest.fn();
    const cb2 = jest.fn(x => x);
    eventBus.on('test', cb);
    eventBus.on('test', cb2);
    eventBus.emit('test', 20);
    expect(cb.mock.calls.length).toBe(1);
    expect(cb2.mock.calls.length).toBe(1);
    expect(cb2.mock.results[0].value).toBe(20);
  });

  it('function off', () => {
    const eventBus = new EventBus();
    const cb = jest.fn();
    eventBus.on('test', cb);
    expect(eventBus.getAllListeners('test').length).toBe(1);
    eventBus.off('test', cb);
    expect(eventBus.getAllListeners('test').length).toBe(0);
  });

  it('function once', () => {
    const eventBus = new EventBus();
    const cb = jest.fn();
    eventBus.once('test', cb);
    expect(eventBus.getAllListeners('test').length).toBe(1);
    eventBus.emit('test');
    expect(eventBus.getAllListeners('test').length).toBe(0);
  });
});
